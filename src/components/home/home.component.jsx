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



import InputMask from "react-input-mask";

const queryString = require('query-string');

let globalData = {
  typeOrder: 0,
  //typeTime: 0,
  orderPic: 0,
  addr: {},
  time: {}
}

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

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

class BlockItems extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      classes: this.props.classes,
      activeCat: 0,
      cats: this.props.cats,
    };
  }
  
  changeCat = (event, newValue) => {
    this.setState({
      activeCat: newValue
    })
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return (
      true
      //(parseInt(this.state.cats[0].items[0].price) !== parseInt(nextState.cats[0].items[0].price) && (nextState.cats.length != 0 && this.state.cats.length != 0) )
    );
  }
  
  componentDidMount(){
    autorun(() => {
      let cat = itemsStore.getAllItemsCat();
      itemsStore.getCity()
      
      console.log( cat )
      
      this.setState({
        cats: cat
      })
    })
  }
  
  addToCart(item_id){
    itemsStore.AddItem(item_id);
  }
  
  render(){
    return (
      <>
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
                            <picture>
                              <source 
                                srcSet={"https://storage.yandexcloud.net/site-img/"+item.img_new+"300х200.webp?"+item.img_new_update} 
                                type="image/webp" 
                              />
                              <img 
                                src={"https://storage.yandexcloud.net/site-img/"+item.img_new+"300х200.jpg?"+item.img_new_update} 
                                alt={item.name}
                                title={item.name}
                                style={{ height: 150, width: 'auto' }}
                              />
                            </picture>
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
    )
  }
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
      if( this._isMounted === true ){
        let my_cart = itemsStore.getItems();
        
        let this_item = my_cart.find( (item) => item.item_id == this.state.item.item_id );
        
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
        <TableCell>{this.state.item.all_price}</TableCell>
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

class BlockTable extends React.Component {
  _isMounted = false;
  
  constructor(props) {
    super(props);
    
    this.state = {
      classes: this.props.classes,
      items: [],
      main_items: [],
      dop_items: [],
      promo_items: []
    };
  }
  
  /*shouldComponentUpdate(nextProps, nextState) {
    return (
      (this.state.cats.length !== nextState.cats.length && nextState.cats.length != 0) ||
      this.state.activeCat !== nextState.activeCat
    );
  }*/
  
  componentDidMount(){
    this._isMounted = true;
    
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
    
    autorun(() => {
      if( this._isMounted === true ){
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
      <Paper style={{ widows: '100%' }}>
        <TableContainer style={{ maxHeight: 300 }}>
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
    )
  }
}

class BlockAddrCustom extends React.Component {
  _isMounted = false;
  
  constructor(props) {
    super(props);
    
    this.state = {
      classes: this.props.classes,
      all_addr: this.props.all_addr,
      
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
      comment: '',
      sdacha: ''
    };
  }
  
  /*shouldComponentUpdate(nextProps, nextState) {
    return (
      (this.state.all_addr.length !== nextState.all_addr.length && nextState.all_addr.length != 0)
    );
  }*/
  
  checkNewAddr(){
    let street = document.querySelector('#newAddrStreet').value;
    
    if( street.length > 0 && this.state.newAddrHome.length > 0 ){
      fetch('https://jacofood.ru/src/php/test_app.php', {
        method: 'POST',
        headers: {
          'Content-Type':'application/x-www-form-urlencoded'},
        body: queryString.stringify({
          type: 'save_new_addr',  
          city_id: itemsStore.getCity(),
          street: street,
          home: this.state.newAddrHome,
          user_id: -1
        })
      }).then(res => res.json()).then(json => {
        if( !json.st ){
            
        }else{
          this.setState({
            newAddrInfo: json.res
          })
          
          let allPrice = itemsStore.getAllPrice();
    
          if( parseInt(json.res ? json.res.free_drive : 0) == 1 ){
              if( parseInt(allPrice) > 0 ){
                  itemsStore.setSumDiv(0);
              }else{
                  itemsStore.setSumDiv(1);
              }
          }else{
              itemsStore.setSumDiv(parseInt(json.res ? json.res.sum_div : 0));
          }
          
          this.saveData();
        }
      });
    }
  }
  
  changeDomTrue(type){
    this.setState({
      newAddrDom: type
    })
    this.changeData('domTrue', {target: {value: type}})
  }
  
  changeData(type, data){
    let value = data.target.value;
    
    this.setState({ [type]: value });
    
    this.saveData();
  }
  
  componentWillUnmount(){
    this._isMounted = false;
  }
  
  componentDidMount(){
    this._isMounted = true;
    
    autorun(() => {
      if( this._isMounted ){
        let cartData = itemsStore.getCartData();
      
        let test = itemsStore.cart_data;
        
        if( cartData.orderType || cartData.orderType == 0 ){
          this.setState({
            newAddrStreet: cartData.orderAddr && cartData.orderAddr.street ? cartData.orderAddr.street : '',
            newAddrHome: cartData.orderAddr && cartData.orderAddr.home ? cartData.orderAddr.home : '',
            pd: cartData.orderAddr && cartData.orderAddr.pd ? cartData.orderAddr.pd : '',
            et: cartData.orderAddr && cartData.orderAddr.et ? cartData.orderAddr.et : '',
            kv: cartData.orderAddr && cartData.orderAddr.kv ? cartData.orderAddr.kv : '',
            newAddrDom: cartData.orderAddr && parseInt(cartData.orderAddr.fake_dom) == 1 ? false : true,
          })
          
          let allPrice = itemsStore.getAllPrice();
            
          if( parseInt(cartData.orderAddr ? cartData.orderAddr.free_drive : 0) == 1 ){
            if( parseInt(allPrice) > 0 ){
                itemsStore.setSumDiv(0);
            }else{
              itemsStore.setSumDiv(1);
            }
          }else{
            itemsStore.setSumDiv(parseInt(cartData.orderAddr ? cartData.orderAddr.sum_div : 0));
          }
        }else{
          this.setState({
            newAddrStreet: '',
            newAddrHome: '',
            pd: '',
            et: '',
            kv: '',
            newAddrDom: true,
          })
          
          itemsStore.setSumDiv(0);
        }
      }
    })
    
    let cartData = itemsStore.getCartData();
    
    if( cartData.orderType || cartData.orderType == 0 ){
      this.setState({
        //newAddrStreet: cartData.orderAddr.street,
        //newAddrHome: cartData.orderAddr.home,
        //pd: cartData.orderAddr.pd,
        //et: cartData.orderAddr.et,
        //kv: cartData.orderAddr.kv,
        //newAddrDom: parseInt(cartData.orderAddr.fake_dom) == 0 ? true : false,
      })
      
      let allPrice = itemsStore.getAllPrice();
        
      if( parseInt(cartData.orderAddr ? cartData.orderAddr.free_drive : 0) == 1 ){
        if( parseInt(allPrice) > 0 ){
            itemsStore.setSumDiv(0);
        }else{
          itemsStore.setSumDiv(1);
        }
      }else{
        itemsStore.setSumDiv(parseInt(cartData.orderAddr ? cartData.orderAddr.sum_div : 0));
      }
    }
  }
  
  saveData(){
    let cartData = itemsStore.getCartData();
    
    setTimeout(()=>{
        let data = {
            orderType: 0,
            orderAddr: {
              id: -1,
              //city_name: itemsStore.getCityRU(),
              street: this.state.newAddrInfo ? this.state.newAddrInfo.street : '',
              home: this.state.newAddrInfo ? this.state.newAddrInfo.home : '',
              kv: this.state.kv,
              pd: this.state.pd,
              et: this.state.et,
              dom_true: this.state.newAddrDom ? 0 : 1,
              free_drive: this.state.newAddrInfo ? this.state.newAddrInfo.free_drive : 0,
              sum_div: this.state.newAddrInfo ? this.state.newAddrInfo.sum_div : 0,
              point_id: this.state.newAddrInfo ? this.state.newAddrInfo.point_id : 0,
              xy: this.state.newAddrInfo ? this.state.newAddrInfo.xy : '',
              pay_active: this.state.newAddrInfo ? this.state.newAddrInfo.pay_active : 0,
            },
            orderPic: cartData && cartData.orderPic ? cartData.orderPic : 0,
            orderComment: cartData && cartData.orderComment ? cartData.orderComment : '',
            
            orderTimes: cartData && cartData.orderTimes ? cartData.orderTimes : '0',
            orderPredDay: cartData && cartData.orderPredDay ? cartData.orderPredDay : '',
            orderPredTime: cartData && cartData.orderPredTime ? cartData.orderPredTime : '',
            
            orderPay: cartData && cartData.orderPay ? cartData.orderPay : '0',
            orderSdacha: cartData && cartData.orderSdacha ? cartData.orderSdacha : '',
            
        };
        
        itemsStore.saveCartData(data);
    }, 500)
  }
  
  render(){
    return (
      <Grid container spacing={3}>
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
            onChange={ this.changeData.bind(this, 'pd') }
            onBlur={ this.changeData.bind(this, 'pd') }
          />
          <TextField 
            label="Этаж" 
            variant="outlined" 
            style={{ marginRight: 4, marginLeft: 4}}
            value={ this.state.et }
            onBlur={ this.changeData.bind(this, 'et') }
            onChange={ this.changeData.bind(this, 'et') }
          />
          <TextField 
            label="Квартира" 
            variant="outlined" 
            style={{ marginRight: 8, marginLeft: 4}}
            value={ this.state.kv }
            onBlur={ this.changeData.bind(this, 'kv') }
            onChange={ this.changeData.bind(this, 'kv') }
          />  
        </div>
        <div style={{ width: '100%', marginRight: 8 }}>
          <ButtonGroup disableElevation variant="contained" className='chooseDomTrue'>
            <Button className={ this.state.newAddrDom === true ? 'active' : '' } onClick={ this.changeDomTrue.bind(this, true) }>Домофон работает</Button>
            <Button className={ this.state.newAddrDom === false ? 'active' : '' } onClick={ this.changeDomTrue.bind(this, false) }>Домофон не работает</Button>
          </ButtonGroup>
        </div>
        
      </Grid>
    )
  }
}

class BlockAddrMy extends React.Component {
  _isMounted = false;
  
  constructor(props) {
    super(props);
    
    this.state = {
      classes: this.props.classes,
      clientAddr: this.props.clientAddr,
      
      chooseAddr: -1
    };
  }
  
  /*shouldComponentUpdate(nextProps, nextState) {
    return (
      (this.state.all_addr.length !== nextState.all_addr.length && nextState.all_addr.length != 0)
    );
  }*/
  
  chooseAddr(key, item, event){
    let allPrice = itemsStore.getAllPrice();
        
    if( parseInt(item ? item.free_drive : 0) == 1 ){
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
        chooseAddr: key
      })
      
      let cartData = itemsStore.getCartData();
      
      if( cartData.orderType || cartData.orderType == 0 ){
          
        let data = {
          orderType: 0,
          
          type: 'client',
          
          orderAddr: item,
          
          orderPic: cartData.orderPic,
          orderComment: cartData.orderComment,
          
          orderTimes: cartData.orderTimes,
          orderPredDay: cartData.orderPredDay,
          orderPredTime: cartData.orderPredTime,
          
          orderPay: cartData.orderPay,
          orderSdacha: cartData.orderSdacha,
          
        };
      
        itemsStore.saveCartData(data);
        
      }else{
        let data = {
          
          orderType: '0',
          
          type: 'client',
          
          orderAddr: item,
          
          orderPic: 0,
          orderComment: '',
          
          orderTimes: '1',
          orderPredDay: '',
          orderPredTime: '',
          
          orderPay: '',
          orderSdacha: ''        
        };
      
        itemsStore.saveCartData(data);
      }
    }
    
  }
  
  chooseAddr2(key, item, event){
    
    let allPrice = itemsStore.getAllPrice();
        
    if( parseInt(item ? item.free_drive : 0) == 1 ){
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
        chooseAddr: key
      })
    }
  }
  
  componentWillUnmount(){
    this._isMounted = false;
  }
  
  componentDidMount(){
    this._isMounted = true;
    
    /*let cartData = itemsStore.getCartData();
    
    if( cartData.orderType || cartData.orderType == 0 ){
      setTimeout( () => {
        let keyAddr = this.state.clientAddr.findIndex( (item, key) => item.street == cartData.orderAddr.street && item.home == cartData.orderAddr.home );
          
        this.chooseAddr(keyAddr, cartData.orderAddr)
      }, 500 )
    }*/
    
    autorun(() => {
      if( this._isMounted ){
        let cartData = itemsStore.getCartData();
        let test = itemsStore.cart_data;
        
        if( cartData.orderType || cartData.orderType == 0 ){
          setTimeout( () => {
            let keyAddr = this.state.clientAddr.findIndex( (item, key) => item.street == cartData.orderAddr.street && item.home == cartData.orderAddr.home );
              
            console.log( cartData )
            
            if( keyAddr != this.state.chooseAddr ){
              this.chooseAddr2(keyAddr, cartData.orderAddr)
            }
          }, 500 )
        }
      }
    })
  }
  
  saveData(){
    setTimeout(()=>{
      let data = {
        orderType: this.state.orderType,
        orderAddr: this.state.orderAddr,
        orderPic: this.state.orderPic,
        orderComment: this.state.orderComment,
        
        orderTimes: this.state.orderTimes,
        orderPredDay: this.state.orderPredDay,
        orderPredTime: this.state.orderPredTime,
        
        orderPay: this.state.orderPay,
        orderSdacha: this.state.orderSdacha,
        
      };
      
      itemsStore.saveCartData(data);
    }, 500)
}
  
  render(){
    return (
      <List component="nav" aria-label="main mailbox folders" style={{ maxHeight: 106, overflow: 'auto', marginLeft: -13 }}>
        { this.state.clientAddr.map( (item, key) =>
          <ListItem button key={key} selected={this.state.chooseAddr === key} onClick={this.chooseAddr.bind(this, key, item)} style={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText primary={ 
              item.street + ' ' + 
              item.home + 
              ( parseInt(item.pd) == 0 ? '' : ', Пд. '+item.pd )+
              ( parseInt(item.et) == 0 ? '' : ', Эт. '+item.et )+
              ( parseInt(item.kv) == 0 ? '' : ', Кв. '+item.kv )
            } />
          </ListItem>
        ) }
      </List>
    )
  }
}

