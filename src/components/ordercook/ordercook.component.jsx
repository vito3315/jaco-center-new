import React from 'react';

import {Helmet} from "react-helmet";

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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

export class OrderCook extends React.Component {
  interval = null;
  
  constructor(props) {
    super(props);
        
    this.state = {
      classes: this.props.classes,
      cityList: [],
      spiner: false,
      
      data: [],
      
      selectedPoint: '',
      selectedDate: formatDate(new Date()),
      
      points: [],
      point: null,
      
      activeCat: 0,
      
      orders: [],
      orderCheck: false,
      
      showOrder: null,
      openDialog: false,
      
      delOrder: false,
      radiogroup_options: [
        {id: '0', label: 'Решили отредактировать заказ', value: 0 },
        {id: '1', label: 'Не устраивает время ожидания', value: 0 },
        {id: '2', label: 'Изминились планы', value: 0 },
        {id: '3', label: 'Недостаточно средств', value: 0 },
        {id: '4', label: 'Другое', value: 0 },
      ],
      textDel: '',
      typeDel: -1
    };
  }
    
  getData = (method, data = {}) => {
    
    this.setState({
      spiner: true
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
          spiner: false
        })
      }, 300 )
      
      return json;
    })
    .catch(err => { 
      console.log( err )
      this.setState({
        spiner: false
      })
    });
  }

  componentWillUnmount(){
    clearInterval(this.interval)
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
  
  async componentDidMount(){
    document.title = "Заказы на кухне";
    itemsStore.setPage('ordercook');

    this.interval = setInterval(() => this.checkLogin(), 1000*60*60);
    this.checkLogin();
    
    let data = {
      city_id: 1
    }

    let res = await this.getData('get_points_center', data);

    console.log( res )

    this.setState({
      points: res,
      selectedPoint: res[0].id
    })
    
    setTimeout( () => {
      this.getCookOrders();
    }, 500 )
  }
    
  changePoint(event){
    let point = event.target.value;
    
    this.setState({ selectedPoint: point });
    setTimeout( () => {
      this.getCookOrders();  
    },500 )
  }
  
  async getCookOrders(){
    let data = {
      point_id: this.state.selectedPoint
    }

    let res = await this.getData('getCookOrders', data);

    this.setState({
      data: res,
    })
  }
  
  render() {
    return (
      <Grid container spacing={3}>
        
        <Helmet>
          <title>Заказы на кухне</title>
        </Helmet>
        
        <Backdrop open={this.state.spiner} style={{ zIndex: 99, color: '#fff' }}>
          <CircularProgress color="inherit" />
        </Backdrop>
        
        <Grid item xs={3}>
          <MySelect classes={this.state.classes} data={this.state.points} value={this.state.selectedPoint} func={ this.changePoint.bind(this) } label='Точка' />
        </Grid>

        <Grid item xs={3}>
          <Button variant="contained" onClick={this.getCookOrders.bind(this)}>Обновить</Button>
        </Grid>

        <Grid item xs={12}>
          
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Тип</TableCell>
                  <TableCell>Статус</TableCell>
                  
                  <TableCell>Время заказа / предзаказа</TableCell>
                  <TableCell>Время выхода на стол</TableCell>
                  <TableCell>Во сколько собрали</TableCell>
                  
                  <TableCell>Закрыли</TableCell>
                  <TableCell>Приготовили</TableCell>
                  <TableCell>Отдали</TableCell>
                  <TableCell>Обещали</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                
                
              
                { this.state.data.ready ?
                   this.state.data.ready.map( (item, key) =>
                    <TableRow key={key} style={{ backgroundColor: 'green', color: '#fff', fontWeight: '700' }}>
                      <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{item.id}</TableCell>
                      <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{item.type_order}</TableCell>
                      <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{item.status}</TableCell>
                      
                      <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{ parseInt(item['preorder']) == 1 ? item.date_time_preorder_ : item.date_time_order }</TableCell>
                      <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{item.unix_start_stol_or}</TableCell>
                      <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{ item.give_data_time_ }</TableCell>
                      
                      <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{ item.close_date_time_order }</TableCell>
                      <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{item.time_}</TableCell>
                      <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{item.test_time}</TableCell>
                      <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{ parseInt(item['preorder']) == 0 ? item['unix_time_to_client'] : '' }</TableCell>
                    </TableRow>
                  )
                    :
                  null
                }
                
                { this.state.data.onstol ?
                 this.state.data.onstol.map( (item, key) =>
                  <TableRow key={key} style={{ backgroundColor: 'yellow', color: '#000', fontWeight: '700' }}>
                    <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{item.id}</TableCell>
                    <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{item.type_order}</TableCell>
                    <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{item.status}</TableCell>
                    
                    <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{ parseInt(item['preorder']) == 1 ? item.date_time_preorder_ : item.date_time_order }</TableCell>
                    <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{item.unix_start_stol_or}</TableCell>
                    <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{ item.give_data_time_ }</TableCell>
                    
                    <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{ item.close_date_time_order }</TableCell>
                    <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{item.time_}</TableCell>
                    <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{item.test_time}</TableCell>
                    <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{ parseInt(item['preorder']) == 0 ? item['unix_time_to_client'] : '' }</TableCell>
                  </TableRow>
                )
                  :
                null
                }
                
                { this.state.data.prestol_new ?
                 this.state.data.prestol_new.map( (item, key) =>
                  <TableRow key={key} style={{ backgroundColor: '#fff', color: '#000', fontWeight: '500' }}>
                    <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{item.id}</TableCell>
                    <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{item.type_order}</TableCell>
                    <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{item.status}</TableCell>
                    
                    <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{ parseInt(item['preorder']) == 1 ? item.date_time_preorder : item.date_time_order }</TableCell>
                    <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{item.time_start_order}</TableCell>
                    <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{ item.give_data_time_ }</TableCell>
                    
                    <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{ item.close_date_time_order }</TableCell>
                    <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{item.time_}</TableCell>
                    <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{item.test_time}</TableCell>
                    <TableCell style={{ color: 'inherit', fontWeight: 'inherit' }}>{ parseInt(item['preorder']) == 0 ? item['unix_time_to_client'] : '' }</TableCell>
                  </TableRow>
                )
                  :
                null
                }
                
                
              </TableBody>
            </Table>
          </TableContainer>
        
        </Grid>
      </Grid>
    )
  }
}