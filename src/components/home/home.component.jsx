import * as React from "react"
import clsx from 'clsx';

import { makeStyles, styled } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

import moment from "moment";
import { NavLink as Link } from 'react-router-dom';

import {Helmet} from "react-helmet";

import itemsStore from '../../stores/items-store';
import config from '../../stores/config';
import { autorun } from "mobx"
import { MySelect, MyDatePickerNew, MyTextInput, MyAutocomplite } from '../../stores/elements';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import Grid from '@mui/material/Grid';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Snackbar from '@mui/material/Snackbar';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

import TextField from '@mui/material/TextField';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableFooter from '@mui/material/TableFooter';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';

import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import InfoIcon from '@mui/icons-material/Info';
import AddIcon from '@mui/icons-material/Add';

import Alert from '@mui/material/Alert';
//import et from "date-fns/esm/locale/et/index.js";

const queryString = require('query-string');

const theme = createTheme({
  palette: {
    primary: {
      main: '#c03',
    },
    secondary: {
      main: '#6ab04c',
    }
  },
});

const useStyles = makeStyles({
  formControl: {
    //margin: theme.spacing(1),
    width: '100%',
  },
  tableCel: {
    textAlign: 'center',
    borderRight: '1px solid #e5e5e5',
    padding: 15,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: "#e5e5e5",
    },
  },
  tableCelHead: {
    textAlign: 'center',
    padding: 15
  },
  customCel: {
    backgroundColor: "#bababa",
    textAlign: 'center',
    borderRight: '1px solid #e5e5e5',
    padding: 15,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: "#e5e5e5",
    },
  },
  timePicker: {
    width: '100%'
  },
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
    padding: 0,
    textAlign: 'center',
    color: '#000',
    position: 'relative',
    justifyContent: 'space-between',
    height: 'calc(100% - 15px)',
    cursor: 'pointer',
    '& svg': {
      color: theme.palette.text.secondary
    }
  },
  paperCatInfo: {
    position: 'absolute',
    top: 0,
    right: 0 
  },
  
  size1: {
    //fontSize: '0.8rem'
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
});

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
        <Box sx={{ p: 3 }}>{children}</Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

class BlockTableItem extends React.Component {
  _isMounted = false;
  
  constructor(props) {
    super(props);
    
    this.state = {
      classes: this.props.classes,
      item: this.props.item,
      type: this.props.type,
    };
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    
    if( !nextState.item ){
      return false;
    }
    
    return (
      parseInt(this.state.item.all_price) !== parseInt(nextState.item.all_price) ||
      parseInt(this.state.item.count) !== parseInt(nextState.item.count)
    );
  }
  
  componentWillUnmount(){
    this._isMounted = false;
  }
  
  componentDidMount(){
    this._isMounted = true;
    
    autorun(() => {
      if( this._isMounted === true && this.state.item.item_id ){

        let my_cart = itemsStore.getItems();
        
        let this_item = my_cart.find( (item) => item.item_id == this.state.item.item_id );
        
        console.log( this_item )

        this.setState({
          item: this_item
        })
      }
    })
  }
  
  delItem(item_id){
    itemsStore.delItem(item_id)
  }
  
  changeCount(el){
    let count = el.target.value,
        item_id = this.state.item.item_id;
    
    if( count.length > 0 ){
      itemsStore.AddCountItem(item_id, count)
    }
  }
  
  add(){
    itemsStore.AddItem(this.state.item.item_id);
  }

  minus(){
    itemsStore.MinusItem(this.state.item.item_id);
  }
  
  render(){
    return (
      <TableRow hover style={ this.state.item.count == 0 ? {display: 'none'} : {} }>
        <TableCell>{this.state.item.name}</TableCell>
        <TableCell style={{ textAlign: 'center' }}>
          
          { this.state.type == 'promo' ?
            <Typography component="span" style={{ padding: '11px 0', display: 'block' }}>{this.state.item.count}</Typography>
              :
            <div className={this.state.classes.root2}>
              <RemoveIcon onClick={ this.minus.bind(this) } style={{ cursor: 'pointer' }} />
              <form className={this.state.classes.root3} noValidate autoComplete="off">
                <TextField variant="outlined" onChange={ this.changeCount.bind(this) } value={ this.state.item.count } />
              </form>
              <AddIcon onClick={ this.add.bind(this) } style={{ cursor: 'pointer' }} />
            </div>
          }
          
        </TableCell>
        <TableCell>
          {this.state.item.all_price}
        </TableCell>
        <TableCell>
          { this.state.item.new_one_price ? parseInt(this.state.item.one_price)*parseInt(this.state.item.count) - parseInt(this.state.item.new_one_price)*parseInt(this.state.item.count) : '' }
        </TableCell>
        <TableCell>
          { this.state.type !== 'promo' ?
            <CloseIcon style={{ cursor: 'pointer', marginTop: 5 }} onClick={ this.delItem.bind(this, this.state.item.item_id) } />
              :
            null
          }
        </TableCell>
      </TableRow>
    )
  }
}

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

