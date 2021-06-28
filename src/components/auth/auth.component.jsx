import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Hidden from '@material-ui/core/Hidden';
import Popover from '@material-ui/core/Popover';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

const queryString = require('query-string');

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputMask from "react-input-mask";
import Badge from '@material-ui/core/Badge';
import itemsStore from '../../stores/items-store';

import { autorun } from "mobx"

export class Auth extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {    
      number: '',
      pass: ''
    };
  }
    
  componentDidMount = () => {
  }
    
  login(){
    fetch('https://jacofood.ru/src/php/test_app.php', {
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
    });
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
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ height: '100vh' }}
      >
        <Grid container item xs={3}>
          <img alt="Жако доставка роллов и пиццы" src="../assets/logo.png" style={{ height: 'auto', width: 'inherit' }} />
        </Grid>
            
        <Grid container item xs={3} direction="column">
          
          <FormControl>
            <InputLabel htmlFor="my-input">Номер телефона</InputLabel>
            <Input 
              id="my-input" 
              type="login" 
              aria-describedby="my-helper-text" 
              value={ this.state.number } 
              onChange={ (event) => { this.setState({ number: event.target.value }) } } 
              onKeyPress={this.handleKeyPress}
            />
          </FormControl>
          
          <FormControl>
            <InputLabel htmlFor="my-input2">Пароль</InputLabel>
            <Input 
              id="my-input2" 
              type='password' 
              aria-describedby="my-helper-text" 
              value={ this.state.pass } 
              onChange={ (event) => { this.setState({ pass: event.target.value }) } } 
              onKeyPress={this.handleKeyPress}
            />
          </FormControl>
          
          <FormControl style={{ paddingTop: 8 }}>
            <Button variant="contained" style={{ backgroundColor: '#CC0033', color: '#fff' }} onClick={this.login.bind(this)}>Войти</Button>
          </FormControl>
          
        </Grid>
            
      </Grid>
    )
  }
}