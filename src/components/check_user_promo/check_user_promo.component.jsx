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

import { MyTextInput } from '../../stores/elements';

import itemsStore from '../../stores/items-store';
import config from '../../stores/config';

const queryString = require('query-string');

export class CheckUserPromo extends React.Component {
  interval = null;
  
  constructor(props) {
    super(props);
        
    this.state = {
      cityList: [],
      spiner: false,
      
      number: '',
      promos: [],
      promos_sms: []
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

  componentDidMount = () => {
    itemsStore.setPage('checkuserpromo');
    this.interval = setInterval(() => this.checkLogin(), 1000*60*60);
    this.checkLogin();
    
    document.title = "Проверка промокода клиента";

    if((window.location.protocol == 'http:' || window.location.protocol == 'http') && window.location.hostname != 'localhost'){
      window.location.href = 'https://jacocallcenter.ru'+window.location.pathname;
    }
  }
    
  changeNumber(event){
    this.setState({ number: event.target.value })
  }

  async getPromoList(){
    let data = {
      number: this.state.number
    }

    let res = await this.getData('check_user_promo_new', data);

    this.setState({
      promos: res.promo_lk,
      promos_sms: res.promo_sms
    })
  }
  
  render() {
    return (
      <Grid container spacing={3}>
        
        <Helmet>
          <title>Проверка промокода клиента</title>
        </Helmet>
        
        <Backdrop open={this.state.spiner} style={{ zIndex: 99, color: '#fff' }}>
          <CircularProgress color="inherit" />
        </Backdrop>
        
        <Grid item xs={3}>
          <MyTextInput value={this.state.number} func={ this.changeNumber.bind(this) } label='Номер телефона' />
        </Grid>

        <Grid item xs={3}>
          <Button variant="contained" onClick={this.getPromoList.bind(this)}>Обновить</Button>
        </Grid>
        
        
        <Grid item xs={12}>
          
          <span>Промокоды из ЛК</span>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Телефон</TableCell>
                  <TableCell>Имя</TableCell>
                  <TableCell>День рождения</TableCell>
                  <TableCell>Промокод</TableCell>
                  <TableCell>Описание</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                
                { this.state.promos.map( (item, key) =>
                  <TableRow key={key}>
                    <TableCell style={{ color: 'inherit' }}>{item.login}</TableCell>
                    <TableCell style={{ color: 'inherit' }}>{item.user_name}</TableCell>
                    <TableCell style={{ color: 'inherit' }}>{item.date_bir}</TableCell>
                    <TableCell style={{ color: 'inherit' }}>{item.promo_name}</TableCell>
                    <TableCell style={{ color: 'inherit' }}>{item.coment}</TableCell>
                  </TableRow>
                )}
              
              </TableBody>
            </Table>
          </TableContainer>

        </Grid>
        <Grid item xs={12}>
          
          <span>Отправленные в смс промокоды</span>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Телефон</TableCell>
                  <TableCell>Сообщение</TableCell>
                  <TableCell>Дата время</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                
                { this.state.promos_sms.map( (item, key) =>
                  <TableRow key={key}>
                    <TableCell style={{ color: 'inherit' }}>{item.phone}</TableCell>
                    <TableCell style={{ color: 'inherit' }}>{item.text}</TableCell>
                    <TableCell style={{ color: 'inherit' }}>{item.date_time}</TableCell>
                  </TableRow>
                )}
              
              </TableBody>
            </Table>
          </TableContainer>

        </Grid>

      </Grid>
    )
  }
}