class BlockTable extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    
    this.state = {
      classes: this.props.classes,
      
      main_items: [],
      dop_items: [],
      promo_items: [],
    };
  }

  componentWillUnmount(){
    this._isMounted = false;
  }

  componentDidMount(){
    this._isMounted = true;

    autorun(() => {
      if( this._isMounted ){

        let my_cart = itemsStore.getItems();
        let all_items = itemsStore.getAllItems();
        let promoItems = itemsStore.getItemsPromo();
        let cartPromoItems = [];
        
        promoItems.map((item) => {
          let thisitem = all_items.find( (item_) => item_.id == item.item_id );
          
          if(thisitem){
            cartPromoItems.push({
              id: item.item_id,
              cat_id: thisitem.cat_id,
              name: thisitem.name,
              desc: thisitem.tmp_desc,
              count: item.count,
              all_price: item.all_price,
              img: thisitem.img_new,
              imgUpdate: thisitem.img_new_update,
            })
          }
        })
        
        let main_items = [],
            dop_items = [];
        
        if( all_items.length > 0 ){
          my_cart.map( (it) => {
            let cart_info = all_items.find( (item) => item.id == it.item_id );
            
            if( !cart_info ){
              alert('В корзине произошла ошибка');
            }
            
            if( cart_info && parseInt(cart_info.cat_id) == 7 ){
              dop_items.push( it );
            }else{
              main_items.push( it );
            }
          } )
          
          this.setState({
            dop_items: dop_items,
            main_items: main_items,
            promo_items: cartPromoItems
          })
        }
      }
    })
  }

  render(){
    return (
      <Paper style={{ width: '100%' }}>
        <TableContainer style={{ maxHeight: 350 }}>
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow>
                <TableCell>Наимнование</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Кол-во</TableCell>
                <TableCell>Сумма</TableCell>
                <TableCell>Скидка</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { this.state.main_items.map( (item, key) =>
                <BlockTableItem key={key} item={item} classes={this.state.classes} type="main" />
              )}
              
              { this.state.dop_items.map( (item, key) =>
                <BlockTableItem key={key} item={item} classes={this.state.classes} type="dop" />
              )}
              
              { this.state.promo_items.map( (item, key) =>
                <BlockTableItem key={key} item={item} classes={this.state.classes} type="promo" />
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    )
  }
}

class CreateOrder2 extends React.Component {
  interval = null;
  clickOrderStart = false;

  startOrderInterval = 300;
  startOrderIntervalTimer = null;

  constructor(props) {
    super(props);
    
    this.state = {
      classes: this.props.classes,
      is_load: false,

      cityId: 1,
      sumDiv: 0,
      AllPrice: 0,

      cats: [],
      cityList: [],
      allItems: [],

      pic_point: [],
      all_addr: [],
      date_pred: [],
      timePred: [],
      clientAddr: [],

      newAddrStreet: null,
      newAddrHome: '',
      newAddrInfo: null,

      newAddrDom: true,
      pd: '',
      et: '',
      kv: '',

      comment: '',
      sdacha: '',

      point_id: 0,

      orderPic: 0,
      picPointInfo: null,

      thisItem: null,
      activeCat: 0,

      main_items: [],
      dop_items: [],
      promo_items: [],

      activeTab: 0,

      list_addr_choose: false,
      list_addr_for_choose: [],

      promoName: '',
      promoList: [],

      openErr: false,
      vertical: 'top',
      horizontal: 'right',
      msgText: '',

      number: '',
      chooseAddr: null,

      orderPromoText: '',
      promoST: false,
      promo_name: '',

      thisItem: null,
      checkClear: false,

      textAvgTime: 'Среднее время: ~',
      
      date: '',//дата предзаказа
      time: '',//дата предзаказа
      typeTime: 0,//0 - быстрее / 1 - пред

      errorOpen: false,
      error: {
        title: '',
        text: ''
      },
    };
  }
  
  componentWillUnmount(){
    this._isMounted = false;
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
  
  componentDidMount = () => {
    this._isMounted = true;
    
    document.title = "Оформление нового заказа";

    this.interval = setInterval(() => this.checkLogin(), 1000*60*60);
    this.checkLogin(); 
  
    this.start();

    autorun(() => {
      if( this._isMounted ){
        let allPrice = itemsStore.getAllPrice();
        let sumDiv = itemsStore.getSumDiv();

        this.setState({
          sumDiv: sumDiv,
          AllPrice: allPrice
        })
        
      }
    })
  }

  async start(){
    let data = {
      city_id: this.state.cityId
    }

    let res = await this.getData('get_cat_center_new', data);

    this.setState({
      cats: res.arr,
      cityList: res.city_list,
      allItems: res.all_items
    })
    itemsStore.setAllItemsCat(res.arr);
    itemsStore.setAllItems(res.all_items);
    itemsStore.setFreeItems(res.free_items);

    data = {
      city_id: this.state.cityId,//itemsStore.getCity(),
      user_id: itemsStore.getToken()
    }

    res = await this.getData('get_by_mi_new', data);

    
    this.setState({
      pic_point: res.get_addr_pic.points,
      all_addr: res.get_addr,
      date_pred: res.date_pred
    })

    setTimeout( () => {
      this.loadSavedData();
    }, 300 )
    
  }

  loadSavedData(){
    let cartData = itemsStore.getCartData();

    if( cartData && cartData.orderType && parseInt(cartData.orderType) == 1 ){
      let my_point = this.state.pic_point.find( (item) => item.id == parseInt(cartData.orderPic) );
      
      if( my_point ){
        this.choosePic(my_point, false);
      }
    }

    if( cartData && parseInt(cartData.orderType) == 0 ){

      this.setState({
        newAddrInfo: cartData.orderAddr ? cartData.orderAddr : null,
        point_id: cartData.orderAddr ? cartData.orderAddr.point_id : 0,

        newAddrStreet: cartData.orderAddr && cartData.orderAddr.street,

        newAddrHome: cartData.orderAddr && cartData.orderAddr.home ? cartData.orderAddr.home : '',
        pd: cartData.orderAddr && cartData.orderAddr.pd ? cartData.orderAddr.pd : '',
        et: cartData.orderAddr && cartData.orderAddr.et ? cartData.orderAddr.et : '',
        kv: cartData.orderAddr && cartData.orderAddr.kv ? cartData.orderAddr.kv : '',
        newAddrDom: cartData.orderAddr && parseInt(cartData.orderAddr.dom_true) == 1 ? false : true,

        activeTab: 0
      })
      
      let allPrice = itemsStore.getAllPrice();
        
      if( parseInt(cartData.orderAddr ? cartData.orderAddr.free_drive : 0) == 1 || parseInt(itemsStore.free_drive) == 1 ){
        if( parseInt(allPrice) > 0 ){
            itemsStore.setSumDiv(0);
        }else{
          itemsStore.setSumDiv(1);
        }
      }else{
        itemsStore.setSumDiv(parseInt(cartData.orderAddr ? cartData.orderAddr.sum_div : 0));
      }
    }
    
    if( cartData && cartData.orderComment != this.state.comment ){
      this.setState({
        comment: cartData.orderComment
      })
    }
    
    if( cartData && cartData.orderSdacha && parseInt(cartData.orderSdacha) != parseInt(this.state.sdacha) ){
      this.setState({
        sdacha: cartData.orderSdacha 
      })
    }

    if( localStorage.getItem('clientNumber') ){
      let defValue = localStorage.getItem('clientNumber');
      itemsStore.clientNumber = defValue;
      
      this.setState({
        number: defValue,
      })

      setTimeout( () => {
        this.getAddr();
      }, 300 )
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

    if( parseInt(this.state.typeTime) != parseInt(cartData.orderTimes) ){
      this.setState({
        typeTime: cartData.orderTimes
      })
      
      this.setState({
        time: cartData.orderPredTime,
        date: cartData.orderPredDay,
        typeTime: cartData.orderTimes,
      })
      
      if( cartData.orderType == 0 ){
        if( parseInt(cartData.orderTimes) == 1 ){
          this.loadTimePred();
        }else{
          this.loadTimeWait();
        }
      }
      
      if( parseInt(cartData.orderTimes) == 1 ){
        this.loadTimePred();
      }else{
        this.loadTimeWait();
      }
    }
  }

  getData = (method, data = {}, is_load = true) => {
    
    if( is_load === true ){
      this.setState({
        is_load: true
      })
    }
    
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

  addToCart(item_id){
    itemsStore.AddItem(item_id);
  }

  addItemCustom(event, value){
    let additem = this.state.allItems.find( (item) => item.name == value );

    this.addToCart(additem.id);
    
    this.setState({
      thisItem: value
    })
    
    setTimeout( () => {
      this.setState({
        thisItem: null
      })
    }, 100 )
    
  }

  changeCat = (event, newValue) => {
    this.setState({
      activeCat: newValue
    })
  }

  changeTab = (event, newValue) => {
    if( parseInt(newValue) == 1 ){
      itemsStore.setSumDiv(0);
    }
    
    if( parseInt(newValue) == 0 || parseInt(newValue) == 2 ){
      let addr = this.state.newAddrInfo;

      console.log(addr)

      if( addr ){
        let allPrice = itemsStore.getAllPrice();

        if( parseInt(addr.free_drive) == 1 || parseInt(itemsStore.free_drive) == 1 ){
          if( parseInt(allPrice) > 0 ){
            itemsStore.setSumDiv(0);
          }else{
            itemsStore.setSumDiv(1);
          }
        }else{
          itemsStore.setSumDiv(parseInt(addr.sum_div));
        }
      }
    }

    this.setState({
      activeTab: newValue
    });
    
    this.saveData();

    setTimeout( () => {

      if( parseInt(this.state.typeTime) == 0 ){
        this.loadTimeWait();
      }else{
        this.loadTimePred();
      }
      
      if( this.state.promo_name.length > 0 ){
        this.checkPromo( {target: {value: this.state.promo_name}} )
      }
    }, 300 )
  }

  choosePic(point, is_save = true){
    this.setState({
      orderPic: point.id,
      picPointInfo: point,
      
      activeTab: 1,

      point_id: point.id,
      sumDiv: 0
    })
    
    if( is_save === true ){
      this.saveData();
    }

    setTimeout( () => {
      if( this.state.promo_name.length > 0 ){
        this.checkPromo( {target: {value: this.state.promo_name}} )
      }
      
      if( parseInt(this.state.typeTime) == 0 ){
        this.loadTimeWait();
      }else{
        this.loadTimePred();
      }
        
      itemsStore.setSumDiv(0);
    }, 300 )
  }

  async checkNewAddr(){
    let street = document.querySelector('#newAddrStreet').value;
    
    if( street.length > 0 && this.state.newAddrHome.length > 0 ){
      let data = {
        city_id: this.state.cityId,//itemsStore.getCity(),
        street: street,
        home: this.state.newAddrHome,
        //user_id: itemsStore.getToken()
      }
  
      let res = await this.getData('check_addr', data);

      if( parseInt(res.count) == 0 ){
        alert('Адрес не найден');
      }

      if( parseInt(res.count) > 1 ){
        this.setState({
          list_addr_for_choose: res.addrs,
          list_addr_choose: true
        })
      }

      if( parseInt(res.count) == 1 ){
        res.addrs = res.addrs[0];

        this.setState({
          newAddrInfo: res.addrs,
          point_id: res.addrs.point_id
        })
        
        let allPrice = itemsStore.getAllPrice();

        if( parseInt(res.addrs.free_drive) == 1 || parseInt(itemsStore.free_drive) == 1 ){
            if( parseInt(allPrice) > 0 ){
                itemsStore.setSumDiv(0);
            }else{
                itemsStore.setSumDiv(1);
            }
        }else{
            itemsStore.setSumDiv(parseInt(res.addrs.sum_div));
        }

        //setTimeout( () => {
          this.saveDataOther();
        //}, 300 )

        if( parseInt(this.state.typeTime) == 0 ){
          this.loadTimeWait();
        }else{
          this.loadTimePred();
        }

        if( this.state.promo_name.length > 0 ){
          this.checkPromo( {target: {value: this.state.promo_name}} )
        }
      }
    }else{
      this.setState({
        newAddrInfo: null,
        point_id: 0
      })

      setTimeout( () => {
        this.saveDataOther();
      }, 300 )
      
    }
  }

  chooseAddr(addr){

    this.setState({
      newAddrInfo: addr,
      point_id: addr.point_id,

      list_addr_for_choose: [],
      list_addr_choose: false
    })
    
    let allPrice = itemsStore.getAllPrice();

    if( parseInt(addr.free_drive) == 1 || parseInt(itemsStore.free_drive) == 1 ){
        if( parseInt(allPrice) > 0 ){
            itemsStore.setSumDiv(0);
        }else{
            itemsStore.setSumDiv(1);
        }
    }else{
        itemsStore.setSumDiv(parseInt(addr.sum_div));
    }

    setTimeout( () => {
      this.saveDataOther();

      if( parseInt(this.state.typeTime) == 0 ){
        this.loadTimeWait();
      }else{
        this.loadTimePred();
      }

      if( this.state.promo_name.length > 0 ){
        this.checkPromo( {target: {value: this.state.promo_name}} )
      }
    }, 300 )
  }

  cheangeAddrCustom(event, val){
    console.log( val ); 
    this.setState({ newAddrStreet: val })
  }

  chooseAddrFull(addr, key = -1){
    this.setState({
      newAddrStreet: addr.street,
      newAddrHome: addr.home,
      pd: addr.pd,
      et: addr.et,
      kv: addr.kv,
      newAddrDom: parseInt(addr.fake_dom) == 1 ? false : true
    })
    
    this.setState({
      newAddrInfo: addr,
      point_id: addr.point_id,
      chooseAddr: key,

      list_addr_for_choose: [],
      list_addr_choose: false
    })
    
    let allPrice = itemsStore.getAllPrice();

    if( parseInt(addr.free_drive) == 1 || parseInt(itemsStore.free_drive) == 1 ){
        if( parseInt(allPrice) > 0 ){
            itemsStore.setSumDiv(0);
        }else{
            itemsStore.setSumDiv(1);
        }
    }else{
        itemsStore.setSumDiv(parseInt(addr.sum_div));
    }

    setTimeout( () => {
      this.saveDataOther();

      if( parseInt(this.state.typeTime) == 0 ){
        this.loadTimeWait();
      }else{
        this.loadTimePred();
      }

      if( this.state.promo_name.length > 0 ){
        this.checkPromo( {target: {value: this.state.promo_name}} )
      }
    }, 300 )
  }

  changeDataOther(type, data){
    let value = data.target.value;
    
    if( !isNaN(value) ){
      this.setState({ [type]: value });
    
      //setTimeout( () => {
        this.saveDataOther();
      //}, 300 )
    }
  }

  changeDomTrue(type){
    this.setState({
      newAddrDom: type
    })

    this.changeDataOther('domTrue', {target: {value: type}})
  }

  changeData(type, data){
    let value = data.target.value;
    
    if( type == 'sdacha' && isNaN(value) ){
      return ;
    }

    if( type == 'comment' ){
      if( value.length > 100 ){
        return ;
      }
    }

    this.setState({ [type]: value });
    
    this.saveData();
    
    if( type != 'sdacha' && type != 'comment' && type != 'time' ){
      setTimeout( () => {
        this.loadTimePred();
      }, 300 )
    }
    
  }

  saveData(){
    let cartData = itemsStore.getCartData();
    
    setTimeout(()=>{
      let data = {
        orderType: parseInt(this.state.activeTab) == 0 || parseInt(this.state.activeTab) == 1 ? parseInt(this.state.activeTab) : 0,
        orderAddr: cartData && cartData.orderAddr ? cartData.orderAddr : '',
        
        orderPic: this.state.orderPic,
        orderComment: this.state.comment,
        
        orderTimes: this.state.typeTime,
        orderPredDay: this.state.date,
        orderPredTime: this.state.time,
        
        orderPay: cartData && cartData.orderPay ? cartData.orderPay : '0',
        orderSdacha: this.state.sdacha,
      };
      
      itemsStore.saveCartData(data);
    }, 100)
  }
  
  saveDataOther(){
    let cartData = itemsStore.getCartData();
    
    let addrInfo = this.state.newAddrInfo ? this.state.newAddrInfo : cartData.orderAddr;
    
    setTimeout(()=>{
        let data = {
            orderType: parseInt(this.state.activeTab) == 0 || parseInt(this.state.activeTab) == 1 ? parseInt(this.state.activeTab) : 0,
            orderAddr: {
              id: -1,
              //city_name: itemsStore.getCityRU(),
              street: this.state.newAddrInfo && addrInfo.street ? addrInfo.street : '',
              home: addrInfo.home ? addrInfo.home : '',
              kv: this.state.kv,
              pd: this.state.pd,
              et: this.state.et,
              dom_true: this.state.newAddrDom ? 0 : 1,
              free_drive: addrInfo.free_drive ? addrInfo.free_drive : 0,
              sum_div: addrInfo.sum_div ? addrInfo.sum_div : 0,
              point_id: addrInfo.point_id ? addrInfo.point_id : 0,
              xy: addrInfo.xy ? addrInfo.xy : '',
              pay_active: addrInfo.pay_active ? addrInfo.pay_active : 0,
            },
            
          orderPic: this.state.orderPic,
          orderComment: this.state.comment,
          
          orderTimes: this.state.typeTime,
          orderPredDay: this.state.date,
          orderPredTime: this.state.time,
          
          orderPay: cartData && cartData.orderPay ? cartData.orderPay : '0',
          orderSdacha: this.state.sdacha,
        };
        
        itemsStore.saveCartData(data);
    }, 100)
  }

  changeCity(event){
    this.setState({
      cityId: event.target.value
    })

    setTimeout( ()=>{
      this.start();
    }, 300 )
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
        this.setState({
          openErr: true,
          msgText: 'Номер введен в не верном формате'
        })
        return;
      }
      
    }
    
    this.setState({
      number: number
    })
    
    itemsStore.clientNumber = number;
    localStorage.setItem('clientNumber', number)

    setTimeout( () => {
      this.getAddr();
    }, 300 )
  }

  closeErr(){
    setTimeout( () => {
      this.setState({ openErr: false })
    }, 5000 )
  }

  async getAddr(){
    let data = {
      city_id: this.state.cityId,//itemsStore.getCity(),
      login: this.state.number
    }

    let res = await this.getData('get_user_addrs', data);

    console.log( res )

    this.setState({
      clientAddr: res
    })
  }

  async checkPromo(event){
    let promo = event.target.value;
    
    let data = {
      city_id: this.state.cityId,
      promo_name: promo
    }

    let res = await this.getData('get_promo', data, false);

    console.log( res )

    itemsStore.setPromo( JSON.stringify(res), promo );
    let check_promo = itemsStore.checkPromo();
      
    if( check_promo.st === false ){
      localStorage.removeItem('promo_name')
    }
    
    if( promo.length == 0 ){
      this.setState({
        orderPromoText: '',
        promo_name: '',
        promoST: false
      })
      localStorage.removeItem('promo_name')
    }else{
      this.setState({
        orderPromoText: check_promo.text,
        promoST: check_promo.st,
        promo_name: promo
      })
    }

  }

  clear(){
    console.log( 'clear' )

    itemsStore.clientNumber = '';
    localStorage.removeItem('clientNumber')
    localStorage.removeItem('promo_name')
    
    itemsStore.setItems([]);
    itemsStore.setItemsPromo([]);
    
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
      
      dateTime: new Date()
    };
    
    itemsStore.dateTimeDel = new Date();
    
    itemsStore.saveCartData(data);
    
    
    setTimeout( () => {
      itemsStore.setPromo(null, '');
    }, 300)
    
    this.setState({
      number: '',
      promo_name: '',
      orderPromoText: '',
    })
    
    this.setState({
      newAddrStreet: '',
      newAddrHome: '',
      pd: '',
      et: '',
      kv: '',
      newAddrDom: true,
      
      newAddrInfo: '',
      chooseAddr: -1,
      
      orderPic: 0,
      picPointInfo: null,
      point_id: 0,
      
      comment: '',
      sdacha: '',
      
      number: '',
      clientNumber: '',

      checkClear: false
    })
    
    itemsStore.setSumDiv(0);
  }

  changeTypeTime = (event, newValue) => {
    this.changeDataTime('typeTime', {target: {value: newValue}})
    
    if( parseInt(newValue) == 0 ){
      this.loadTimeWait();
    }else{
      this.loadTimePred();
    }
  }

  async loadTimePred(){
    let my_cart = [];
    let cartItems = itemsStore.getItems();  
    let cartData = itemsStore.getCartData();
    
    cartItems.forEach(el => {
        my_cart.push({
            item_id: el.item_id,
            count: el.count,
        });
    });
    
    let data = {
      point_id: cartData.orderType+1 == 1 ? cartData.orderAddr.point_id ?? 0 : cartData.orderPic ?? 0,
      type_order: cartData.orderType+1,
      date: this.state.date,
      cart: JSON.stringify( my_cart ),
    }

    let res = await this.getData('get_times_pred_center', data, false);

    if( !res.st ){
      /*this.setState({
          error: {
              title: 'Предупреждение', 
              text: json.text
          },
          errorOpen: true
      })*/
    }else{
      this.setState({
        timePred: res.data
      })
    }
  }
  
  async loadTimeWait(){
    let cartData = itemsStore.getCartData();
    
    let data = {
      point_id: cartData.orderType+1 == 1 ? cartData.orderAddr.point_id ?? 0 : cartData.orderPic ?? 0,
      type_order: cartData.orderType,
      city_id: this.state.cityId,
      
      cart: JSON.stringify( itemsStore.getItems() ),
      cartPromo: JSON.stringify( itemsStore.getItemsPromo() )
    }

    let res = await this.getData('load_time_wait_test', data, false);

    this.setState({
      textAvgTime: res['text']
    })
  }
  
  changeDataTime(type, data){
    let value = data.target.value;
    
    this.setState({ [type]: value });
    
    if( type == 'date' ){
      setTimeout(() => {
        this.loadTimePred();   
      }, 300)
    }
    
    this.saveData();
  }

  async startOrderNext(){

    if( this.clickOrderStart == false ){
      this.clickOrderStart = true;
        
      clearTimeout(this.startOrderIntervalTimer);
      
      let cartData = itemsStore.getCartData();
      
      this.setState({ 
        is_load: true
      })
      
      let new_cart = [];
      let cartItems = itemsStore.getItems();
      
      cartItems.forEach( (item) => {
        if( item.count > 0 ){
          new_cart.push({
            name: item.name,
            count: item.count,
            price: item.all_price,
            id: item.item_id,
          })
        }
      })
        
      if( parseInt( cartData.orderTimes ) !== 0 ){
        if( cartData.orderPredDay.length == 0 && cartData.orderPredTime.length == 0 ){
          this.setState({
            error: {
              title: 'Предупреждение', 
              text: 'Не выбрано дата / время предзаказа'
            },
            errorOpen: true,
            spiner: false
          })
          
          this.clickOrderStart = false;
          
          return;
        }
      }
      
      let promo_name = this.state.promo_name;
      
      let data = {
        typeCreate: 'center',
        city_id: this.state.cityId,
        user_id: itemsStore.getToken(),
      
        timePred: JSON.stringify( { value: parseInt( cartData.orderTimes ) == 0 ? 0 : cartData.orderPredDay + ' ' + cartData.orderPredTime } ),
        typeOrder: cartData.orderType,
        addrPic: cartData.orderPic,
        comment: cartData.orderComment,
        sdacha: cartData.orderSdacha,
        addrDev: cartData.orderAddr ? JSON.stringify(cartData.orderAddr) : '', 
        payFull: JSON.stringify({ type: 'cash' }), 
        cart: JSON.stringify(new_cart),
        promo_name: promo_name,
        number: itemsStore.clientNumber
      }

      let json = await this.getData('createOrder', data);

      setTimeout(()=>{
        this.clickOrderStart = false;
      }, 500)
      
      if( json.st ){
        
        if( localStorage.getItem('promo_name') && localStorage.getItem('promo_name').length > 0 ){
          let promo = localStorage.getItem('promo_name');
          
          let arr = itemsStore.getMyPromos();
          
          arr.push( {
            date: moment(new Date()).format("YYYY-MM-DD"),
            promo: promo
          } );
          
          itemsStore.setMyPromos( arr );
        }
        
        let new_cart = [];
        
        json.my_cart.map( (item) => {
          if( parseInt(item.type) != 3 && parseInt(item.type) != 4 ){
            new_cart.push( item )
          }
        } )
        
        json.my_cart.map( (item) => {
          if( parseInt(item.type) == 3 || parseInt(item.type) == 4 ){
            new_cart.push( item )
          }
        } )
        
        this.setState({
          newOrder: {
            cart: new_cart,
            order_id: json.order_id,
            point_id: json.point_id,
            point_name: json.point_name,
            time_wait: json.time_wait_order,
            typeOrder: parseInt(cartData.orderType) == 0 ? 'Доставка' : 'Самовывоз',
            number: itemsStore.clientNumber,
            comment: parseInt(cartData.orderType) == 0 ? cartData.orderComment : '',
            sdacha: parseInt(cartData.orderType) == 0 ? cartData.orderSdacha : '',
            timePred: parseInt( cartData.orderTimes ) == 0 ? '' : cartData.orderPredDay + ' ' + cartData.orderPredTime,
            addr: parseInt(cartData.orderType) == 0 ? cartData.orderAddr : {},
            promoName: localStorage.getItem('promo_name'),
            dop_text: json.dop_text,
          }
        })
        
        setTimeout( () => {
          this.setState({
            orderCheck: true
          })
        }, 500 )
        
        this.startOrderIntervalTimer = setTimeout(()=>{
          this.setState({
            orderCheck: false,
            newOrderData: null
          })
        }, this.startOrderInterval * 1000)
      }else{
        
        if( json.type && json.type == 'new_pred' ){
          this.setState({
            timePred: json.times
          })
        }
        
        this.setState({
          error: {
            title: 'Предупреждение', 
            text: json.text_err
          },
          errorOpen: true
        })
      }
     
    }
  }

  async trueOrder(){

    let data = {
      city_id: this.state.cityId,
      order_id: this.state.newOrder.order_id,
      point_id: this.state.newOrder.point_id,
    };

    let json = await this.getData('trueOrder', data);

    if( json['st'] == false ){
      this.setState({
        error: {
          title: 'При подтверждении оплаты произошла ошибка', 
          text: json.text_err
        },
        errorOpen: true
      })
    }else{
      this.setState({
        error: {
          title: 'Подтверждение заказа', 
          text: 'Заказ успешно оформлен'
        },
        errorOpen: true,
        orderCheck: false,
        newOrderData: null
      })
      
      this.clear();
      
      clearTimeout(this.startOrderIntervalTimer);
    }
  }

  render(){
    return (
      <Grid container spacing={3}>
        
        <Helmet>
          <title>Оформление заказа</title>
        </Helmet>
        
        <Snackbar
          anchorOrigin={{ vertical: this.state.vertical, horizontal: this.state.horizontal }}
          autoHideDuration={5000}
          open={this.state.openErr}
          onClose={ this.closeErr.bind(this) }
          key={'top' + 'center'}
        >
          <Alert severity="error" variant="filled">{this.state.msgText}</Alert>
        </Snackbar>

        <AppBar style={{ backgroundColor: 'transparent', position: 'absolute', overflow: 'hidden', width: 'calc(100% - 50px)', left: 50, zIndex: 5 }} elevation={0}>
          <Toolbar >
            <Grid container spacing={3}>

              <Grid item xs={2}>
                <MySelect classes={this.state.classes} data={this.state.cityList} value={this.state.cityId} func={ this.changeCity.bind(this) } label='Город' />
              </Grid>

              <Grid item xs={2}>
                <MyAutocomplite 
                  id="promoName" 
                  onBlur={ this.checkPromo.bind(this) } 
                  classes={this.state.classes} 
                  freeSolo={true} 
                  data={this.state.promoList} 
                  value={ this.state.promo_name } 
                  func={ (event, val) => { this.setState({ promo_name: val }) } } 
                  multiple={false} 
                  label='Промокод' 
                />
              </Grid>

              <Grid item xs={1}>
                <ButtonGroup disableElevation variant="contained">

                  { this.state.orderPromoText.length == 0 ?
                    <Button style={{ height: 40, backgroundColor: '#bababa' }}> <QuestionMarkIcon /> </Button>
                      :
                    <HtmlTooltip
                      placement="bottom"
                      title={
                        <React.Fragment>
                          <Typography color="inherit" className={this.state.classes.size1}>{this.state.orderPromoText}</Typography>
                        </React.Fragment>
                      }
                    >
                      <Button variant="contained" color="primary" style={{ height: 40, backgroundColor: this.state.promoST === false && this.state.orderPromoText.length == 0 ? '#bababa' : this.state.promoST === false && this.state.orderPromoText.length > 0 ? 'red' : 'green' }}> <QuestionMarkIcon /> </Button>
                    </HtmlTooltip>
                  }
                  
                  <Button style={{ height: 40 }} onClick={ () => { this.setState({ checkClear: true }) } }> <CloseIcon /> </Button>
                </ButtonGroup>
              </Grid>

              <Grid item xs={2}>
                <MyTextInput onBlur={ this.saveNumber.bind(this) } classes={this.state.classes} value={ this.state.number } func={ event => this.setState({ number: event.target.value }) } placeholder={"8 (999) 999-99-99"} label='Телефон'/>
              </Grid>

              <Grid item xs={1}>
              </Grid>

              <Grid item xs={4}>

                <AppBar position="static" style={{ backgroundColor: '#fff', borderRadius: 12, overflow: 'hidden' }}>
                  <Tabs value={this.state.activeTab} onChange={this.changeTab.bind(this)} indicatorColor="secondary" variant="fullWidth" style={{ height: 40, minHeight: 40 }}>
                    
                    <Tab label={'Доставка'} style={{ minWidth: 'auto', height: 40, minHeight: 40 }} {...a11yProps(0)} />
                    <Tab label={'Самовывоз'} style={{ minWidth: 'auto', height: 40, minHeight: 40 }} {...a11yProps(1)} />
                    <Tab label={'Адрес клиента'} style={{ minWidth: 'auto', height: 40, minHeight: 40 }} {...a11yProps(2)} />
                    
                  </Tabs>
                </AppBar>

              </Grid>

            </Grid>
          </Toolbar>
        </AppBar>

        <Backdrop open={this.state.is_load} style={{ zIndex: 999, color: '#fff' }}>
          <CircularProgress color="inherit" />
        </Backdrop>

        <Dialog onClose={()=>{ this.setState({ list_addr_choose: false }) }} open={this.state.list_addr_choose}>
          <DialogTitle style={{ textAlign: 'center' }}>Выбор адреса</DialogTitle>
          <List sx={{ pt: 0 }}>
            {this.state.list_addr_for_choose.map((addr, key) => (
              <ListItem button key={key} onClick={this.chooseAddr.bind(this, addr)}>
                <ListItemText primary={addr.city_name + ', ' + ( addr.city_name_dop.length > 0 ? addr.city_name_dop + ', ' : '' ) + addr.street + ', ' + addr.home } />
              </ListItem>
            ))}
          </List>
        </Dialog>

        <Dialog onClose={ () => {} } open={ this.state.checkClear }>
          <DialogTitle>Точно очистить ?</DialogTitle>
          <List sx={{ pt: 0, pb: 0 }}>
            
            <ListItem button onClick={ () => { this.setState({ checkClear: false }) } } className="checkClearFalse">
              <ListItemText primary={'Отмена'} />
            </ListItem>

            <ListItem button onClick={ this.clear.bind(this) } className="checkClearTrue">
              <ListItemText primary={'Очистить'} />
            </ListItem>
          
          </List>
        </Dialog>

        { this.state.orderCheck === true ?
          <Dialog
            open={this.state.orderCheck}
            fullWidth={true}
            onClose={() => this.setState({ orderCheck: false })}
            className="DialogOrderCheckDialog"
          >
            <DialogTitle className="DialogOrderCheckDialogTitle">
              <Typography variant="h5" component="span" className="orderCheckTitle"> {this.state.newOrder.typeOrder} #{this.state.newOrder.order_id} на {this.state.newOrder.point_name}</Typography>
            </DialogTitle>

            <CloseIcon className="closeDialog" onClick={() => this.setState({ orderCheck: false })} />

            <DialogContent className="DialogOrderCheckDialogBody">
              { this.state.newOrder.timePred !== '' ?
                <Typography variant="h5" component="span" className="orderCheckText">Время предзаказа: {this.state.newOrder.timePred}</Typography>
                  :
                <Typography variant="h5" component="span" className="orderCheckText">Время ожидания: {this.state.newOrder.time_wait}</Typography>
              }
              
              { this.state.newOrder.typeOrder == 'Доставка' ?
                <Typography variant="h5" component="span" className="orderCheckText">Доставка: { this.state.newOrder.addr ?
                  //this.state.newOrder.addr.city_name+', '+
                  this.state.newOrder.addr.street+' '+
                  this.state.newOrder.addr.home+
                  ( this.state.newOrder.addr.pd.length == 0 ? '' : ', Пд. '+this.state.newOrder.addr.pd )+
                  ( this.state.newOrder.addr.et.length == 0 ? '' : ', Эт. '+this.state.newOrder.addr.et )+
                  ( this.state.newOrder.addr.kv.length == 0 ? '' : ', Кв. '+this.state.newOrder.addr.kv )
                      :
                  null
                }</Typography>
                  :
                <Typography variant="h5" component="span" className="orderCheckText">Самовывоз: {this.state.newOrder.point_name}</Typography>
              }
              { this.state.newOrder.typeOrder == 'Доставка' ?
                this.state.newOrder.addr && parseInt(this.state.newOrder.addr.dom_true) == 1 ?
                  <Typography variant="h5" component="span" className="orderCheckText">Домофон не работает</Typography>
                    :
                  null
                  :
                null
              }
              
              <Typography variant="h5" component="span" className="orderCheckText">Номер телефона: {this.state.newOrder.number}</Typography>
              
              { this.state.newOrder.promoName ?
                <Typography variant="h5" component="span" className="orderCheckText">Промокод: {this.state.newOrder.promoName}</Typography>
                  :
                null
              }
                  
              { this.state.newOrder.typeOrder == 'Доставка' ?
                this.state.newOrder.comment && this.state.newOrder.comment.length > 0 ?
                  <Typography variant="h5" component="span" className="nameSdacha orderCheckText">Комментарий: {this.state.newOrder.comment}</Typography>
                    :
                  null
                  :
                null
              }    
              { this.state.newOrder.typeOrder == 'Доставка' ?
                this.state.newOrder.sdacha && this.state.newOrder.sdacha.length > 0 ?
                  <Typography variant="h5" component="span" className="nameSdacha orderCheckText">Сдача с: {this.state.newOrder.sdacha}р</Typography>
                    :
                  null
                  :
                null
              }
                  
              { this.state.newOrder.typeOrder == 'Доставка' ?
                null
                  :
                  this.state.newOrder.dop_text && this.state.newOrder.dop_text.length > 0 ?
                    <Typography variant="h5" component="span" style={{ fontWeight: 'bold' }} className="nameSdacha orderCheckText">{this.state.newOrder.dop_text}</Typography>
                      :
                    null
              }     
                  
              <Table size="small">
                <TableBody>
                  { this.state.newOrder.cart.map( (item, key) =>
                    parseInt(item.count) > 0 ?
                      <TableRow key={key}>
                        <TableCell style={{ width: '60%', paddingLeft: 0 }}>{item.name}</TableCell>
                        <TableCell>{item.count}</TableCell>
                        <TableCell>{item.new_full_price ? item.new_full_price : item.full_price} р</TableCell>
                      </TableRow>
                        :
                      null
                  )}

                  { this.state.newOrder.typeOrder == 'Доставка' ?
                    <TableRow>
                      <TableCell style={{ width: '60%', paddingLeft: 0 }}>Доставка</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>{this.state.sumDiv} р</TableCell>
                    </TableRow>
                      :
                    null
                  }
                </TableBody>
                <TableFooter>
                  <TableRow style={{ borderBottom: 0 }}>
                    <TableCell style={{ paddingLeft: 0 }}>Сумма заказа</TableCell>
                    <TableCell></TableCell>
                    <TableCell>{ parseInt(this.state.AllPrice) + parseInt(this.state.sumDiv) } р</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>

              
            </DialogContent>
            <DialogActions style={{ padding: '12px 24px', paddingBottom: 24 }}>
              <ButtonGroup disableElevation={true} disableRipple={true} variant="contained" className="BtnBorder" style={{ width: '100%' }} onClick={ this.trueOrder.bind(this) }>
                <Button variant="contained" style={{ width: '100%' }} className="BtnCardMain CardInCardItem">Подтвердить заказ</Button>
              </ButtonGroup>
            </DialogActions>
          </Dialog>
            :
          null
        }

        <Dialog
          open={this.state.errorOpen}
          onClose={() => this.setState({ errorOpen: false })}
          fullWidth={true}
          className="DialogOrderCheckDialog"
        >
          <DialogTitle className="DialogOrderCheckDialogTitle">{this.state.error.title}</DialogTitle>
          
          <CloseIcon className="closeDialog" color="inherit" onClick={() => this.setState({ errorOpen: false })} />
          
          <DialogContent>
            <DialogContentText>{this.state.error.text}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.setState({ errorOpen: false })}>Хорошо</Button>
          </DialogActions>
        </Dialog>





        

        <Grid item xs={8} style={{ paddingTop: 5 }}>
          <BlockTable classes={this.state.classes} />
        </Grid>

        <Grid item xs={4} style={{ paddingTop: 5 }}>
          { this.state.activeTab == 0 ?
            this.state.all_addr.length > 0 ? 
              <Grid container spacing={2}>
                { /* адрес доставки */ }
                
                <Grid item xs={8}>
                  <MyAutocomplite id="newAddrStreet" onBlur={this.checkNewAddr.bind(this)} classes={this.state.classes} freeSolo={true} data={this.state.all_addr} value={this.state.newAddrStreet} func={ this.cheangeAddrCustom.bind(this) } multiple={false} label='Улица' />
                </Grid>
                <Grid item xs={4}>
                  <MyTextInput onBlur={this.checkNewAddr.bind(this)} classes={this.state.classes} value={this.state.newAddrHome} func={ event => this.setState({ newAddrHome: event.target.value }) } label='Дом'/>
                </Grid>

                <Grid item xs={4}>
                  <MyTextInput classes={this.state.classes} value={this.state.pd} func={ this.changeDataOther.bind(this, 'pd') } label='Подъезд'/>
                </Grid>
                <Grid item xs={4}>
                  <MyTextInput classes={this.state.classes} value={this.state.et} func={ this.changeDataOther.bind(this, 'et') } label='Этаж'/>
                </Grid>
                <Grid item xs={4}>
                  <MyTextInput classes={this.state.classes} value={this.state.kv} func={ this.changeDataOther.bind(this, 'kv') } label='Квартира'/>
                </Grid>

                <Grid item xs={12}>
                  <ButtonGroup disableElevation variant="contained" className='chooseDomTrue'>
                    <Button className={ this.state.newAddrDom === true ? 'active' : '' } onClick={ this.changeDomTrue.bind(this, true) }>Домофон работает</Button>
                    <Button className={ this.state.newAddrDom === false ? 'active' : '' } onClick={ this.changeDomTrue.bind(this, false) }>Домофон не работает</Button>
                  </ButtonGroup>
                </Grid>
                { /* адрес доставки */ }
              </Grid>
                : 
              null
              :
            null}

          {this.state.activeTab == 1 ?
            this.state.pic_point.length > 0 ? 
              <Grid container direction="column" spacing={0}>
                { /* самовывоз */ }
                { this.state.pic_point.map( (item, key) =>
                  <Grid item xs={12} key={key} >
                    <Button onClick={ this.choosePic.bind(this, item, true) } style={{ backgroundColor: this.state.orderPic == item.id ? '#6ab04c' : '#e5e5e5', color: this.state.orderPic == item.id ? '#fff' : '#000' }} className='boxPic'>{item.addr}</Button>
                  </Grid>
                )}
                { /* /самовывоз/ */ }
              </Grid>
                : 
              null
              :
            null}

          {this.state.activeTab == 2 ?
            this.state.clientAddr.length > 0 ? 
              <List component="nav" aria-label="main mailbox folders" style={{ maxHeight: 150, overflow: 'auto' }}>
                { /* мой адрес */ }
                { this.state.clientAddr.map( (item, key) =>
                  <ListItem button key={key} selected={this.state.chooseAddr === key} onClick={this.chooseAddrFull.bind(this, item, key)} style={{ paddingTop: 0, paddingBottom: 0 }}>
                    <ListItemText primary={ 
                      item.street + ' ' + 
                      item.home + 
                      ( item.pd.length == 0 ? '' : ', Пд. '+item.pd )+
                      ( item.et.length == 0 ? '' : ', Эт. '+item.et )+
                      ( item.kv.length == 0 ? '' : ', Кв. '+item.kv )
                    } />
                  </ListItem>
                ) }
                { /* /мой адрес/ */ }
              </List>
                : 
              null
              :
            null
          }

          { (this.state.activeTab == 0 || this.state.activeTab == 2) && this.state.all_addr.length > 0 ?
            <Grid container spacing={2} marginTop={0}>
              <Grid item xs={12}>
                <MyTextInput multiline={true} maxRows={2} classes={this.state.classes} value={this.state.comment} func={ this.changeData.bind(this, 'comment') } label='Комментарий курьеру'/>
              </Grid>
              <Grid item xs={4}>
                <MyTextInput type="number" classes={this.state.classes} value={this.state.sdacha} func={ this.changeData.bind(this, 'sdacha') } label='Сдача'/>
              </Grid>
            </Grid>
              :
            null}

          
          <Grid container spacing={2} marginTop={0}>
            <Grid item xs={12}>
              <AppBar position="static" style={{ backgroundColor: '#fff', borderRadius: 12, overflow: 'hidden' }}>
                <Tabs value={this.state.typeTime} onChange={this.changeTypeTime} indicatorColor="secondary" variant="fullWidth" style={{ height: 40, minHeight: 40 }}>
                  
                  <Tab label={'По текущему'} style={{ minWidth: 'auto', height: 40, minHeight: 40 }} {...a11yProps(0)} />
                  <Tab label={'Ко времени'} style={{ minWidth: 'auto', height: 40, minHeight: 40 }} {...a11yProps(1)} />
                  
                </Tabs>
              </AppBar>
            </Grid>

            { this.state.typeTime == 0 ?
                <Grid item xs={12}>
                  <Typography variant="h6" component="span">{this.state.textAvgTime}</Typography>
                </Grid>
                  :
                <>
                  <Grid item xs={6}>
                    <MySelect classes={this.state.classes} data={this.state.date_pred} value={this.state.date} func={ this.changeData.bind(this, 'date') } label='Дата' />
                  </Grid>
                  <Grid item xs={6}>
                    <MySelect classes={this.state.classes} data={this.state.timePred} value={this.state.time} func={ this.changeData.bind(this, 'time') } label='Время' />
                  </Grid>
                </>
            }

          </Grid>


          <Grid container spacing={2} marginTop={0}>
            <Grid item xs={12}>
              
             <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" component="span" style={{ fontSize: '0.8rem', color: '#bababa' }}>Доставка: {this.state.sumDiv} р</Typography>
                  <Typography variant="h6" component="span">К оплате: { parseInt(this.state.AllPrice) + parseInt(this.state.sumDiv) } р</Typography>
                </div>
                
                <Button style={{ height: 'fit-content', color: '#fff' }} variant="contained" color="secondary" onClick={ this.startOrderNext.bind(this) }>Оформить заказ</Button>
              </div>
              
            </Grid>
          </Grid>

        </Grid>

        <Grid item xs={4}>
          {this.state.cats.length > 0 && this.state.allItems.length > 0 ?
            <MyAutocomplite id="addItemsAll" classes={this.state.classes} data={this.state.allItems} value={this.state.thisItem} func={ this.addItemCustom.bind(this) } multiple={false} label='Товары' />
              :
            null}
        </Grid>

        <Grid item xs={12}>
          { /* все позиции */ }
          {this.state.cats.length > 0 && this.state.allItems.length > 0 ?
            <>
              <AppBar position="static" style={{ backgroundColor: '#fff', borderRadius: 12, overflow: 'hidden' }}>
                <Tabs value={this.state.activeCat} onChange={this.changeCat} indicatorColor="secondary" variant="fullWidth">
                  { this.state.cats.map((item, key) =>
                    <Tab label={item.name} style={{ minWidth: 'auto' }} key={key} {...a11yProps(key)} />
                  ) }
                </Tabs>
              </AppBar>

              { this.state.cats.map((cat, key) =>
                <TabPanel value={this.state.activeCat} index={key} key={key}>
                  <Grid container spacing={2} className='container' style={{ paddingTop: 0 }}>
                    { cat.items.map( (item, k) =>
                      <Grid key={k} item xs={2}>
                        <Paper className={this.state.classes.paperCat} style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-around', position: 'relative' }} onClick={ this.addToCart.bind(this, item.id) }>
                          
                          <Typography component="span" className={this.state.classes.size1}>{item.name}</Typography>
                          <Typography component="span" className={this.state.classes.size1}>{item.price} р.</Typography>
                          
                          <HtmlTooltip
                            className={this.state.classes.paperCatInfo}
                            style={{ position: 'absolute', top: 0, right: 0 }}
                            placement="top"
                            title={
                              <React.Fragment>
                                <Typography color="inherit" className={this.state.classes.size1}>{item.tmp_desc}</Typography>
                                <Typography color="inherit" className={this.state.classes.size1}>{item.info_weight}</Typography>
                              </React.Fragment>
                            }
                          >
                            <InfoIcon />
                          </HtmlTooltip>
                            
                        </Paper>
                      </Grid>
                    ) }
                  </Grid>
                </TabPanel>
              )}
            </>
              :
            null
          }
          { /* /все позиции/ */ }
        </Grid>

      </Grid>
    )
  }
}