class BlockPic extends React.Component {
  _isMounted = false;
  
  constructor(props) {
    super(props);
    
    this.state = {
      classes: this.props.classes,
      pic_point: this.props.pic_point,
      
      orderPic: 0,
      picPointInfo: null,
    };
  }
  
  /*shouldComponentUpdate(nextProps, nextState) {
    return (
      (this.state.cats.length !== nextState.cats.length && nextState.cats.length != 0) ||
      this.state.activeCat !== nextState.activeCat
    );
  }*/
  
  componentWillUnmount(){
    this._isMounted = false;
  }
  
  componentDidMount(){
    this._isMounted = true;
    
    autorun(() => {
      if( this._isMounted ){
        let cartData = itemsStore.getCartData();
        let test = itemsStore.cart_data;
        
        if( cartData.orderType ){
          setTimeout( () => {
            let choosePoint = this.state.pic_point.find( (item) => parseInt(item.id) == parseInt(cartData.orderPic) );
        
            if( choosePoint ){
              this.choosePic(choosePoint)
            }else{
              this.setState({
                orderPic: 0,
                picPointInfo: null
              })
            }
          }, 500 )
        }
      }
    })
    
    let cartData = itemsStore.getCartData();
    
    if( cartData.orderType && cartData.orderType == 1 ){
      setTimeout( () => {
        let choosePoint = this.state.pic_point.find( (item) => parseInt(item.id) == parseInt(cartData.orderPic) );
        
        if( choosePoint ){
          this.choosePic(choosePoint)
        }
      }, 500 )
    }
  }
  
