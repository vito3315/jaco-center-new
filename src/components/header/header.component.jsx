import * as React from "react"
import clsx from 'clsx';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { NavLink as Link, Switch, Route, Redirect } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import itemsStore from '../../stores/items-store';
import { autorun } from "mobx"

import CloseIcon from '@material-ui/icons/Close';
import InputMask from "react-input-mask";

const queryString = require('query-string');

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

export class Header extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      classes: this.props.classes,
      cityList: this.props.cityList,
      city: itemsStore.getCity(),
      page: this.props.page,
      
      number: '',
      
      orderPromoText: '',
      promo_name: '',
      promoST: false,
      
      top: false,
      left: false,
      bottom: false,
      right: false,
    };
  }
    
  componentDidMount = () => {
    this._isMounted = true;
    
    let defValue = '';
  
    if( localStorage.getItem('clientNumber') ){
      defValue = localStorage.getItem('clientNumber');
      itemsStore.clientNumber = defValue;
      
      this.setState({
        number: defValue
      })
    }
    
    if( localStorage.getItem('promo_name') ){
      let promo = localStorage.getItem('promo_name');
      
      setTimeout( ()=>{
        this.setState({
          promo_name: promo
        })
        
        this.checkPromo( {target: {value: promo}} )
      }, 500 )
      
    }
    
    autorun(() => {
      if( itemsStore.clear === true ){
        
        console.log( 'header clear' )
        
        this.clear();
        
        itemsStore.clear = false;
      }
    })
  }
    
  saveNumber(event){
    
    let number = event.target.value;
    let str = '';
    
    number = number+'';
    
    if( number.length > 0 ){
      
      number = number.split(' ').join('');
      number = number.split('(').join('');
      number = number.split(')').join('');
      number = number.split('-').join('');
      number = number.split('+').join('');
      
      if( number[0] == '7' || number[0] == 7 ){
        str = number.split("");
        str[0] = 8;
        number = str.join("");
      }
      
      if( number.length != 11 ){
        alert('Номер введен в не верном формате!')
        return;
      }
      
    }
    
    this.setState({
      number: number
    })
    
    itemsStore.clientNumber = number;
    localStorage.setItem('clientNumber', number)
    
    /*let number = event.target.value;
          
    if( number.length > 0 ){
      number = number.split(' ').join('');
      number = number.split('(').join('');
      number = number.split(')').join('');
      number = number.split('-').join('');
      
      number = number.slice(1);
      
      itemsStore.clientNumber = '8' + number;
      localStorage.setItem('clientNumber', '8' + number)
    }else{
      itemsStore.clientNumber = '';
      localStorage.setItem('clientNumber', '')
    }*/
  }
    
  checkPromo(event){
    
    let promo = event.target.value;
    
    fetch('https://jacofood.ru/src/php/test_app.php', {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'},
      body: queryString.stringify({
        type: 'get_promo', 
        city_id: itemsStore.getCity(),
        promo_name: promo
      })
    }).then(res => res.json()).then(json => {
      itemsStore.setPromo( JSON.stringify(json), promo );
      let check_promo = itemsStore.checkPromo();
        
      if( check_promo.st === false ){
        localStorage.removeItem('promo_name')
      }
      
      if( promo.length == 0 ){
        this.setState({
          orderPromoText: '',
          promoST: false
        })
      }else{
        this.setState({
          orderPromoText: check_promo.text,
          promoST: check_promo.st
        })
      }
    })
  }
    
  toggleDrawer2(anchor, open, event){
    this.setState({
      [anchor]: open
    })
  };
    
  clear(){
    itemsStore.clientNumber = '';
    localStorage.removeItem('clientNumber')
    
    itemsStore.setItems([]);
    
    let data = {
      orderType: '0',
      orderAddr: '',
      orderPic: 0,
      orderComment: '',
      
      orderTimes: 0,
      orderPredDay: '',
      orderPredTime: '',
      
      orderPay: '',
      orderSdacha: '',
    };
    
    itemsStore.saveCartData(data);
    
    this.checkPromo({ target: {value: ''} })
    
    this.setState({
      number: '',
      promo_name: '',
      orderPromoText: '',
    })
  }
    
  changeCity(event){
    let city = event.target.value;
    
    this.setState({ city: city });
    itemsStore.setCity(city)
    
    localStorage.setItem('cityID', city)
    
    let data = {
      orderType: '0',
      orderAddr: '',
      orderPic: 0,
      orderComment: '',
      
      orderTimes: 0,
      orderPredDay: '',
      orderPredTime: '',
      
      orderPay: '',
      orderSdacha: '',
    };
    
    itemsStore.saveCartData(data);
    
    setTimeout( () => {
      location.reload();
    }, 500 )
  }
    
  logOut(){
    localStorage.removeItem('token');
    
    setTimeout( () => {
      window.location.reload();
    }, 500 )
  }
  
  render() {
    return (
      <div className={this.state.classes.root}>
        <AppBar position="static" style={{ backgroundColor: '#fff', color: '#000' }}>
          <Toolbar style={{ minHeight: 48, height: 48 }}>
            <IconButton edge="start" onClick={this.toggleDrawer2.bind(this, 'left', true)} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            { this.state.page == 'createOrder' ?
              <Grid container className='headerInput'>
                
                <Grid item xs={3}>
                  <FormControl className={this.state.classes.formControl}>
                    <InputLabel style={{ paddingBottom: 2 }}>Город</InputLabel>
                    <Select
                      style={{ marginTop: 9 }}
                      value={this.state.city}
                      onChange={ this.changeCity.bind(this) }
                    >
                      { this.state.cityList.map( (item, key) =>
                        <MenuItem key={key} value={item.id}>{item.name}</MenuItem>
                      ) }
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6} style={{ paddingTop: 5, display: 'flex', alignItems: 'center' }}>
                  <TextField label="Промокод" value={ this.state.promo_name } onChange={ event => this.setState({ promo_name: event.target.value }) } onBlur={this.checkPromo.bind(this)} style={{ marginRight: 4, marginLeft: 4, marginBottom: 6}} />
                  
                  <HtmlTooltip
                    placement="bottom"
                    title={
                      <React.Fragment>
                        <Typography color="inherit" className={this.state.classes.size1}>{this.state.orderPromoText}</Typography>
                      </React.Fragment>
                    }
                  >
                    <Button variant="contained" color="primary" style={{ padding: '2px 6px', minWidth: 30, marginRight: 8, backgroundColor: this.state.promoST === false && this.state.orderPromoText.length == 0 ? 'gray' : this.state.promoST === false && this.state.orderPromoText.length > 0 ? 'red' : 'green' }}>?</Button>
                  </HtmlTooltip>
                  
                  <Button variant="contained" color="primary" className="btnClear" style={{ padding: '2px 6px', minWidth: 30 }} onClick={ this.clear.bind(this) } >
                    <CloseIcon />
                  </Button>
                </Grid>
                <Grid item xs={3} style={{ paddingTop: 14 }}>
                  <TextField 
                    //label="Промокод" 
                    placeholder="8 (999) 999-99-99"
                    value={this.state.number}
                    onChange={ event => this.setState({ number: event.target.value }) } 
                    onBlur={this.saveNumber.bind(this)} 
                    style={{ marginRight: 4, marginLeft: 4, marginBottom: 6}} 
                  />
                  
                </Grid>
              
              </Grid>
                :
              null
            }
          </Toolbar>
        </AppBar>
        
        
          
        
        
        <Drawer anchor={'left'} open={this.state.left} onClose={this.toggleDrawer2.bind(this, 'left', false)}>
          <div
            className={clsx(this.state.classes.list)}
            role="presentation"
            //onClick={this.toggleDrawer2(this, 'left', false)}
            //onKeyDown={this.toggleDrawer(this, 'left', false)}
          >
            <Link
              to={ '/' }
              style={{ textDecoration: 'none' }}
            >
              <ListItem button style={{ color: '#000' }}>
                <Typography variant="body1">Оформить заказ</Typography>
              </ListItem>
            </Link>
            <Link
              to={ '/orders' }
              style={{ textDecoration: 'none' }}
            >
              <ListItem button style={{ color: '#000' }}>
                <Typography variant="body1">Список заказов</Typography>
              </ListItem>
            </Link>
            <Link
              to={ '/ordercook' }
              style={{ textDecoration: 'none' }}
            >
              <ListItem button style={{ color: '#000' }}>
                <Typography variant="body1">Заказы на кухне</Typography>
              </ListItem>
            </Link>
            <Divider />
            <List>
              <ListItem button onClick={this.logOut.bind(this)}>
                <ListItemText primary={'Выйти'} />
              </ListItem>
            </List>
          </div>
        </Drawer>      
      </div>
    )
  }
}