class CreateOrder extends React.Component {
  _isMounted = false;
  _isEdit = false;
  clickOrderStart = false;
  
  startOrderInterval = 300;
  startOrderIntervalTimer = null;
  
  interval = null;
  
  constructor(props) {
    super(props);
    
    this.state = {
      classes: this.props.classes,
      allItems: [],
      
      newOrder: null,
      
      errorOpen: false,
      error: {
        title: '',
        text: ''
      },
      
      orderCheck: false,
      spiner: false,
      
      cityID: 0,
      
      AllPrice: 0,
      sumDiv: 0,
      
      activeTab: 0,
      clientNumber: '',
      
      cityList: [],
      
      cats: [],
      
      all_addr: [],
      pic_point: [],
      timePred: [],
      date_pred: [],
      
      clientAddr: [],
      
      comment: '',
      sdacha: '',
      
      orderDate: '',//дата предзаказа
      orderTime: '',//дата предзаказа
      typeOrder: 0,//тип заказа
      
      
      items: [],
      main_items: [],
      dop_items: [],
      promo_items: [],
      
      activeCat: 0,
      thisItem: '',
      
      orderPic: 0,
      picPointInfo: null,
      point_id: 0,
      
      defValStreet: '',
      defValHome: '',
      
      newAddrInfo: '',
      
      newAddrStreet: '',
      newAddrHome: '',
      newAddrPD: '',
      newAddrET: '',
      newAddrKV: '',
      newAddrDom: '',
      
      pd: '',
      et: '',
      kv: '',
      
      
      chooseAddr: -1,
      
      
      point_id: 0,
      change_point_id: 0,
      
      textAvgTime: 'Среднее время: ~',
      
      date: '',//дата предзаказа
      time: '',//дата предзаказа
      typeTime: 0,//0 - быстрее / 1 - пред
      
      
      city: itemsStore.getCity(),
      
      updateMyPromos: null,
      MyPromos: [],
      
      number: '',
      
      orderPromoText: '',
      promo_name: '',
      promoST: false,
      
      top: false,
      left: false,
      bottom: false,
      right: false,
      
      thisDateTimeDel: null,

      open: false,
      vertical: 'top',
      horizontal: 'right',
      msgText: ''
    };
  }
  