  choosePic(point){
    this.setState({
      orderPic: point.id,
      picPointInfo: point
    })
    
    itemsStore.setSumDiv(0);
    
    this.saveData();
  }
  
  saveData(){
    let cartData = itemsStore.getCartData();
    
    setTimeout(()=>{
      let data = {
        orderType: 1,
        orderAddr: cartData && cartData.orderAddr ? cartData.orderAddr : '',
        
        orderPic: this.state.orderPic,
        orderComment: cartData && cartData.orderComment ? cartData.orderComment : '',
        
        orderTimes: cartData && cartData.orderTimes ? cartData.orderTimes : '0',
        orderPredDay: cartData && cartData.orderPredDay ? cartData.orderPredDay : '',
        orderPredTime: cartData && cartData.orderPredTime ? cartData.orderPredTime : '',
        
        orderPay: cartData && cartData.orderPay ? cartData.orderPay : '0',
        orderSdacha: cartData && cartData.orderSdacha ? cartData.orderSdacha : '',
          
      };
      
      itemsStore.saveCartData(data);
    }, 500)
  }
  
  render(){
    return (
      <Grid container direction="column" justify="space-between" alignItems="stretch" spacing={3} className='container'>
        { this.state.pic_point.map( (item, key) =>
          <Button key={key} onClick={ this.choosePic.bind(this, item) } style={{ backgroundColor: this.state.orderPic == item.id ? '#CC0033' : '#e5e5e5', color: this.state.orderPic == item.id ? '#fff' : '#000' }} className='boxPic'>{item.addr}</Button>
        )}
      </Grid>
    )
  }
}

