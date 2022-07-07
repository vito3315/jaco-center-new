import React from 'react';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const queryString = require('query-string');

import itemsStore from '../../stores/items-store';
import config from '../../stores/config';

import { MyTextInput } from '../../stores/elements';

export class Auth extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {    
      number: '',
      pass: ''
    };
  }
    
  componentDidMount = () => {
    document.title = "Авторизация";
    itemsStore.setPage('auth');
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
        this.state.history.push("/");
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

  async login(){
    let data = {
      number: this.state.number,
      pass: this.state.pass
    }

    let res = await this.getData('login_center', data);

    if( res['st'] ){
      itemsStore.setToken(res.token, res.name);
     
      setTimeout( () => {
        window.location.href = '/';
      }, 500 )
      
    }else{
      alert(res.text)
    }

    /*fetch(config.urlApi, {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'},
      body: queryString.stringify({
        type: 'login_center', 
        number: this.state.number,
        pass: this.state.pass
      })
    }).then(res => res.json()).then(json => {
      if( json['st'] ){
        itemsStore.setToken(json.token, json.name);
       
        setTimeout( () => {
          window.location.href = '/';
        }, 500 )
        
      }else{
        alert(json.text)
      }
    });*/
  }
  
  handleKeyPress(target) {
    if(target.charCode==13){
      if( this.state.number.length > 0 && this.state.pass.length > 0 ){
        this.login();
      }
    }
  }
  
  render() {
    return (
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Grid container direction="column" spacing={2}>
          
            <Grid item xs={12} sm={4}>
              <img alt="Жако доставка роллов и пиццы" src="../assets/logo.png" style={{ height: 'max-content', width: '100%' }} />
            </Grid>
                
            <Grid item xs={12} sm={4}>
              <MyTextInput label={'Номер телефона'} value={this.state.number} func={ (event) => { this.setState({ number: event.target.value }) } } />
            </Grid>
            <Grid item xs={12} sm={4}>
              <MyTextInput label={'Пароль'} type={'password'} value={this.state.pass} func={ (event) => { this.setState({ pass: event.target.value }) } } />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Button variant="contained" style={{ width: '100%' }} onClick={this.login.bind(this)}>Войти</Button>
            </Grid>

          </Grid>
        </Grid>
        

      </Grid>
    )
  }
}