  componentWillUnmount(){
    this._isMounted = false;
    clearInterval(this.interval)
  }
  
  checkLogin(){
    fetch(config.urlApi, {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'},
      body: queryString.stringify({
        type: 'check_login_center', 
        token: itemsStore.getToken()
      })
    }).then(res => res.json()).then(json => {
      if( json === true ){
        
      }else{
        localStorage.removeItem('token');
        clearInterval(this.interval)
        setTimeout( () => {
          //window.location.reload();
          window.location.href = '/auth'
        }, 500 )
      }
    })
    .catch(err => { });
  }
  
  componentDidMount = () => {
    this._isMounted = true;
    
    document.title = "Оформление нового заказа";

    this.interval = setInterval(() => this.checkLogin(), 1000*60*60);
    this.checkLogin(); 
    
    let cartData = itemsStore.getCartData();
    
    let city = localStorage.getItem('cityID');
    
    //let thisCity = itemsStore.getCity();
    
    if( city ){
      itemsStore.setCity(city);
      
      this.setState({
        cityID: city,
        city: city
      })
      
    }else{
      itemsStore.setCity(1);
      
      this.setState({
        cityID: 1,
        city: 1
      })
    }
    
    fetch(config.urlApi, {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'},
      body: queryString.stringify({
        type: 'get_cat_center', 
        city_id: itemsStore.getCity()
      })
    }).then(res => res.json()).then(json => {
      this.setState({
        cats: json.arr,
        cityList: json.city_list,
        allItems: json.all_items
      })
      itemsStore.setAllItemsCat(json.arr);
      itemsStore.setAllItems(json.all_items);
      itemsStore.setFreeItems(json.free_items);
      
      console.log( 'json', json )
      
    })
    .catch(err => { });
    
    fetch(config.urlApi, {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'},
      body: queryString.stringify({
        type: 'get_by_mi', 
        city_id: itemsStore.getCity(),
        user_id: itemsStore.getToken()
      })
    }).then(res => res.json()).then(json => {
      this.setState({
          pic_point: json.get_addr_pic.points,
          all_addr: json.get_addr,
          date_pred: json.date_pred
      })
      
      if( cartData.orderType && parseInt(cartData.orderType) == 1 ){
        let my_point = json.get_addr_pic.points.find( (item) => item.id == parseInt(cartData.orderPic) );
        
        this.choosePic(my_point);
      }
      
    });
    
    
    
    
    
    let defValue = '';
  
    if( localStorage.getItem('clientNumber') ){
      defValue = localStorage.getItem('clientNumber');
      itemsStore.clientNumber = defValue;
      
      this.setState({
        number: defValue,
        clientNumber: defValue
      })
      
      this.getAddr();
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
    
    if( cartData.orderType || cartData.orderType == 0 ){
          
      console.log( 'autorun orderType 1' );
      
      this.setState({
        newAddrStreet: cartData.orderAddr && cartData.orderAddr.street ? cartData.orderAddr.street : '',
        newAddrHome: cartData.orderAddr && cartData.orderAddr.home ? cartData.orderAddr.home : '',
        pd: cartData.orderAddr && cartData.orderAddr.pd ? cartData.orderAddr.pd : '',
        et: cartData.orderAddr && cartData.orderAddr.et ? cartData.orderAddr.et : '',
        kv: cartData.orderAddr && cartData.orderAddr.kv ? cartData.orderAddr.kv : '',
        newAddrDom: cartData.orderAddr && parseInt(cartData.orderAddr.dom_true) == 1 ? false : true,
      })
      
      let allPrice = itemsStore.getAllPrice();
        
      if( parseInt(cartData.orderAddr ? cartData.orderAddr.free_drive : 0) == 1 || parseInt(itemsStore.free_drive) == 1 ){
        if( parseInt(allPrice) > 0 ){
            itemsStore.setSumDiv(0);
        }else{
          itemsStore.setSumDiv(1);
        }
      }else{
        itemsStore.setSumDiv(parseInt(cartData.orderAddr ? cartData.orderAddr.sum_div : 0));
      }
    }
    
    
    
    if( cartData.orderComment != this.state.comment ){
      this.setState({
        comment: cartData.orderComment
      })
    }
    
    if( parseInt(cartData.orderSdacha) != parseInt(this.state.sdacha) ){
      this.setState({
        sdacha: cartData.orderSdacha
      })
    }
    
    autorun(() => {
      if( this._isMounted ){
        
        let thisCity = itemsStore.getCity();
        let cartData = itemsStore.getCartData();
        let test = itemsStore.cart_data;
        
        this.loadTimeWait();
        
        if( parseInt(thisCity) != parseInt(this.state.cityID) ){
          
          console.log( 'autorun change_city' );
          
          this.setState({
            cityID: thisCity,
            
            pic_point: [],
            all_addr: [],
            date_pred: []
          })
          
          fetch(config.urlApi, {
            method: 'POST',
            headers: {
              'Content-Type':'application/x-www-form-urlencoded'},
            body: queryString.stringify({
              type: 'get_cat_center', 
              city_id: thisCity
            })
          }).then(res => res.json()).then(json => {
            this.setState({
              cats: json.arr,
              cityList: json.city_list,
            })
            
            itemsStore.setAllItemsCat(json.arr);
            itemsStore.setAllItems(json.all_items);
            itemsStore.setFreeItems(json.free_items);
            
            setTimeout( () => {
              if( localStorage.getItem('promo_name') ){
                let promo = localStorage.getItem('promo_name');
                
                setTimeout( ()=>{
                  this.setState({
                    promo_name: promo
                  })
                  
                  this.checkPromo( {target: {value: promo}} )
                }, 500 )
                
              }
              
              this.getAddr();
            }, 500 )
            
          })
          .catch(err => { });
          
          fetch(config.urlApi, {
            method: 'POST',
            headers: {
              'Content-Type':'application/x-www-form-urlencoded'},
            body: queryString.stringify({
              type: 'get_by_mi', 
              city_id: thisCity,
              user_id: itemsStore.getToken()
            })
          }).then(res => res.json()).then(json => {
            this.setState({
                pic_point: json.get_addr_pic.points,
                all_addr: json.get_addr,
                date_pred: json.date_pred
            })
          });
        }
        
        if( parseInt(this.state.typeTime) != parseInt(cartData.orderTimes) ){
          this.setState({
            typeTime: cartData.orderTimes
          })
          
          this.setState({
            time: cartData.orderPredTime,
            date: cartData.orderPredDay,
            typeTime: cartData.orderTimes,
          })
          
          if( cartData.orderType == 0 ){
            if( parseInt(cartData.orderTimes) == 1 ){
              this.loadTimePred();
            }else{
              this.loadTimeWait();
            }
          }
          
          if( cartData.orderType == 1 ){
            if( parseInt(cartData.orderTimes) == 1 ){
              this.loadTimePred();
            }else{
              this.loadTimeWait();
            }
            
            this.setState({
              point_id: cartData.orderPic
            })
          }
        }
        
        
        if( cartData.orderType || cartData.orderType == 0 ){
          let allPrice = itemsStore.getAllPrice();
            
          if( parseInt(cartData.orderAddr ? cartData.orderAddr.free_drive : 0) == 1 || parseInt(itemsStore.free_drive) == 1 ){
            if( parseInt(allPrice) > 0 ){
                itemsStore.setSumDiv(0);
            }else{
              itemsStore.setSumDiv(1);
            }
          }else{
            itemsStore.setSumDiv(parseInt(cartData.orderAddr ? cartData.orderAddr.sum_div : 0));
          }
        }
        
        if( itemsStore.updateMyPromos != this.state.updateMyPromos ){
          
          console.log( 'autorun updateMyPromos' );
          
          let myPromos = itemsStore.getMyPromos();
          let myPromosNew = [];
          let checkDate = moment(new Date()).add(-7, 'days').format("YYYY-MM-DD");
          
          myPromos = myPromos.filter( (item) => item.date >= checkDate );
          
          localStorage.setItem('MyPromos', JSON.stringify(myPromos) );
          
          myPromos.forEach( element => {
            let check = myPromosNew.find( (item) => item.promo == element.promo )
            
            if( !check || check.length == 0 ){
              element.count = 1;
              
              myPromosNew.push( element )
            }else{
              myPromosNew.forEach( (item, key) => {
                if( item.promo == element.promo ){
                  myPromosNew[key]['count'] ++;
                }
              } )
            }
          });
          
          myPromosNew = myPromosNew.filter( (item) => item.count > 1 );
          
          this.setState({
            updateMyPromos: itemsStore.updateMyPromos,
            MyPromos: myPromosNew
          })
        }
        
        
        
        let newPrice = itemsStore.getAllPrice();
        let newSumDiv = itemsStore.getSumDiv();
        
        if( parseInt(newPrice) != parseInt(this.state.AllPrice) ){
          this.setState({
            AllPrice: newPrice
          })
          
          setTimeout( () => {
            if( document.getElementById('promo_name') && document.getElementById('promo_name').value.length > 0 ){
              let promo = document.getElementById('promo_name').value;
              
              setTimeout( ()=>{
                this.setState({
                  promo_name: promo
                })
                
                console.log( 'check_promo 11' )
                
                this.checkPromo( {target: {value: promo}} )
              }, 100 )
              
            }
          }, 300 )
        }
        
        if( parseInt( itemsStore.free_drive ) == 1 ){
          if( parseInt(newPrice) == 0 ){
            itemsStore.setSumDiv(1);
            
            this.setState({
              sumDiv: 1
            })
          }else{
            itemsStore.setSumDiv(0);
            
            this.setState({
              sumDiv: 0
            })
          }
        }else{
          if( parseInt(newSumDiv) != parseInt(this.state.sumDiv) ){
            if( cartData.orderType && cartData.orderType == 1 ){
              this.setState({
                sumDiv: 0
              })
            }else{
              this.setState({
                sumDiv: newSumDiv
              })
            }
          }
        }
        
        let my_cart = itemsStore.getItems();
        let all_items = itemsStore.getAllItems();
        let promoItems = itemsStore.getItemsPromo();
        let cartPromoItems = [];
        
        promoItems.map((item) => {
          let thisitem = all_items.find( (item_) => item_.id == item.item_id );
          
          if(thisitem){
            cartPromoItems.push({
              id: item.item_id,
              cat_id: thisitem.cat_id,
              name: thisitem.name,
              desc: thisitem.tmp_desc,
              count: item.count,
              all_price: item.all_price,
              img: thisitem.img_new,
              imgUpdate: thisitem.img_new_update,
            })
          }
        })
        
        let main_items = [],
            dop_items = [];
        
        if( all_items.length > 0 ){
          my_cart.map( (it) => {
            let cart_info = all_items.find( (item) => item.id == it.item_id );
            
            if( !cart_info ){
              alert('В корзине произошла ошибка');
            }
            
            if( cart_info && parseInt(cart_info.cat_id) == 7 ){
              dop_items.push( it );
            }else{
              main_items.push( it );
            }
          } )
          
          console.log( {
            dop_items: dop_items,
            main_items: main_items,
            promo_items: cartPromoItems
          } )
          
          this.setState({
            dop_items: dop_items,
            main_items: main_items,
            promo_items: cartPromoItems
          })
        }
        
        
      }
    })
    
    if( cartData && cartData.orderType ){
      this.setState({
        activeTab: parseInt(cartData.orderType) == 1 ? 1 : 0,
        typeOrder: parseInt(cartData.orderType),
        
        comment: cartData.comment ? cartData.comment : '',
        sdacha: cartData.sdacha ? cartData.sdacha : '',
      })
    }
  }
  
  changeTab = (event, newValue) => {
    let type = parseInt(newValue) == 0 || parseInt(newValue) == 1 ? parseInt(newValue) : 0;
    
    //this.setState({
      //activeTab: newValue,
      //typeOrder: parseInt(newValue) == 0 || parseInt(newValue) == 1 ? parseInt(newValue) : 0
    //});
    
    console.log( 'test', newValue )
    
    if( parseInt(newValue) == 1 ){
      this.setState({
        sumDiv: 0
      });
      
      itemsStore.setSumDiv(0);
    }
    
    this.setState({
      activeTab: newValue
    });
    
    setTimeout( () => {
      this.saveData();  
    }, 500 )
  }
  
  getAddr(){
    fetch(config.urlApi, {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'},
      body: queryString.stringify({
        type: 'get_user_addrs',  
        city_id: itemsStore.getCity(),
        login: this.state.clientNumber
      })
    }).then(res => res.json()).then(json => {
      
      console.log( 'clientAddr', json )
      console.log( 'type', {
        type: 'get_user_addrs',  
        city_id: itemsStore.getCity(),
        login: this.state.clientNumber
       } )
      
      this.setState({
        clientAddr: json
      })
    });
  }
  
  changeData(type, data){
    let value = data.target.value;
    
    if( type == 'sdacha' && isNaN(value) ){
      return ;
    }

    this.setState({ [type]: value });
    
    this.saveData();
    
    if( type != 'sdacha' || type != 'comment' ){
      console.log( 'loadTimePred' )
      setTimeout( () => {
        this.loadTimePred();
      }, 300 )
    }
    
  }
  
  saveData(){
    let cartData = itemsStore.getCartData();
    
    setTimeout(()=>{
      let data = {
        orderType: parseInt(this.state.activeTab) == 0 || parseInt(this.state.activeTab) == 1 ? parseInt(this.state.activeTab) : 0,
        orderAddr: cartData && cartData.orderAddr ? cartData.orderAddr : '',
        
        orderPic: this.state.orderPic,
        orderComment: this.state.comment,
        
        orderTimes: this.state.typeTime,
        orderPredDay: this.state.date,
        orderPredTime: this.state.time,
        
        orderPay: cartData && cartData.orderPay ? cartData.orderPay : '0',
        orderSdacha: this.state.sdacha,
      };
      
      itemsStore.saveCartData(data);
    }, 100)
  }
  
  saveDataOther(){
    let cartData = itemsStore.getCartData();
    
    let addrInfo = this.state.newAddrInfo ? this.state.newAddrInfo : cartData.orderAddr;
    
    setTimeout(()=>{
        let data = {
            orderType: parseInt(this.state.activeTab) == 0 || parseInt(this.state.activeTab) == 1 ? parseInt(this.state.activeTab) : 0,
            orderAddr: {
              id: -1,
              //city_name: itemsStore.getCityRU(),
              street: addrInfo.street ? addrInfo.street : '',
              home: addrInfo.home ? addrInfo.home : '',
              kv: this.state.kv,
              pd: this.state.pd,
              et: this.state.et,
              dom_true: this.state.newAddrDom ? 0 : 1,
              free_drive: addrInfo.free_drive ? addrInfo.free_drive : 0,
              sum_div: addrInfo.sum_div ? addrInfo.sum_div : 0,
              point_id: addrInfo.point_id ? addrInfo.point_id : 0,
              xy: addrInfo.xy ? addrInfo.xy : '',
              pay_active: addrInfo.pay_active ? addrInfo.pay_active : 0,
            },
            
          orderPic: this.state.orderPic,
          orderComment: this.state.comment,
          
          orderTimes: this.state.typeTime,
          orderPredDay: this.state.date,
          orderPredTime: this.state.time,
          
          orderPay: cartData && cartData.orderPay ? cartData.orderPay : '0',
          orderSdacha: this.state.sdacha,
        };
        
        itemsStore.saveCartData(data);
    }, 100)
  }
  
  startOrderNext(){
    if( this.clickOrderStart == false ){
      this.clickOrderStart = true;
        
      clearTimeout(this.startOrderIntervalTimer);
      
      let cartData = itemsStore.getCartData();
      
      this.setState({ 
        spiner: true
      })
      
      let new_cart = [];
      let cartItems = itemsStore.getItems();
      
      cartItems.forEach( (item) => {
        if( item.count > 0 ){
          new_cart.push({
            name: item.name,
            count: item.count,
            price: item.all_price,
            id: item.item_id,
          })
        }
      })
        
      if( parseInt( cartData.orderTimes ) !== 0 ){
        if( cartData.orderPredDay.length == 0 && cartData.orderPredTime.length == 0 ){
          this.setState({
            error: {
              title: 'Предупреждение', 
              text: 'Не выбрано дата / время предзаказа'
            },
            errorOpen: true,
            spiner: false
          })
          
          this.clickOrderStart = false;
          
          return;
        }
      }
      
      let promo_name = localStorage.getItem('promo_name') ? localStorage.getItem('promo_name') : document.getElementById('promo_name').value;
      
      fetch(config.urlApi, {
        method: 'POST',
        headers: {
          'Content-Type':'application/x-www-form-urlencoded'},
        body: queryString.stringify({
          type: 'createOrder', 
          typeCreate: 'center',
          city_id: itemsStore.getCity(),
          user_id: itemsStore.getToken(),
        
          timePred: JSON.stringify( { value: parseInt( cartData.orderTimes ) == 0 ? 0 : cartData.orderPredDay + ' ' + cartData.orderPredTime } ),
          typeOrder: cartData.orderType,
          addrPic: cartData.orderPic,
          comment: cartData.orderComment,
          sdacha: cartData.orderSdacha,
          addrDev: cartData.orderAddr ? JSON.stringify(cartData.orderAddr) : '', 
          //pay: payFull.title, //
          payFull: JSON.stringify({ type: 'cash' }), 
          cart: JSON.stringify(new_cart),
          promo_name: promo_name,
          number: itemsStore.clientNumber
        })
      }).then(res => res.json()).then(json => {
          
        setTimeout(()=>{
          this.setState({
              spiner: false
          })
          
          this.clickOrderStart = false;
        }, 500)
        
        if( json.st ){
          
          if( localStorage.getItem('promo_name') && localStorage.getItem('promo_name').length > 0 ){
            let promo = localStorage.getItem('promo_name');
            
            let arr = itemsStore.getMyPromos();
            
            arr.push( {
              date: moment(new Date()).format("YYYY-MM-DD"),
              promo: promo
            } );
            
            itemsStore.setMyPromos( arr );
          }
          
          let new_cart = [];
          
          json.my_cart.map( (item) => {
            if( parseInt(item.type) != 3 && parseInt(item.type) != 4 ){
              new_cart.push( item )
            }
          } )
          
          json.my_cart.map( (item) => {
            if( parseInt(item.type) == 3 || parseInt(item.type) == 4 ){
              new_cart.push( item )
            }
          } )
          
          this.setState({
            newOrder: {
              cart: new_cart,
              order_id: json.order_id,
              point_id: json.point_id,
              point_name: json.point_name,
              time_wait: json.time_wait_order,
              typeOrder: parseInt(cartData.orderType) == 0 ? 'Доставка' : 'Самовывоз',
              number: itemsStore.clientNumber,
              comment: parseInt(cartData.orderType) == 0 ? cartData.orderComment : '',
              sdacha: parseInt(cartData.orderType) == 0 ? cartData.orderSdacha : '',
              timePred: parseInt( cartData.orderTimes ) == 0 ? '' : cartData.orderPredDay + ' ' + cartData.orderPredTime,
              addr: parseInt(cartData.orderType) == 0 ? cartData.orderAddr : {},
              promoName: localStorage.getItem('promo_name'),
              dop_text: json.dop_text,
            }
          })
          
          setTimeout( () => {
            this.setState({
              orderCheck: true
            })
          }, 500 )
          
          this.startOrderIntervalTimer = setTimeout(()=>{
            this.setState({
              orderCheck: false,
              newOrderData: null
            })
          }, this.startOrderInterval * 1000)
        }else{
          
          if( json.type && json.type == 'new_pred' ){
            this.setState({
              timePred: json.times
            })
          }
          
          this.setState({
            error: {
              title: 'Предупреждение', 
              text: json.text_err
            },
            errorOpen: true
          })
        }
      })
    }
  }
  
  trueOrder(){
    fetch(config.urlApi, {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'},
      body: queryString.stringify({
        type: 'trueOrder', 
        city_id: itemsStore.getCity(),
        //user_id: -1,
        
        order_id: this.state.newOrder.order_id,
        point_id: this.state.newOrder.point_id,
      })
    }).then(res => res.json()).then(json => {
      if( json['st'] == false ){
        this.setState({
          error: {
            title: 'При подтверждении оплаты произошла ошибка', 
            text: json.text_err
          },
          errorOpen: true
        })
      }else{
        this.setState({
          error: {
            title: 'Подтверждение заказа', 
            text: 'Заказ успешно оформлен'
          },
          errorOpen: true,
          orderCheck: false,
          newOrderData: null
        })
        
        this.clear();
        
        clearTimeout(this.startOrderIntervalTimer);
      }
    });
  }
  
  clear(){
    
    itemsStore.clientNumber = '';
    localStorage.removeItem('clientNumber')
    localStorage.removeItem('promo_name')
    
    itemsStore.setItems([]);
    itemsStore.setItemsPromo([]);
    
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
      
      dateTime: new Date()
    };
    
    itemsStore.dateTimeDel = new Date();
    
    itemsStore.saveCartData(data);
    
    
    setTimeout( () => {
      itemsStore.setPromo(null, '');
    }, 300)
    
    this.setState({
      number: '',
      promo_name: '',
      orderPromoText: '',
    })
    
    this.setState({
      newAddrStreet: '',
      newAddrHome: '',
      pd: '',
      et: '',
      kv: '',
      newAddrDom: true,
      
      newAddrInfo: '',
      chooseAddr: -1,
      
      orderPic: 0,
      picPointInfo: null,
      point_id: 0,
      
      comment: '',
      sdacha: '',
      
      number: '',
      clientNumber: ''
    })
    
    itemsStore.setSumDiv(0);
  }
  