class BlockPred extends React.Component {
  _isMounted = false;
  _thisEdit = false;
  
  constructor(props) {
    super(props);
    
    this.state = {
      classes: this.props.classes,
      
      textAvgTime: 'Среднее время: ~',
      
      date: '',//дата предзаказа
      time: '',//дата предзаказа
      typeTime: 0,//0 - быстрее / 1 - пред
      
      timePred: [],
      date_pred: this.props.date_pred,
    };
  }
  
  /*shouldComponentUpdate(nextProps, nextState) {
    return (
      (this.state.cats.length !== nextState.cats.length && nextState.cats.length != 0) ||
      this.state.activeCat !== nextState.activeCat
    );
  }*/
  
  componentWillUnmount(){
    this._isMounted = false;
  }
  
  componentDidMount(){
    this._isMounted = true;
    
    autorun(() => {
      let cartData = itemsStore.getCartData();
      let test = itemsStore.cart_data;
      if( this._isMounted ){
        if( !this._thisEdit ){
          this.startData();
        }
      }
    })
    
    this.startData();
  }
  
  changeTypeTime = (event, newValue) => {
    this._thisEdit = true;
    this.changeData('typeTime', {target: {value: newValue}})
    
    this.loadTimeWait();
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
            
            return;
        }
    }
    
    cartItems.forEach(el => {
        my_cart.push({
            item_id: el.item_id,
            count: el.count,
        });
    });
    
    fetch('https://jacofood.ru/src/php/test_app.php', {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'},
      body: queryString.stringify({
        type: 'get_times_pred_web',  
        point_id: cartData.orderType+1 == 1 ? cartData.orderAddr.point_id ?? 0 : cartData.orderPic ?? 0,
        type_order: globalData.typeOrder+1,
        date: cartData.date,
        cart: JSON.stringify( my_cart ),
      })
    }).then(res => res.json()).then(json => {
      
      console.log( json )
      
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
    
    fetch('https://jacofood.ru/src/php/test_app.php', {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'},
      body: queryString.stringify({
        type: 'load_time_wait',  
        point_id: cartData.orderType+1 == 1 ? cartData.orderAddr.point_id ?? 0 : cartData.orderPic ?? 0,
        city_id: itemsStore.getCity(),
      })
    }).then(res => res.json()).then(json => {
      this.setState({
        textAvgTime: json
      })
    });
  }
  
  changeData(type, data){
    this._thisEdit = true;
    
    let value = data.target.value;
    
    this.setState({ [type]: value });
    
    if( type == 'date' ){
      setTimeout(() => {
        this.loadTimePred();   
      }, 300)
    }
    
    this.saveData();
    
    //this._thisEdit = false;
  }
  
  saveData(){
    let cartData = itemsStore.getCartData();
    
    setTimeout(()=>{
      let data = {
        orderType: cartData && cartData.orderType ? cartData.orderType : '0',
        orderAddr: cartData && cartData.orderAddr ? cartData.orderAddr : '',
        
        orderPic: cartData && cartData.orderPic ? cartData.orderPic : '0',
        orderComment: cartData && cartData.orderComment ? cartData.orderComment : '',
        
        orderTimes: this.state.typeTime,
        orderPredDay: this.state.date,
        orderPredTime: this.state.time,
        
        orderPay: cartData && cartData.orderPay ? cartData.orderPay : '0',
        orderSdacha: cartData && cartData.orderSdacha ? cartData.orderSdacha : '',
          
      };
      
      itemsStore.saveCartData(data);
    }, 500)
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
              
              console.log( 'check_time', check )
              
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
  
  render(){
    return (
      <>
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
      </>
    )
  }
}

class CreateOrder extends React.Component {
  _isMounted = false;
  clickOrderStart = false;
  
  startOrderInterval = 90;
  startOrderIntervalTimer = null;
  
  constructor(props) {
    super(props);
    
    this.state = {
      classes: this.props.classes,
      
      newOrder: null,
      
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
    };
  }
  
  componentWillUnmount(){
    this._isMounted = false;
  }
  
  componentDidMount = () => {
    this._isMounted = true;
    
    let cartData = itemsStore.getCartData();
    
    let city = localStorage.getItem('cityID');
    
    //let thisCity = itemsStore.getCity();
    
    if( city ){
      itemsStore.setCity(city);
      
      this.setState({
        cityID: city
      })
      
    }else{
      itemsStore.setCity(1);
      
      this.setState({
        cityID: 1
      })
    }
    
    fetch('https://jacofood.ru/src/php/test_app.php', {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'},
      body: queryString.stringify({
        type: 'get_cat', 
        city_id: itemsStore.getCity()
      })
    }).then(res => res.json()).then(json => {
      this.setState({
        cats: json.arr,
        cityList: json.city_list,
      })
      itemsStore.setAllItemsCat(json.arr);
      itemsStore.setAllItems(json.all_items);
    })
    .catch(err => { });
    
    fetch('https://jacofood.ru/src/php/test_app.php', {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'},
      body: queryString.stringify({
        type: 'get_by_mi', 
        city_id: itemsStore.getCity(),
        user_id: 0
      })
    }).then(res => res.json()).then(json => {
      this.setState({
          pic_point: json.get_addr_pic.points,
          all_addr: json.get_addr,
          date_pred: json.date_pred
      })
    });
    
    autorun(() => {
      if( this._isMounted ){
        
        let thisCity = itemsStore.getCity();
        let cartData = itemsStore.getCartData();
        let test = itemsStore.cart_data;
        
        if( parseInt(thisCity) != parseInt(this.state.cityID) ){
          
          this.setState({
            cityID: thisCity
          })
          
          fetch('https://jacofood.ru/src/php/test_app.php', {
            method: 'POST',
            headers: {
              'Content-Type':'application/x-www-form-urlencoded'},
            body: queryString.stringify({
              type: 'get_cat', 
              city_id: thisCity
            })
          }).then(res => res.json()).then(json => {
            this.setState({
              cats: json.arr,
              cityList: json.city_list,
            })
            
            console.log( 'update', json.arr )
            
            itemsStore.setAllItemsCat(json.arr);
            itemsStore.setAllItems(json.all_items);
          })
          .catch(err => { });
          
          fetch('https://jacofood.ru/src/php/test_app.php', {
            method: 'POST',
            headers: {
              'Content-Type':'application/x-www-form-urlencoded'},
            body: queryString.stringify({
              type: 'get_by_mi', 
              city_id: thisCity,
              user_id: 0
            })
          }).then(res => res.json()).then(json => {
            this.setState({
                pic_point: json.get_addr_pic.points,
                all_addr: json.get_addr,
                date_pred: json.date_pred
            })
          });
        }
        
        if( parseInt(cartData.orderType) != parseInt(this.state.typeOrder) ){
          this.setState({
            typeOrder: cartData.orderType
          })
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
        
        if( itemsStore.clientNumber != this.state.clientNumber ){
          this.setState({
            clientNumber: itemsStore.clientNumber
          })
          
          setTimeout(() => {
            this.getAddr();  
          }, 300)
        }
        
        let newPrice = itemsStore.getAllPrice();
        let newSumDiv = itemsStore.getSumDiv();
        
        if( parseInt(newPrice) != parseInt(this.state.AllPrice) ){
          this.setState({
            AllPrice: newPrice
          })
        }
        
        if( parseInt(newSumDiv) != parseInt(this.state.sumDiv) ){
          this.setState({
            sumDiv: newSumDiv
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
    
    this.setState({
      activeTab: newValue,
      typeOrder: type
    });
    
    this.saveData();
  }
  
  getAddr(){
    fetch('https://jacofood.ru/src/php/test_app.php', {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'},
      body: queryString.stringify({
        type: 'get_user_addrs',  
        city_id: itemsStore.getCity(),
        login: this.state.clientNumber
      })
    }).then(res => res.json()).then(json => {
      
      console.log( json )
      
      this.setState({
        clientAddr: json
      })
    });
  }
  
  changeData(type, data){
    let value = data.target.value;
    
    this.setState({ [type]: value });
    
    this.saveData();
  }
  
  saveData(){
    let cartData = itemsStore.getCartData();
    
    setTimeout(()=>{
      let data = {
        orderType: this.state.typeOrder,
        orderAddr: cartData && cartData.orderAddr ? cartData.orderAddr : '',
        
        orderPic: cartData && cartData.orderPic ? cartData.orderPic : '0',
        orderComment: this.state.comment,
        
        orderTimes: cartData && cartData.orderTimes ? cartData.orderTimes : '0',
        orderPredDay: cartData && cartData.orderPredDay ? cartData.orderPredDay : '',
        orderPredTime: cartData && cartData.orderPredTime ? cartData.orderPredTime : '',
        
        orderPay: cartData && cartData.orderPay ? cartData.orderPay : '0',
        orderSdacha: this.state.sdacha,
          
      };
      
      itemsStore.saveCartData(data);
    }, 500)
  }
  
  startOrderNext(){
    if( this.clickOrderStart == false ){
      this.clickOrderStart = true;
        
      clearTimeout(this.startOrderIntervalTimer);
      
      let cartData = itemsStore.getCartData();
      
      this.setState({ 
        spiner: true
      })
      
      //let payFull = this.state.renderPay.find( (item) => item.type == this.state.orderPay );
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
        
      console.log( {
        timePred: JSON.stringify( { value: parseInt( cartData.orderTimes ) == 0 ? 0 : cartData.orderPredDay + ' ' + cartData.orderPredTime } ),
          typeOrder: cartData.orderType,
          addrPic: cartData.orderPic,
          comment: cartData.orderComment,
          sdacha: cartData.orderSdacha,
          addrDev: cartData.orderAddr ? JSON.stringify(cartData.orderAddr) : '', 
          //pay: payFull.title, //
          payFull: JSON.stringify({ type: 'cash' }), 
          cart: JSON.stringify(new_cart),
          promo_name: localStorage.getItem('promo_name'),
          number: itemsStore.clientNumber
      } )
      
      fetch('https://jacofood.ru/src/php/test_app.php', {
        method: 'POST',
        headers: {
          'Content-Type':'application/x-www-form-urlencoded'},
        body: queryString.stringify({
          type: 'createOrder', 
          city_id: itemsStore.getCity(),
          user_id: 0,
        
          timePred: JSON.stringify( { value: parseInt( cartData.orderTimes ) == 0 ? 0 : cartData.orderPredDay + ' ' + cartData.orderPredTime } ),
          typeOrder: cartData.orderType,
          addrPic: cartData.orderPic,
          comment: cartData.orderComment,
          sdacha: cartData.orderSdacha,
          addrDev: cartData.orderAddr ? JSON.stringify(cartData.orderAddr) : '', 
          //pay: payFull.title, //
          payFull: JSON.stringify({ type: 'cash' }), 
          cart: JSON.stringify(new_cart),
          promo_name: localStorage.getItem('promo_name'),
          number: itemsStore.clientNumber
        })
      }).then(res => res.json()).then(json => {
          
        console.log( 'start', json )
        
        setTimeout(()=>{
          this.setState({
              spiner: false
          })
          
          this.clickOrderStart = false;
        }, 500)
        
        this.setState({
          newOrder: {
            cart: json.my_cart,
            order_id: json.order_id,
            point_name: json.point_name,
            time_wait: json.time_wait_order,
            typeOrder: parseInt(cartData.orderType) == 0 ? 'Доставка' : 'Самовывоз',
            number: itemsStore.clientNumber,
            comment: parseInt(cartData.orderType) == 0 ? cartData.orderComment : '',
            sdacha: parseInt(cartData.orderType) == 0 ? cartData.orderSdacha : '',
            timePred: parseInt( cartData.orderTimes ) == 0 ? '' : cartData.orderPredDay + ' ' + cartData.orderPredTime,
            addr: parseInt(cartData.orderType) == 0 ? cartData.orderAddr : {},
            promoName: localStorage.getItem('promo_name')
          }
        })
        
        setTimeout( () => {
          this.setState({
            orderCheck: true
          })
          
          console.log( this.state.newOrder )
          
        }, 500 )
        
        console.log( 
          {
            cart: json.my_cart,
            order_id: json.order_id,
            point_name: json.point_name,
            typeOrder: parseInt(cartData.orderType) == 0 ? 'Доставка' : 'Самовывоз',
            number: itemsStore.clientNumber,
            comment: parseInt(cartData.orderType) == 0 ? cartData.orderComment : '',
            sdacha: parseInt(cartData.orderType) == 0 ? cartData.orderSdacha : '',
            timePred: parseInt( cartData.orderTimes ) == 0 ? '' : cartData.orderPredDay + ' ' + cartData.orderPredTime,
            addr: parseInt(cartData.orderType) == 0 ? cartData.orderAddr : {},
            
            
            cartData: cartData
          }
        )
        
        /*setTimeout(()=>{
            this.clickOrderStart = false;    
        }, 300)
        
        setTimeout(()=>{
            this.setState({
                spiner: false
            })
            
            if( json.st ){
                this.setState({
                    orderCheck: true,
                    newOrderData: json
                })
                
                this.startOrderIntervalTimer = setTimeout(()=>{
                    this.setState({
                        orderCheck: false,
                        newOrderData: null
                    })
                }, this.startOrderInterval * 1000)
            }else{
                this.setState({
                    error: {
                        title: 'Предупреждение', 
                        text: json.text_err
                    },
                    errorOpen: true
                })
            }
        }, 1000)*/
      })
    }
  }
  
  render() {
    return (
      <Grid container spacing={0}>
        
        <Backdrop open={this.state.spiner} style={{ zIndex: 99, color: '#fff' }}>
          <CircularProgress color="inherit" />
        </Backdrop>
        
        <Grid item xs={8} style={{ paddingRight: 16 }}>
          { this.state.cityList.length > 0 ? <Header classes={this.state.classes} cityList={this.state.cityList} /> : null }
        </Grid>
        <Grid item xs={8} style={{ padding: '24px 8px 0px 16px' }}>
          <BlockTable classes={this.state.classes} />
        </Grid>
        <Grid item xs={4} style={{ padding: '16px', marginTop: -50 }} className='container'>
          <Tabs
            value={this.state.activeTab}
            onChange={this.changeTab}
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
            this.state.all_addr.length > 0 ? <BlockAddrCustom classes={this.state.classes} all_addr={this.state.all_addr} /> : null
              :
              this.state.activeTab == 1 ?
                this.state.pic_point.length > 0 ? <BlockPic classes={this.state.classes} pic_point={this.state.pic_point} /> : null
                  :
                this.state.clientAddr.length > 0 ? <BlockAddrMy classes={this.state.classes} clientAddr={this.state.clientAddr} /> : null
          }
          
          { (this.state.activeTab == 0 || this.state.activeTab == 2) && this.state.all_addr.length > 0 ?
            <Grid container spacing={3} style={{ marginTop: 12 }}>
              <div className='addrComment'>
                <TextField 
                  label="Комментарий курьеру" 
                  variant="outlined" 
                  multiline
                  rowsMax={2}
                  variant="outlined"
                  value={ this.state.comment }
                  onChange={ this.changeData.bind(this, 'comment') }
                  onBlur={ this.changeData.bind(this, 'comment') }
                />
                <TextField 
                  label="Сдача" 
                  variant="outlined" 
                  value={ this.state.sdacha }
                  onChange={ this.changeData.bind(this, 'sdacha') }
                  onBlur={ this.changeData.bind(this, 'sdacha') }
                />
              </div>
            </Grid>
              :
            null
          }
          
          
          { this.state.date_pred.length > 0 ? <BlockPred classes={this.state.classes} date_pred={this.state.date_pred} /> : null }
          
          
          
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
          {this.state.cats.length > 0 ?
            <BlockItems classes={this.state.classes} cats={this.state.cats} />
              :
            null
          }
        </Grid>
      
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
                  ( parseInt(this.state.newOrder.addr.pd) == 0 ? '' : ', Пд. '+this.state.newOrder.addr.pd )+
                  ( parseInt(this.state.newOrder.addr.et) == 0 ? '' : ', Эт. '+this.state.newOrder.addr.et )+
                  ( parseInt(this.state.newOrder.addr.kv) == 0 ? '' : ', Кв. '+this.state.newOrder.addr.kv )
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
                      <Typography variant="h5" component="span" className="namePrice orderCheckText">{ parseInt(itemsStore.getAllPrice()) + parseInt(itemsStore.getSumDiv()) } р</Typography>
                    </td>
                  </tr>
                </tfoot>
              </table>
              </DialogContent>
              <DialogActions style={{ padding: '12px 24px', paddingBottom: 24 }}>
                <ButtonGroup disableElevation={true} disableRipple={true} variant="contained" className="BtnBorder" style={{ width: '100%' }} onClick={ () => {} }>
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

class Header extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      classes: this.props.classes,
      cityList: this.props.cityList,
      city: itemsStore.getCity(),
      
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
  }
  
  saveNumber(event){
    
    let number = event.target.value;
            
    number = number.split(' ').join('');
    number = number.split('(').join('');
    number = number.split(')').join('');
    number = number.split('-').join('');
    
    number = number.slice(1);
    
    itemsStore.clientNumber = '8' + number;
    localStorage.setItem('clientNumber', '8' + number)
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
  
  render() {
    return (
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
              <Grid item xs={6} style={{ paddingTop: 5, display: 'flex', alignItems: 'baseline' }}>
                <TextField label="Промокод" value={ this.state.promo_name } onChange={ event => this.setState({ promo_name: event.target.value }) } onBlur={this.checkPromo.bind(this)} style={{ marginRight: 4, marginLeft: 4}} />
                
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
                
                <Button variant="contained" color="primary" style={{ padding: '2px 6px', minWidth: 30 }} onClick={ this.clear.bind(this) } >Х</Button>
              </Grid>
              <Grid item xs={3} style={{ paddingTop: 14 }}>
                <InputMask 
                  className="InputMask"
                  mask="8 (999) 999-99-99" 
                  placeholder="8 (999) 999-99-99" 
                  style={{ marginRight: 4, marginLeft: 4}}
                  value={this.state.number} 
                  onChange={ (event) => this.setState({ number: event.target.value }) }
                  onBlur={this.saveNumber.bind(this)}
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
            <List>
              {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
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

export function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CreateOrder classes={classes} />
    </div>
  );
}