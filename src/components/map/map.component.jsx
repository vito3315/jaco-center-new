import React from 'react';

import {Helmet} from "react-helmet";

import Grid from '@mui/material/Grid';

import PropTypes from 'prop-types';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { MySelect } from '../../stores/elements';

import itemsStore from '../../stores/items-store';
import config from '../../stores/config';

const queryString = require('query-string');

function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}

export class Map extends React.Component {
  interval = null;
  map = null;

  constructor(props) {
    super(props);
        
    this.state = {
      module: 'concenter',
      module_name: '',
      is_load: false,
      
      modalDialog: false,
      modalDialogDel: false,
      
      cities: [],
      city_id: '',
      date: formatDate(new Date()),
      point_list: [],
      need_point_list: [],
      point_id: 0,
      indexTab: 0,

      orders: [],
      ordersRender: [],
      showOrder: null,

      radiogroup_options: [
        {id: '0', label: 'Решили отредактировать заказ', value: 0 },
        {id: '1', label: 'Не устраивает время ожидания', value: 0 },
        {id: '2', label: 'Изменились планы', value: 0 },
        {id: '3', label: 'Недостаточно средств', value: 0 },
        {id: '4', label: 'Другое', value: 0 },
      ],
      textDel: '',
      typeDel: -1,

      number: '',
      addr: '',

      allItems: []
    };
  }
  
  async checkLogin(){
    let data = {
      token: itemsStore.getToken()
    }

    let res = await this.getData('check_login_center', data);

    if( res === true ){
        
    }else{
      localStorage.removeItem('token');
      clearInterval(this.interval)
      setTimeout( () => {
        window.location.href = '/auth'
      }, 500 )
    }
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  async componentDidMount(){
    if((window.location.protocol == 'http:' || window.location.protocol == 'http') && window.location.hostname != 'localhost'){
      window.location.href = 'https://jacocallcenter.ru'+window.location.pathname;
    }

    itemsStore.setPage('orders');
    this.interval = setInterval(() => this.checkLogin(), 1000*60*60);
    this.checkLogin();

    let res = await this.getData('get_center_all');

    let need_points = res.points.filter( (item, key) => parseInt(item.city_id) == parseInt(res.cities[0].id) );

    console.log( res )


    this.setState({
      cities: res.cities,
      point_list: res.points,
      need_point_list: need_points,
      point_id: parseInt(need_points[0].id),
      city_id: parseInt(res.cities[0].id),
    })
    
    setTimeout( () => {
      this.getOrders(parseInt(res.cities[0].id));
    }, 300 )
  }
  
  getData = (method, data = {}) => {
    
    this.setState({
      is_load: true
    })
    
    data.type = method;
    data.token = itemsStore.getToken();

    return fetch(config.urlApi, {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'},
      body: queryString.stringify( data ) 
    }).then(res => res.json()).then(json => {
      
      if( json.st === false && json.type == 'redir' ){
        window.location.pathname = '/';
        return;
      }
      
      if( json.st === false && json.type == 'auth' ){
        window.location.pathname = '/auth';
        return;
      }
      
      setTimeout( () => {
        this.setState({
          is_load: false
        })
      }, 300 )
      
      return json;
    })
    .catch(err => { 
      console.log( err )
      this.setState({
        is_load: false
      })
    });
  }
   
  async changeCity(event){
    this.setState({
      number: '',
      addr: ''
    })

    let data = event.target.value;
    
    let need_points = this.state.point_list.filter( (item, key) => parseInt(item.city_id) == parseInt(data) );

    this.setState({
      city_id: data,
      need_point_list: need_points,
      point_id: parseInt(need_points[0].id),
      indexTab: 0
    })

    setTimeout( () => {
      this.getOrders(parseInt(data));
    }, 300 )
  }
  
  changePoint(event, index){
    let point_id = event.target.id;
    point_id = point_id.split('-')[2]

    this.setState({
      point_id: point_id,
      indexTab: parseInt(index)
    })

    this.getOrders(point_id, index);
  }

  async getOrders(city_id){
    let data = {
      city_id: city_id
    };
    
    let json = await this.getData('get_addr_zone', data);

    let points_zone = [];

    json.map(function(point){
			if(point['zone_origin'].length > 0){
				points_zone.push( JSON.parse(point['zone_origin']) );
			}
    })
            
    let unic_point = [],
        check = false;
            
    json.map(function(point){
      check = false;
      
      unic_point.map(function(new_point){
        if( parseInt(new_point.id) == parseInt(point.id) ){
          check = true;
        }
      })
      
      if( !check ){
        unic_point.push(point)
      }
    })
    
    this.setState({
      //points: json,
      //unic_point: unic_point,
      //is_load: true
    })
    
    setTimeout(() => {
      this.loadMap(json, points_zone);
    }, 500);
    
  }

  loadMap(points, points_zone){
    //let myMap2;
    
    if( !this.map ){
      ymaps.ready(() => {

        this.map = new ymaps.Map('ForMap', {
          center: [ points[0]['xy_center_map']['latitude'], points[0]['xy_center_map']['longitude'] ],
          zoom: 10.8
        });
          
        let HintLayout = ymaps.templateLayoutFactory.createClass( 
          "<div class='my-hint'>" +
            "<b>{{ properties.address }}</b><br />" +
            "Зона {{ properties.zone }}<br />" +
            "График работы: c 10:00 до 21:30<br />" +
            "Стоимость доставки: {{ properties.sum_div }} руб." +
          "</div>"
        );
    
        points_zone.map((zone, key)=>{
          this.map.geoObjects.add(
            new ymaps.Polygon([zone], {
              address: points[ key ]['addr'], 
              sum_div: points[ key ]['sum_div'], 
              zone: points[ key ]['test'],
            }, {
              hintLayout: HintLayout,
              fillColor: 'rgba(187, 0, 37, 0.25)',
              strokeColor: 'rgb(187, 0, 37)',
              strokeWidth: 5
            })
          );
        })
          
        points.map((point) => {
          this.map.geoObjects.add(
            new ymaps.Placemark( [point['xy_point']['latitude'], point['xy_point']['longitude']], {
            }, {
              iconLayout: 'default#image',
              iconImageHref: '/assets/img_other/Favikon.png',
              iconImageSize: [30, 30],
              iconImageOffset: [-12, -24],
              iconContentOffset: [15, 15],
            })
          )
        })
      })
    }else{
      this.map.destroy();
      this.map = null;

      console.log('destroy')

      this.loadMap(points, points_zone);
    }
  }

  render(){
    return (
      <>
        <Backdrop open={this.state.is_load} style={{ zIndex: 99, color: '#fff' }}>
          <CircularProgress color="inherit" />
        </Backdrop>
        
        <Helmet>
          <title>Карта</title>
        </Helmet>

        
        
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <MySelect data={this.state.cities} value={this.state.city_id} func={ this.changeCity.bind(this) } label='Город' />
          </Grid>

          <Grid item xs={12}>
            <div style={{ width: '100%', height: 650, marginRight: 12, backgroundColor: '#e5e5e5' }} id="ForMap" />    
          </Grid>
          
        </Grid>
      </>
    )
  }
}