  changeCat = (event, newValue) => {
    this.setState({
      activeCat: newValue
    })
  }
  
  addToCart(item_id){
    itemsStore.AddItem(item_id);
  }
  
  addItemCustom(event, value){
    let additem = this.state.allItems.find( (item) => item.name == value );
    this.addToCart(additem.id);
    
    this.setState({
      thisItem: additem.name
    })
    
    setTimeout( () => {
      this.setState({
        thisItem: ''
      })
    }, 100 )
    
  }
  
  choosePic(point){
    this.setState({
      orderPic: point.id,
      picPointInfo: point,
      
      point_id: point.id,
      sumDiv: 0
    })
    
    itemsStore.setSumDiv(0);
    
    this.saveData();
    
    setTimeout( () => {
      this.checkPromo( {target: {value: this.state.promo_name}} )
      
      itemsStore.setSumDiv(0);
    }, 300 )
  }
  
  checkNewAddr(){
    let street = document.querySelector('#newAddrStreet').value;
    
    if( street.length > 0 && this.state.newAddrHome.length > 0 ){
      fetch(config.urlApi, {
        method: 'POST',
        headers: {
          'Content-Type':'application/x-www-form-urlencoded'},
        body: queryString.stringify({
          type: 'save_new_addr',  
          city_id: itemsStore.getCity(),
          street: street,
          home: this.state.newAddrHome,
          user_id: itemsStore.getToken()
        })
      }).then(res => res.json()).then(json => {
        if( !json.st ){
            //alert( json.text )
            this.setState({ open: true, msgText: json.text })
        }else{
          this.setState({
            newAddrInfo: json.res,
            point_id: json.res.point_id
          })
          
          let allPrice = itemsStore.getAllPrice();
    
          if( parseInt(json.res ? json.res.free_drive : 0) == 1 || parseInt(itemsStore.free_drive) == 1 ){
              if( parseInt(allPrice) > 0 ){
                  itemsStore.setSumDiv(0);
              }else{
                  itemsStore.setSumDiv(1);
              }
          }else{
              itemsStore.setSumDiv(parseInt(json.res ? json.res.sum_div : 0));
          }
          
          this.saveDataOther();
          
          
          setTimeout( () => {
            this.checkPromo( {target: {value: this.state.promo_name}} )
          }, 300 )
        }
      });
    }
  }
  
