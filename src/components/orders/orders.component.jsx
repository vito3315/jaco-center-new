import * as React from "react"
import clsx from 'clsx';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { NavLink as Link, Switch, Route, Redirect } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import itemsStore from '../../stores/items-store';
import { autorun } from "mobx"

import DraftsIcon from '@material-ui/icons/Drafts';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CloseIcon from '@material-ui/icons/Close';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import Dialog from '@material-ui/core/Dialog';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';


import FormControlLabel from '@material-ui/core/FormControlLabel';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

//import 'date-fns';
import ruLocale from "date-fns/locale/ru";
import DateFnsUtils from '@date-io/date-fns';
//import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import InputMask from "react-input-mask";

const queryString = require('query-string');


const useStyles = makeStyles((theme) => ({
  root2: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    '& > svg, form': {
      borderRight: '0px!important'
    }
  },
  root3: {
    '& > *': {
      margin: theme.spacing(1),
      width: 50,
    },
    '& .MuiOutlinedInput-input': {
      padding: '5px 10px'
    }
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    flexGrow: 1,
    //margin: -8
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paperCat: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    position: 'relative',
    justifyContent: 'space-between',
    height: 'calc(100% - 15px)',
    cursor: 'pointer'
  },
  paperCatInfo: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  
  size1: {
    fontSize: '0.8rem'
  },
  scrollTable: {
    maxHeight: 250,
    overflow: 'auto',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

class Header extends React.Component {
  _isMounted = false;
  
  constructor(props) {
    super(props);
    
    this.state = {
      classes: this.props.classes,
      
      top: false,
      left: false,
      bottom: false,
      right: false,
    };
  }
  
  componentDidMount = () => {
    this._isMounted = true;
  }
  
  toggleDrawer2(anchor, open, event){
    this.setState({
      [anchor]: open
    })
  };
  
  render() {
    return (
      <div className={this.state.classes.root}>
        <AppBar position="static" style={{ backgroundColor: '#fff', color: '#000' }}>
          <Toolbar style={{ minHeight: 48, height: 48 }}>
            <IconButton edge="start" onClick={this.toggleDrawer2.bind(this, 'left', true)} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        
        
          
        
        
        <Drawer anchor={'left'} open={this.state.left} onClose={this.toggleDrawer2.bind(this, 'left', false)}>
          <div
            className={clsx(this.state.classes.list)}
            role="presentation"
            //onClick={this.toggleDrawer2(this, 'left', false)}
            //onKeyDown={this.toggleDrawer(this, 'left', false)}
          >
            <List>
              <ListItem button>
                <Link
                  to={ '/' }
                  style={{ textDecoration: 'none' }}
                >
                  <Typography variant="body1">Оформить заказ</Typography>
                </Link>
              </ListItem>
              <ListItem button>
                <ListItemText primary={'Список заказов'} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={'111'} />
              </ListItem>
            </List>
            <Divider />
            <List>
              {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>      
      </div>
    )
  }
}

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

class OrdersStat extends React.Component {
  constructor(props) {
    super(props);
        
    this.state = {
      classes: this.props.classes,
      cityList: [],
      spiner: false,
      
      selectedCity: 1,
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
    
  componentDidMount = () => {
    fetch('https://jacofood.ru/src/php/test_app.php', {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'},
      body: queryString.stringify({
        type: 'get_cat', 
        city_id: 1
      })
    }).then(res => res.json()).then(json => {
      this.setState({
        cityList: json.city_list,
      })
      
      itemsStore.setAllItems(json.all_items);
      
      this.getPoints();
    })
    .catch(err => { });
  }
    
  handleDateChange(date){
    
    console.log( date )
    
    this.setState({
      selectedDate: date
    })
  };
  
  changeCity(event){
    let city = event.target.value;
    
    this.setState({ selectedCity: city });
    this.getPoints();
  }
  
  getPoints(){
    fetch('https://jacofood.ru/src/php/test_app.php', {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'},
      body: queryString.stringify({
        type: 'get_points', 
        city_id: this.state.selectedCity
      })
    }).then(res => res.json()).then(json => {
      this.setState({
        points: json,
      })
    })
    .catch(err => { });
  }
  
  changeCat = (event, newValue) => {
    let point = this.state.points.find( (item, key) => key == newValue );
    
    this.setState({
      activeCat: newValue,
      point: point
    })
    
    this.getOrders();
  }
  
  getOrders(){
    setTimeout( () => {
      fetch('https://jacofood.ru/src/php/test_app.php', {
        method: 'POST',
        headers: {
          'Content-Type':'application/x-www-form-urlencoded'},
        body: queryString.stringify({
          type: 'get_orders', 
          city_id: this.state.selectedCity,
          point_id: this.state.point.id,
          date: this.state.selectedDate
        })
      }).then(res => res.json()).then(json => {
        console.log( json )
        
        this.setState({
          orders: json.orders,
        })
      })
      .catch(err => { });
    }, 500 )
  }
  
  getOrder(order_id){
    fetch('https://jacofood.ru/src/php/test_app.php', {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'},
      body: queryString.stringify({
        type: 'get_order', 
        point_id: this.state.point.id,
        order_id: order_id
      })
    }).then(res => res.json()).then(json => {
      console.log( json )
      
      this.setState({ 
        showOrder: json,
        openDialog: true
    });
    })
    .catch(err => { });
  }
  
  closeDialog(){
    this.setState({
      showOrder: null,
      openDialog: false
    })
  }
  
  closeOrder(order_id, point_id){
    this.setState({
      delOrder: true
    })
  }
  
  closeOrderTrue(){
    
  }
  
  changeAddr = (event) => {
    this.setState({
      typeDel: event.target.value,
    })
  }
  
  repeatOrder(){
    let my_cart = [];
    let all_items = itemsStore.getAllItems();
    let item_info = null;
    
    localStorage.setItem('cityID', this.state.selectedCity)
    
    this.state.showOrder.order_items.map( (item) => {
      item_info = all_items.find( (item_) => item_.id == item.item_id );
      
      if( item_info ){
        let price = parseInt(item_info.price),
            all_price = parseInt(item.count) * parseInt(item_info.price);
        
        my_cart.push({
          name: item.name,
          item_id: item.item_id,
          count: item.count,
          
          one_price: price,
          all_price: all_price
        })
      }
    } )
    
    let data = {
        orderType: parseInt(this.state.showOrder.order.type_order_) - 1,
        orderAddr: this.state.showOrder.street.name,
        orderPic: parseInt(this.state.showOrder.order.point_id),
        orderComment: '',
        
        orderTimes: '1',
        orderPredDay: '',
        orderPredTime: '',
        
        orderPay: parseInt(this.state.showOrder.order.type_order_) == 1 ? 'cash' : 'in',
        orderSdacha: '',
    };
    
    itemsStore.saveCartData(data);
    
    if( this.state.showOrder.order.promo_name && this.state.showOrder.order.promo_name != '' ){
      itemsStore.setPromo( this.state.showOrder.promo_info, this.state.showOrder.order.promo_name )
    }
    itemsStore.setItems(my_cart)
    
    setTimeout(()=>{
      window.location.pathname = '/';
    }, 500)
  }
  
  changeText(event){
    this.setState({ textDel: event.target.value })
  }
  
  render() {
    return (
      <Grid container spacing={0}>
        
        <Backdrop open={this.state.spiner} style={{ zIndex: 99, color: '#fff' }}>
          <CircularProgress color="inherit" />
        </Backdrop>
        
        <Grid item xs={12}>
          { this.state.cityList.length > 0 ? <Header classes={this.state.classes} /> : null }
        </Grid>
        <Grid item xs={4}>
          
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
            <Grid container justify="space-around" style={{ alignItems: 'baseline' }}>
              
              <FormControl className={this.state.classes.formControl}>
                <InputLabel>Город</InputLabel>
                <Select
                  value={this.state.selectedCity}
                  onChange={ this.changeCity.bind(this) }
                >
                  { this.state.cityList.map( (item, key) =>
                    <MenuItem key={key} value={item.id}>{item.name}</MenuItem>
                  ) }
                </Select>
              </FormControl>
              
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="yyyy-MM-dd"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={this.state.selectedDate}
                onChange={this.handleDateChange.bind(this)}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        
        </Grid>
        
        <Grid item xs={12}>
          <AppBar position="static">
            <Tabs value={this.state.activeCat} onChange={this.changeCat} aria-label="simple tabs example">
              { this.state.points.map((item, key) =>
                <Tab label={item.addr} style={{ minWidth: 'auto' }} key={key} {...a11yProps(key)} />
              ) }
            </Tabs>
          </AppBar>
          
          { this.state.points.map((cat, key) =>
            <TabPanel value={this.state.activeCat} index={key} key={key}>
              
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>Оформил</TableCell>
                      <TableCell>Телефон</TableCell>
                      <TableCell>Адрес</TableCell>
                      <TableCell>Оформлен</TableCell>
                      <TableCell>Ко времени</TableCell>
                      <TableCell>Закрыт на кухне</TableCell>
                      <TableCell>Получен клиентом</TableCell>
                      <TableCell>Тип</TableCell>
                      <TableCell>Статус</TableCell>
                      <TableCell>Сумма</TableCell>
                      <TableCell>Оплата</TableCell>
                      <TableCell>Курьер</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    
                    { this.state.orders.map( (item, key) =>
                      <TableRow key={key}  style={ item.is_delete == 1 ? { backgroundColor: 'red', color: '#fff' } : {} }>
                        <TableCell style={{ color: 'inherit' }} onClick={ this.getOrder.bind(this, item.id) }>{item.id}</TableCell>
                        <TableCell style={{ color: 'inherit' }}>{item.type_user}</TableCell>
                        <TableCell style={{ color: 'inherit' }}>{item.number}</TableCell>
                        <TableCell style={{ color: 'inherit' }}>{item.street} {item.home}</TableCell>
                        <TableCell style={{ color: 'inherit' }}>{item.date_time_order}</TableCell>
                        <TableCell style={{ color: 'inherit' }}>{ item.date_time_preorder == '00:00:00' ? '' : item.date_time_preorder }</TableCell>
                        <TableCell style={{ color: 'inherit' }}>{ item.give_data_time == '00:00:00' ? '' : item.give_data_time }</TableCell>
                        <TableCell style={{ color: 'inherit' }}>{item.close_order}</TableCell>
                        <TableCell style={{ color: 'inherit' }}>{item.type_order}</TableCell>
                        <TableCell style={{ color: 'inherit' }}>{item.status}</TableCell>
                        <TableCell style={{ color: 'inherit' }}>{item.order_price}</TableCell>
                        <TableCell style={{ color: 'inherit' }}>{item.type_pay}</TableCell>
                        <TableCell style={{ color: 'inherit' }}>{item.driver}</TableCell>
                      </TableRow>
                    ) }
                    
                    
                  </TableBody>
                </Table>
              </TableContainer>
              
            </TabPanel>
          )}
          
        </Grid>
        
        { this.state.showOrder ?
          <Dialog 
              onClose={this.closeDialog.bind(this)} 
              aria-labelledby="customized-dialog-title" 
              className="showOrderDialog" 
              open={this.state.openDialog}
              fullWidth={true}
          >
              <MuiDialogTitle disableTypography style={{ margin: 0, padding: 8 }}>
                  <Typography variant="h6">Заказ {this.state.showOrder.order.order_id}</Typography>
                
                  <IconButton aria-label="close" style={{ position: 'absolute', top: 0, right: 0, color: '#000' }} onClick={this.closeDialog.bind(this)}>
                      <CloseIcon />
                  </IconButton>
              </MuiDialogTitle>
              
              <MuiDialogContent className="showOrderDialogContent">
                  <Typography variant="h6" component="span">{this.state.showOrder.order.type_order}: {this.state.showOrder.order.type_order_addr_new}</Typography>
                  <Typography variant="h6" component="span">{this.state.showOrder.order.time_order_name}: {this.state.showOrder.order.time_order}</Typography>
                  { parseInt(this.state.showOrder.order.is_preorder) == 1 ? null :
                      <Typography variant="h6" component="span">{this.state.showOrder.order.text_time}{this.state.showOrder.order.time_to_client}</Typography>
                  }
                  { this.state.showOrder.order.promo_name == null || this.state.showOrder.order.promo_name.length == 0 ? null :
                      <Typography variant="h6" component="span">Промокод: {this.state.showOrder.order.promo_name}</Typography>
                  }
                  { this.state.showOrder.order.promo_name == null || this.state.showOrder.order.promo_name.length == 0 ? null :
                      <Typography variant="h6" component="span" className="noSpace">{this.state.showOrder.order.promo_text}</Typography>
                  }
                  <Typography variant="h5" component="span" className="CardPriceItem">Сумма закза: {this.state.showOrder.order.sum_order} р</Typography>
                  
                  <table className="tableOrderCheck">
                      <tbody>
                          {this.state.showOrder.order_items.map((item, key) => 
                              <tr key={key}>
                                  <td>
                                      <Typography variant="h5" component="span">{item.name}</Typography>
                                  </td>
                                  <td>
                                      <Typography variant="h5" component="span">{item.count}</Typography>
                                  </td>
                              </tr>
                          )}
                      </tbody>
                  </table>
                  
              </MuiDialogContent>
              
              { parseInt( this.state.showOrder.order.is_delete ) == 0 && parseInt( this.state.showOrder.order.status_order ) !== 6 ? 
                <MuiDialogActions style={{ justifyContent: 'flex-end', padding: '15px 0px' }}>
                  <ButtonGroup disableElevation={true} disableRipple={true} variant="contained" className="BtnBorderOther" style={{ marginRight: 24 }}>
                    <Button variant="contained" className="BtnCardMain CardInCardItem" onClick={ this.closeOrder.bind(this, this.state.showOrder.order.order_id, this.state.showOrder.order.point_id) }>Отменить заказ</Button>
                  </ButtonGroup>
                </MuiDialogActions>
                  :
                null
              }
              { parseInt( this.state.showOrder.order.is_delete ) == 1 || parseInt( this.state.showOrder.order.status_order ) == 6 ? 
                <MuiDialogActions style={{ justifyContent: 'flex-end', padding: '15px 0px' }}>
                  <ButtonGroup disableElevation={true} disableRipple={true} variant="contained" className="BtnBorderOther" style={{ marginRight: 24 }}>
                    <Button variant="contained" className="BtnCardMain CardInCardItem" onClick={ this.repeatOrder.bind(this, this.state.showOrder.order.order_id, this.state.showOrder.order.point_id) }>Повторить заказ</Button>
                  </ButtonGroup>
                </MuiDialogActions>
                  :
                null
              }
              
          </Dialog>
              :
          null
        }
        
        { this.state.showOrder ?
          <Dialog open={this.state.delOrder} onClose={() => { this.setState({delOrder: false}) }} aria-labelledby="form-dialog-title">
            <MuiDialogTitle disableTypography style={{ margin: 0, padding: 8 }}>
              <Typography variant="h6">Отмена заказа {this.state.showOrder.order.order_id}</Typography>
            
              <IconButton aria-label="close" style={{ position: 'absolute', top: 0, right: 0, color: '#000' }} onClick={this.closeDialog.bind(this)}>
                <CloseIcon />
              </IconButton>
            </MuiDialogTitle>
            
            <DialogContent>
              <FormControl component="fieldset">
                <RadioGroup name="typeDel" value={ this.state.typeDel } onChange={this.changeAddr} >
                  {this.state.radiogroup_options.map((item, key) => 
                    <FormControlLabel key={key} value={item.id} control={<Radio />} label={item.label} />
                  )}
                </RadioGroup>
              </FormControl>
            
              <TextField
                //autoFocus
                onFocus={ () => { this.setState({ typeDel: '4' }) } }
                value={ this.state.textDel }
                onChange={ this.changeText.bind(this) }
                margin="dense"
                id="name"
                label="Причина отмены"
                type="text"
                fullWidth
              />
            </DialogContent>
            <DialogActions style={{ paddingBottom: 24 }}>
              
              <ButtonGroup disableElevation={true} disableRipple={true} variant="contained" className="BtnBorderOther" style={{ marginRight: 24 }}>
                <Button variant="contained" className="BtnCardMain CardInCardItem" onClick={() => { this.setState({delOrder: false}) }}>К заказу</Button>
              </ButtonGroup>
              
              <ButtonGroup disableElevation={true} disableRipple={true} variant="contained" className="BtnBorderOther" style={{ marginRight: 24 }}>
                <Button variant="contained" className="BtnCardMain CardInCardItem" onClick={this.closeOrderTrue.bind(this)}>Отменить заказ</Button>
              </ButtonGroup>
              
            </DialogActions>
          </Dialog>
            :
          null
        }
        
      </Grid>
    )
  }
}

export function Orders() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <OrdersStat classes={classes} />
    </div>
  );
}