  changeDomTrue(type){
    this.setState({
      newAddrDom: type
    })
    this.changeDataOther('domTrue', {target: {value: type}})
  }
  
  changeDataOther(type, data){
    let value = data.target.value;
    
    if( !isNaN(value) ){
      this.setState({ [type]: value });
    
      this.saveDataOther();
    }
  }
  
  chooseAddr(key, item, event){
    let allPrice = itemsStore.getAllPrice();
        
    if( parseInt(item ? item.free_drive : 0) == 1 || parseInt(itemsStore.free_drive) == 1 ){
      if( parseInt(allPrice) > 0 ){
          itemsStore.setSumDiv(0);
      }else{
        itemsStore.setSumDiv(1);
      }
    }else{
      itemsStore.setSumDiv(parseInt(item ? item.sum_div : 0));
    }
    
    console.log( item )
    
    this.setState({
      newAddrStreet: item.street,
      newAddrHome: item.home,
      pd: item.pd,
      et: item.et,
      kv: item.kv,
      newAddrDom: parseInt(item.dom_true) == 0 ? true : false,
      
      point_id: item.point_id
    })
    
    //if( key != this.state.chooseAddr ){
      this.setState({
        chooseAddr: key
      })
      
      let cartData = itemsStore.getCartData();
      
      //if( cartData.orderType || cartData.orderType == 0 ){
          
        cartData.orderAddr = item;
        
        itemsStore.saveCartData(cartData);
      //}
    //}
    
    setTimeout( () => {
      this.checkPromo( {target: {value: this.state.promo_name}} )
    }, 300 )
  }
  
  chooseAddr2(key, item, event){
    
    let allPrice = itemsStore.getAllPrice();
        
    if( parseInt(item ? item.free_drive : 0) == 1 || parseInt(itemsStore.free_drive) == 1 ){
      if( parseInt(allPrice) > 0 ){
          itemsStore.setSumDiv(0);
      }else{
        itemsStore.setSumDiv(1);
      }
    }else{
      itemsStore.setSumDiv(parseInt(item ? item.sum_div : 0));
    }
    
    if( key != this.state.chooseAddr ){
      this.setState({
        chooseAddr: key,
        point_id: item.point_id
      })
    }
    
    
    setTimeout( () => {
      this.checkPromo( {target: {value: this.state.promo_name}} )
    }, 300 )
  }
  
  changeTypeTime = (event, newValue) => {
    //if( this._isEdit === true ){
      console.log( 'changeTypeTime' )
      
      this.changeDataTime('typeTime', {target: {value: newValue}})
      
      if( parseInt(newValue) == 0 ){
        this.loadTimeWait();
      }else{
        this.loadTimePred();
      }
    //}
  }
  
  loadTimePred(){
    let my_cart = [];
    let cartItems = itemsStore.getItems();  
    let cartData = itemsStore.getCartData();
    
    if( cartData.orderType+1 == 1 ){
        if( !cartData.orderAddr || !cartData.orderAddr.point_id ){
            /*this.setState({
                error: {
                    title: 'Предупреждение', 
                    text: 'Адрес доставки или точка самовывоза не выбрана'
                },
                errorOpen: true,
                orderTimes: '1'
            })*/
            
            //return;
        }
    }
    
    cartItems.forEach(el => {
        my_cart.push({
            item_id: el.item_id,
            count: el.count,
        });
    });
    
    fetch(config.urlApi, {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'},
      body: queryString.stringify({
        type: 'get_times_pred_center',  
        point_id: cartData.orderType+1 == 1 ? cartData.orderAddr.point_id ?? 0 : cartData.orderPic ?? 0,
        type_order: cartData.orderType+1,
        date: this.state.date,
        cart: JSON.stringify( my_cart ),
      })
    }).then(res => res.json()).then(json => {
      if( !json.st ){
            /*this.setState({
                error: {
                    title: 'Предупреждение', 
                    text: json.text
                },
                errorOpen: true
            })*/
      }else{
        this.setState({
          timePred: json.data
        })
      }
    });
  }
  
  loadTimeWait(){
    let cartData = itemsStore.getCartData();
    
    console.log( itemsStore.getItems() );
    
    fetch(config.urlApi, {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'},
      body: queryString.stringify({
        type: 'load_time_wait_test',  
        point_id: cartData.orderType+1 == 1 ? cartData.orderAddr.point_id ?? 0 : cartData.orderPic ?? 0,
        type_order: cartData.orderType,
        city_id: itemsStore.getCity(),
        
        cart: JSON.stringify( itemsStore.getItems() ),
        cartPromo: JSON.stringify( itemsStore.getItemsPromo() )
        
      })
    }).then(res => res.json()).then(json => {
      
      console.log( json )
      
      this.setState({
        textAvgTime: json['text']
      })
    });
  }
  
  changeDataTime(type, data){
    let value = data.target.value;
    
    this.setState({ [type]: value });
    
    if( type == 'date' ){
      setTimeout(() => {
        this.loadTimePred();   
      }, 300)
    }
    
    this.saveData();
  }
  
  startData(){
    this._thisEdit = true;
    
    let cartData = itemsStore.getCartData();
    
    if( cartData ){
      
      let date = cartData.orderPredDay;
      let check = this.state.date_pred.filter( (item) => item.date < date );
      
      if( check.length == 0 ){
        this.changeTypeTime( null, 0 )
        
        this.setState({
          time: '',
          date: ''
        })
        
        return ;
      }else{
        this.setState({
          date: date
        })
        
        setTimeout( () => {
          this.loadTimePred();
          
          setTimeout( () => {
            if( cartData.orderPredTime ){
              let check = this.state.timePred.filter( (item) => item.value == cartData.orderPredTime );
              
              if( check.length == 0 ){
                this.changeTypeTime( null, 0 )
              }else{              
                this.setState({
                  time: cartData.orderPredTime
                })
              }
            }
          }, 1000 )
          
        }, 500 )
      }
    }
    
    if( cartData.orderTimes ){
      this.setState({
        typeTime: cartData.orderTimes
      })
    }
    
    this._thisEdit = false;
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
      number: number,
      clientNumber: number
    })
    
    itemsStore.clientNumber = number;
    localStorage.setItem('clientNumber', number)
    
    setTimeout( () => {
      this.getAddr();
    }, 300 )
  }
    
  checkPromo(event){
    let promo = event.target.value;
    
    fetch(config.urlApi, {
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
          promo_name: '',
          promoST: false
        })
        localStorage.removeItem('promo_name')
        itemsStore.free_drive = 0;
      }else{
        this.setState({
          orderPromoText: check_promo.text,
          promoST: check_promo.st,
          promo_name: promo
        })
      }
    })
  }
    
  toggleDrawer2(anchor, open, event){
    this.setState({
      [anchor]: open
    })
  };
    
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
      //location.reload();
    }, 500 )
  }
    
  logOut(){
    localStorage.removeItem('token');
    
    setTimeout( () => {
      window.location.reload();
    }, 500 )
  }
  
  render() {
    return null;

    return (
      <Grid container spacing={0} style={{ width: '100vw', height: '100vh' }}>
        
        <Helmet>
          <title>Оформление заказа</title>
        </Helmet>
        
        <Backdrop open={this.state.spiner} style={{ zIndex: 99, color: '#fff' }}>
          <CircularProgress color="inherit" />
        </Backdrop>
        
        <Snackbar
          //anchorOrigin={ this.state.vertical, this.state.horizontal }
          autoHideDuration={5000}
          open={this.state.open}
          onClose={ () => { this.setState({ open: false }) } }
          key={this.state.vertical + this.state.horizontal}
        >
          <Alert severity="error">{this.state.msgText}</Alert>
        </Snackbar>

        <Grid item xs={8} style={{ paddingRight: 16 }}>
          { this.state.cityList.length > 0 ? 
            <div className={this.state.classes.root}>
              <AppBar position="static" style={{ backgroundColor: '#fff', color: '#000' }}>
                <Toolbar style={{ minHeight: 48, height: 48 }}>
                  <IconButton edge="start" onClick={this.toggleDrawer2.bind(this, 'left', true)} color="inherit" aria-label="menu">
                    <MenuIcon />
                  </IconButton>
                  
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
                    <Grid item xs={6} style={{ display: 'flex', alignItems: 'center' }}>
                      
                      <Autocomplete
                        freeSolo
                        
                        label="Промокод"
                        variant="outlined"
                        size="small"
                        id="promo_name"
                        
                        style={{ minWidth: 200, marginRight: 8 }}
                        
                        value={ this.state.promo_name } 
                        onChange={ (event, val) => { console.log(val); this.setState({ promo_name: val }) } } 
                        onBlur={this.checkPromo.bind(this)} 
                        
                        options={this.state.MyPromos.map((option) => option.promo)}
                        renderInput={(params) => (
                            <TextField {...params} label="Промокод" margin="normal" variant="outlined" />
                        )}
                      />
                      
                      
                      <HtmlTooltip
                        placement="bottom"
                        title={
                          <React.Fragment>
                            <Typography color="inherit" className={this.state.classes.size1}>{this.state.orderPromoText}</Typography>
                          </React.Fragment>
                        }
                      >
                        <Button variant="contained" color="primary" style={{ padding: '2px 6px', marginTop: 8, minWidth: 30, marginRight: 8, backgroundColor: this.state.promoST === false && this.state.orderPromoText.length == 0 ? 'gray' : this.state.promoST === false && this.state.orderPromoText.length > 0 ? 'red' : 'green' }}>?</Button>
                      </HtmlTooltip>
                      
                      <Button variant="contained" color="primary" className="btnClear" style={{ padding: '2px 6px', minWidth: 30, marginTop: 8 }} onClick={ this.clear.bind(this) } >
                        <CloseIcon />
                      </Button>
                    </Grid>
                    <Grid item xs={3} style={{ paddingTop: 14 }}>
                      <TextField 
                        label="Телефон" 
                        
                        variant="outlined"
                        size="small"
                        
                        placeholder="8 (999) 999-99-99"
                        value={this.state.number}
                        onChange={ event => this.setState({ number: event.target.value }) } 
                        onBlur={this.saveNumber.bind(this)} 
                        style={{ marginRight: 4, marginLeft: 4, marginBottom: 6}} 
                      />
                      
                    </Grid>
                  
                  </Grid>
                      
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
              : 
            null }
            
        </Grid>
        <Grid item xs={8} style={{ padding: '24px 8px 0px 16px' }}>
          { /* моя корзина */ }
          <Paper style={{ width: '100%' }}>
            <TableContainer style={{ maxHeight: 350 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell>Наимнование</TableCell>
                    <TableCell style={{ textAlign: 'center' }}>Кол-во</TableCell>
                    <TableCell>Сумма</TableCell>
                    <TableCell> <CloseIcon style={{ marginTop: 5 }} /> </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  { this.state.main_items.map( (item, key) =>
                    <BlockTableItem key={key} item={item} classes={this.state.classes} type="main" />
                  )}
                  
                  { this.state.dop_items.map( (item, key) =>
                    <BlockTableItem key={key} item={item} classes={this.state.classes} type="dop" />
                  )}
                  
                  { this.state.promo_items.map( (item, key) =>
                    <BlockTableItem key={key} item={item} classes={this.state.classes} type="promo" />
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          { /* /моя корзина/ */ }
        </Grid>
        <Grid item xs={4} style={{ padding: '16px', marginTop: -50 }} className='container'>
          <Tabs
            value={this.state.activeTab}
            onChange={this.changeTab.bind(this)}
            indicatorColor="primary"
            textColor="primary"
            centered
            style={{ width: '100%', marginBottom: 10 }}
          >
            <Tab label="Доставка" />
            <Tab label="Самовывоз" />
            <Tab label="Адрес клиента" />
          </Tabs>
          
          { this.state.activeTab == 0 ?
            this.state.all_addr.length > 0 ? 
              <Grid container spacing={3}>
                { /* адрес доставки */ }
                <div className='mainAddr'>
                  <Autocomplete
                    freeSolo
                    id="newAddrStreet"
                    style={{ flex: 3 }}
                    //defaultValue={this.state.defValStreet} 
                    
                    value={this.state.newAddrStreet} 
                    onChange={ ( event, newVal) => { this.setState({ newAddrStreet: newVal }) } }
                    
                    onBlur={this.checkNewAddr.bind(this)}
                    options={this.state.all_addr.map((option) => option.value)}
                    renderInput={(params) => (
                        <TextField {...params} label="Улица" margin="normal" variant="outlined" />
                    )}
                  />
                  <TextField 
                    label="Дом" 
                    variant="outlined" 
                    style={{ margin: '16px 8px 8px 8px', flex: 1 }}
                    //defaultValue={this.state.defValHome} 
                    value={this.state.newAddrHome} 
                    onChange={ event => this.setState({ newAddrHome: event.target.value }) }
                    onBlur={this.checkNewAddr.bind(this)}
                  />
                </div>
                <div className='otherAddr'>
                  <TextField 
                    label="Подъезд" 
                    variant="outlined" 
                    style={{ marginRight: 4}}
                    value={ this.state.pd }
                    onChange={ this.changeDataOther.bind(this, 'pd') }
                    onBlur={ this.changeDataOther.bind(this, 'pd') }
                  />
                  <TextField 
                    label="Этаж" 
                    variant="outlined" 
                    style={{ marginRight: 4, marginLeft: 4}}
                    value={ this.state.et }
                    onBlur={ this.changeDataOther.bind(this, 'et') }
                    onChange={ this.changeDataOther.bind(this, 'et') }
                  />
                  <TextField 
                    label="Квартира" 
                    variant="outlined" 
                    style={{ marginRight: 8, marginLeft: 4}}
                    value={ this.state.kv }
                    onBlur={ this.changeDataOther.bind(this, 'kv') }
                    onChange={ this.changeDataOther.bind(this, 'kv') }
                  />  
                </div>
                <div style={{ width: '100%', marginRight: 8 }}>
                  <ButtonGroup disableElevation variant="contained" className='chooseDomTrue'>
                    <Button className={ this.state.newAddrDom === true ? 'active' : '' } onClick={ this.changeDomTrue.bind(this, true) }>Домофон работает</Button>
                    <Button className={ this.state.newAddrDom === false ? 'active' : '' } onClick={ this.changeDomTrue.bind(this, false) }>Домофон не работает</Button>
                  </ButtonGroup>
                </div>
                { /* адрес доставки */ }
              </Grid>
                : 
              null
              :
              this.state.activeTab == 1 ?
                this.state.pic_point.length > 0 ? 
                  <Grid container direction="column" justifyContent="space-between" alignItems="stretch" spacing={3} className='container' style={{ paddingRight: 8 }}>
                    { /* самовывоз */ }
                    { this.state.pic_point.map( (item, key) =>
                      <Button key={key} onClick={ this.choosePic.bind(this, item) } style={{ backgroundColor: this.state.orderPic == item.id ? '#6ab04c' : '#e5e5e5', color: this.state.orderPic == item.id ? '#fff' : '#000' }} className='boxPic'>{item.addr}</Button>
                    )}
                    { /* /самовывоз/ */ }
                  </Grid>
                    : 
                  null
                  :
                this.state.clientAddr.length > 0 ? 
                  <List component="nav" aria-label="main mailbox folders" style={{ maxHeight: 106, overflow: 'auto', marginLeft: -13 }}>
                    { /* мой адрес */ }
                    { this.state.clientAddr.map( (item, key) =>
                      <ListItem button key={key} selected={this.state.chooseAddr === key} onClick={this.chooseAddr.bind(this, key, item)} style={{ paddingTop: 0, paddingBottom: 0 }}>
                        <ListItemText primary={ 
                          item.street + ' ' + 
                          item.home + 
                          ( item.pd.length == 0 ? '' : ', Пд. '+item.pd )+
                          ( item.et.length == 0 ? '' : ', Эт. '+item.et )+
                          ( item.kv.length == 0 ? '' : ', Кв. '+item.kv )
                        } />
                      </ListItem>
                    ) }
                    { /* /мой адрес/ */ }
                  </List>
                    : 
                  null
          }
          
          { (this.state.activeTab == 0 || this.state.activeTab == 2) && this.state.all_addr.length > 0 ?
            <Grid container spacing={3} style={{ marginTop: 12 }}>
              <div className='addrComment'>
                <TextField 
                  label="Комментарий курьеру" 
                  variant="outlined" 
                  multiline
                  maxRows={2}
                  
                  value={ this.state.comment }
                  onChange={ this.changeData.bind(this, 'comment') }
                  //onBlur={ this.saveData.bind(this) }
                />
                <TextField 
                  label="Сдача" 
                  variant="outlined" 
                  value={ this.state.sdacha }
                  onChange={ this.changeData.bind(this, 'sdacha') }
                  //onBlur={ this.saveData.bind(this, 'sdacha') }
                />
              </div>
            </Grid>
              :
            null
          }
          
          
          { this.state.date_pred.length > 0 ? 
            <>
              { /* время заказа */ }
              <Grid container spacing={3} className='container'>
                <Tabs
                  value={this.state.typeTime}
                  onChange={this.changeTypeTime}
                  style={{ marginTop: 15, width: '100%', marginBottom: 10 }}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                >
                  <Tab label="По текущему" />
                  <Tab label="Ко времени" />
                </Tabs>
              </Grid>
                
              { this.state.typeTime == 0 ?
                <Grid container spacing={3} className='container'>
                  <Typography component="span" style={{ padding: '8px 0px', fontSize: '1rem' }}>{this.state.textAvgTime}</Typography>
                </Grid>
                  :
                <Grid container spacing={3} className='container'>
                  <div className='formPred'>
                    <FormControl variant="outlined" className='formControl'>
                      <InputLabel>Дата</InputLabel>
                      <Select
                        value={this.state.date}
                        onChange={ this.changeData.bind(this, 'date') }
                        label="Дата"
                      >
                        {this.state.date_pred.map( (item, key) =>
                          <MenuItem key={key} value={item.date}>{item.text}</MenuItem>
                        )}
                      </Select>
                    </FormControl>
                    <FormControl variant="outlined" className='formControl'>
                      <InputLabel>Время</InputLabel>
                      <Select
                        value={this.state.time}
                        onChange={ this.changeData.bind(this, 'time') }
                        label="Время"
                      >
                        {this.state.timePred.map( (item, key) =>
                          <MenuItem key={key} value={item.value}>{item.text}</MenuItem>
                        )}
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
              }
              { /* /время заказа/ */ }
            </>
              : 
            null }
          
          
          
          <Grid container spacing={3} className='container'>
            <form className='blockTotalOrder' noValidate autoComplete="off" style={{ width: '100%', marginRight: 8, marginTop: 3 }}>
              
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" component="span" style={{ fontSize: '0.8rem', color: '#bababa' }}>Доставка: {this.state.sumDiv} р</Typography>
                <Typography variant="h6" component="span">К оплате: { parseInt(this.state.AllPrice) + parseInt(this.state.sumDiv) } р</Typography>
              </div>
              
              <Button variant="contained" color="primary" onClick={this.startOrderNext.bind(this)}>Оформить заказ</Button>
              
            </form>
          </Grid>
          
        </Grid>
        <Grid item xs={12} style={{ padding: '16px 0px 0px 0px' }}>
          { /* все позиции */ }
          {this.state.cats.length > 0 && this.state.allItems.length > 0 ?
            <>
              <Autocomplete
                freeSolo
                size="small"
                //id="newAddrStreet"
                style={{ width: '30%', marginLeft: 16, marginBottom: 8 }}
                //defaultValue={this.state.defValStreet} 
                
                value={this.state.thisItem} 
                onChange={ this.addItemCustom.bind(this) }
                
                //onBlur={this.clearFace.bind(this)}
                options={this.state.allItems.map((option) => option.name)}
                renderInput={(params) => (
                  <TextField {...params} label="Все позиции" margin="normal" variant="outlined" />
                )}
              />
            
              <AppBar position="static">
                <Tabs value={this.state.activeCat} onChange={this.changeCat} aria-label="simple tabs example">
                  { this.state.cats.map((item, key) =>
                    <Tab label={item.name} style={{ minWidth: 'auto' }} key={key} {...a11yProps(key)} />
                  ) }
                </Tabs>
              </AppBar>
              
              { this.state.cats.map((cat, key) =>
                <TabPanel value={this.state.activeCat} index={key} key={key}>
                  <Grid container spacing={2} className='container' style={{ paddingTop: 0 }}>
                    { cat.items.map( (item, k) =>
                      <Grid key={k} item xs={2}>
                        <Paper className={this.state.classes.paperCat} onClick={ this.addToCart.bind(this, item.id) }>
                          <Grid container direction="column" style={{ height: '100%', justifyContent: 'space-around' }}>
                            <Typography component="span" className={this.state.classes.size1}>{item.name}</Typography>
                            <Typography component="span" className={this.state.classes.size1}>{item.price} р.</Typography>
                            
                            <HtmlTooltip
                              className={this.state.classes.paperCatInfo}
                              placement="top"
                              title={
                                <React.Fragment>
                                  <Typography color="inherit" className={this.state.classes.size1}>{item.tmp_desc}</Typography>
                                  <Typography color="inherit" className={this.state.classes.size1}>{item.info_weight}</Typography>
                                </React.Fragment>
                              }
                            >
                              <InfoIcon />
                            </HtmlTooltip>
                            
                          </Grid>
                        </Paper>
                      </Grid>
                    ) }
                  </Grid>
                </TabPanel>
              )}
            </>
              :
            null
          }
          { /* /все позиции/ */ }
        </Grid>
      
        <Dialog
          open={this.state.errorOpen}
          onClose={() => this.setState({ errorOpen: false })}
          className="DialogErr"
        >
          <Typography variant="h5" component="span" className="orderCheckTitle">{this.state.error.title}</Typography>
          <CloseIcon className="closeDialog" color="inherit" onClick={() => this.setState({ errorOpen: false })} />
          <DialogContent>
            <DialogContentText className="DialogErrText">{this.state.error.text}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <ButtonGroup disableElevation={true} disableRipple={true} variant="contained" className="BtnBorder" onClick={() => this.setState({ errorOpen: false })}>
              <Button variant="contained" className="BtnCardMain CardInCardItem">Хорошо</Button>
            </ButtonGroup>
          </DialogActions>
        </Dialog>
      
        { this.state.orderCheck === true ?
          <Dialog
            open={this.state.orderCheck}
            fullWidth={true}
            onClose={() => this.setState({ orderCheck: false })}
            className="DialogOrderCheckDialog"
          >
            <Typography variant="h5" component="span" className="orderCheckTitle"> {this.state.newOrder.typeOrder} #{this.state.newOrder.order_id} на {this.state.newOrder.point_name}</Typography>
            <CloseIcon className="closeDialog" color="inherit" onClick={() => this.setState({ orderCheck: false })} />
            <DialogContent style={{ display: 'flex', flexDirection: 'column' }}>
              { this.state.newOrder.timePred !== '' ?
                <Typography variant="h5" component="span" className="orderCheckText">Время предзаказа: {this.state.newOrder.timePred}</Typography>
                  :
                <Typography variant="h5" component="span" className="orderCheckText">Время ожидания: {this.state.newOrder.time_wait}</Typography>
              }
              
              { this.state.newOrder.typeOrder == 'Доставка' ?
                <Typography variant="h5" component="span" className="orderCheckText">Доставка: { this.state.newOrder.addr ?
                  //this.state.newOrder.addr.city_name+', '+
                  this.state.newOrder.addr.street+' '+
                  this.state.newOrder.addr.home+
                  ( this.state.newOrder.addr.pd.length == 0 ? '' : ', Пд. '+this.state.newOrder.addr.pd )+
                  ( this.state.newOrder.addr.et.length == 0 ? '' : ', Эт. '+this.state.newOrder.addr.et )+
                  ( this.state.newOrder.addr.kv.length == 0 ? '' : ', Кв. '+this.state.newOrder.addr.kv )
                      :
                  null
                }</Typography>
                  :
                <Typography variant="h5" component="span" className="orderCheckText">Самовывоз: {this.state.newOrder.point_name}</Typography>
              }
              { this.state.newOrder.typeOrder == 'Доставка' ?
                this.state.newOrder.addr && parseInt(this.state.newOrder.addr.dom_true) == 1 ?
                  <Typography variant="h5" component="span" className="orderCheckText">Домофон не работает</Typography>
                    :
                  null
                  :
                null
              }
              
              <Typography variant="h5" component="span" className="orderCheckText">Номер телефона: {this.state.newOrder.number}</Typography>
              
              { this.state.newOrder.promoName ?
                <Typography variant="h5" component="span" className="orderCheckText">Промокод: {this.state.newOrder.promoName}</Typography>
                  :
                null
              }
                  
              { this.state.newOrder.typeOrder == 'Доставка' ?
                this.state.newOrder.comment.length > 0 ?
                  <Typography variant="h5" component="span" className="nameSdacha orderCheckText">Комментарий: {this.state.newOrder.comment}</Typography>
                    :
                  null
                  :
                null
              }    
              { this.state.newOrder.typeOrder == 'Доставка' ?
                this.state.newOrder.sdacha.length > 0 ?
                  <Typography variant="h5" component="span" className="nameSdacha orderCheckText">Сдача с: {this.state.newOrder.sdacha}р</Typography>
                    :
                  null
                  :
                null
              }
                  
              { this.state.newOrder.typeOrder == 'Доставка' ?
                null
                  :
                this.state.newOrder.dop_text.length > 0 ?
                  <Typography variant="h5" component="span" style={{ fontWeight: 'bold' }} className="nameSdacha orderCheckText">{this.state.newOrder.dop_text}</Typography>
                    :
                  null
              }     
                  
              <table className="tableOrderCheck">
                <tbody>
                  { this.state.newOrder.cart.map( (item, key) =>
                    parseInt(item.count) > 0 ?
                      <tr key={key}>
                        <td style={{ width: '60%' }}>
                          <Typography variant="h5" component="span" className="orderCheckText">{item.name}</Typography>
                        </td>
                        <td>
                          <Typography variant="h5" component="span" className="orderCheckText">{item.count}</Typography>
                        </td>
                        <td>
                          <Typography variant="h5" component="span" className="namePrice orderCheckText">{ item.new_full_price ? item.new_full_price : item.full_price} р</Typography>
                        </td>
                      </tr>
                        :
                      null
                  ) }
                  
                  { this.state.newOrder.typeOrder == 'Доставка' ?
                    <tr>
                      <td style={{ width: '60%' }}>
                        <Typography variant="h5" component="span" className="orderCheckText">Доставка</Typography>
                      </td>
                      <td>
                        <Typography variant="h5" component="span" className="orderCheckText">1</Typography>
                      </td>
                      <td>
                        <Typography variant="h5" component="span" className="namePrice orderCheckText">{itemsStore.getSumDiv()} р</Typography>
                      </td>
                    </tr>
                      :
                    null
                  }
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="2">
                      <Typography variant="h5" component="span" className="orderCheckText bold">Сумма заказа</Typography>
                    </td>
                    <td>
                      <Typography variant="h5" component="span" className="namePrice orderCheckText">{ parseInt(this.state.AllPrice) + parseInt(this.state.sumDiv) } р</Typography>
                    </td>
                  </tr>
                </tfoot>
              </table>
              </DialogContent>
              <DialogActions style={{ padding: '12px 24px', paddingBottom: 24 }}>
                <ButtonGroup disableElevation={true} disableRipple={true} variant="contained" className="BtnBorder" style={{ width: '100%' }} onClick={ this.trueOrder.bind(this) }>
                  <Button variant="contained" style={{ width: '100%' }} className="BtnCardMain CardInCardItem">Подтвердить заказ</Button>
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

export function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CreateOrder2 classes={classes} />
    </div>
  );
}