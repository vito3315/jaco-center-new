/*import React from 'react';
import { NavLink as Link, useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';

const queryString = require('query-string');
import axios from 'axios';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';

import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import itemsStore from '../../stores/items-store';
import { autorun } from "mobx"
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Hidden from '@material-ui/core/Hidden';

export class Home extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {      
            allItems: [],  
            is_load: true,
            testData: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            openItem: null,
            openModal: false,
            openModalPC: false,
            banners_pc: [],
            banners_mobile: [],
            city_name: props.match.params.cityName,
            page: null,
            title: '',
            description: ''
        };
        
        itemsStore.setCity(props.match.params.cityName);
    }

    componentDidMount = () => {
        
    }

    render() {
        return (
            <h1>Hello World</h1>
        );
    }
}*/



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



import DraftsIcon from '@material-ui/icons/Drafts';

const queryString = require('query-string');

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    flexGrow: 1,
    margin: -8
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
    height: 'calc(100% - 15px)'
  },
  paperCatInfo: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  container: {
    paddingTop: theme.spacing(2),
    '& button.MuiTab-root': {
      padding: '0px 12px',
      minHeight: 'auto'
    },
    '& .MuiTabs-scroller': {
      height: 'fit-content'
    },
    '& .MuiTabs-root': {
      minHeight: 'auto'
    },
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
  mainAddr: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    '& > div > div > div': {
      padding: '0px !important'
    },
    '& > div > div > label': {
      transform: 'translate(14px, 13px) scale(1)'
    },
    '& .MuiOutlinedInput-input': {
      padding: '10px 14px'
    },
    '& .MuiInputLabel-outlined': {
      transform: 'translate(14px, 13px) scale(1)'
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(14px, -6px) scale(0.75)'
    },
  },
  otherAddr: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingBottom: 8,
    '& .MuiOutlinedInput-input': {
      padding: '10px 14px'
    },
    '& .MuiInputLabel-outlined': {
      transform: 'translate(14px, 13px) scale(1)'
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(14px, -6px) scale(0.75)'
    },
    '& .MuiFormControl-root.MuiTextField-root': {
      width: '100%'
    },
  },
  driverInfo: {
    '& input.MuiInputBase-input.MuiInputBase-input.MuiOutlinedInput-input': {
      padding: '7px 14px'
    },
    '& .MuiOutlinedInput-multiline': {
      padding: '7px 14px'
    },
    '& .MuiInputLabel-outlined': {
      transform: 'translate(14px, 9px) scale(1)'
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(14px, -6px) scale(0.75)'
    },
    '& .MuiFormControl-root.MuiTextField-root': {
      width: '100%'
    }
  },
  formPred: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingBottom: 8,
    '& .MuiOutlinedInput-input': {
      padding: '10px 14px'
    },
    '& .MuiInputLabel-outlined': {
      transform: 'translate(14px, 13px) scale(1)'
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(14px, -6px) scale(0.75)'
    },
    '& > div': {
      width: '50%',
      marginLeft: 0
    }
  },
  chooseDomTrue: {
    width: '100%',
    '& button.active': {
      backgroundColor: '#CC0033',
      color: '#fff'
    },
    '& button:not(.active)': {
      backgroundColor: '#fff',
      border: '1px solid #CC0033',
      color: '#CC0033'
    },
    '& button': {
      width: '50%'
    },
    '& span': {
      fontSize: '0.8rem!important',
      width: '100%',
      textTransform: 'none',
      whiteSpace: 'nowrap'
    },
    '& .MuiButtonGroup-groupedContainedHorizontal:not(:last-child)': {
      borderRight: 'none'
    }
  },
  boxPic: {
    backgroundColor: '#e5e5e5',
    padding: '6px 12px',
    marginBottom: 10,
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#CC0033',
        color: '#fff'
    },
    '&.active': {
        backgroundColor: '#CC0033',
        color: '#fff'
    },
    '& span:first-child': {
        textAlign: 'center'
    },
    '& span:last-child': {
        textAlign: 'center'
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  blockTotalOrder: {
    width: '100%',
    marginRight: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  containerHeader: {
    paddingTop: theme.spacing(2),
    justifyContent: 'flex-end',
    '& .MuiOutlinedInput-input': {
      padding: '5px 10px'
    },
    '& .MuiInputLabel-outlined': {
      transform: 'translate(14px, 8px) scale(1)'
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(14px, -6px) scale(0.75)'
    },
  }
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
      (this.state.cats.length !== nextState.cats.length && nextState.cats.length != 0) ||
      this.state.activeCat !== nextState.activeCat
    );
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
            <Grid container spacing={2} className={this.state.classes.container} style={{ paddingTop: 0 }}>
              { cat.items.map( (item, k) =>
                <Grid key={k} item xs={2}>
                  <Paper className={this.state.classes.paperCat}>
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

class BlockTable extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      classes: this.props.classes,
    };
  }
  
  /*shouldComponentUpdate(nextProps, nextState) {
    return (
      (this.state.cats.length !== nextState.cats.length && nextState.cats.length != 0) ||
      this.state.activeCat !== nextState.activeCat
    );
  }*/
  
  render(){
    return (
      <Paper className={this.state.classes.scrollTable}>
        <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={3}>
          <Grid item>Наимнование</Grid>
          <Grid item>Кол-во</Grid>
          <Grid item>Сумма</Grid>
          <Grid item>Х</Grid>
        </Grid>
        
        <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={3}>
          <Grid item>Ролл Жако</Grid>
          <Grid item>+ 5 -</Grid>
          <Grid item>500</Grid>
          <Grid item>Х</Grid>
        </Grid>    
        <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={3}>
          <Grid item>Ролл Жако</Grid>
          <Grid item>+ 5 -</Grid>
          <Grid item>500</Grid>
          <Grid item>Х</Grid>
        </Grid>  
        <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={3}>
          <Grid item>Ролл Жако</Grid>
          <Grid item>+ 5 -</Grid>
          <Grid item>500</Grid>
          <Grid item>Х</Grid>
        </Grid>  
        <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={3}>
          <Grid item>Ролл Жако</Grid>
          <Grid item>+ 5 -</Grid>
          <Grid item>500</Grid>
          <Grid item>Х</Grid>
        </Grid>
        <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={3}>
          <Grid item>Ролл Жако</Grid>
          <Grid item>+ 5 -</Grid>
          <Grid item>500</Grid>
          <Grid item>Х</Grid>
        </Grid>    
        <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={3}>
          <Grid item>Ролл Жако</Grid>
          <Grid item>+ 5 -</Grid>
          <Grid item>500</Grid>
          <Grid item>Х</Grid>
        </Grid>  
        <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={3}>
          <Grid item>Ролл Жако</Grid>
          <Grid item>+ 5 -</Grid>
          <Grid item>500</Grid>
          <Grid item>Х</Grid>
        </Grid>  
        <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={3}>
          <Grid item>Ролл Жако</Grid>
          <Grid item>+ 5 -</Grid>
          <Grid item>500</Grid>
          <Grid item>Х</Grid>
        </Grid>          
        
      </Paper>
    )
  }
}

class BlockAddr extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      classes: this.props.classes,
      all_addr: this.props.all_addr,
      
      newAddrHome: '',
      newAddrPD: '',
      newAddrET: '',
      newAddrKV: '',
      newAddrDom: ''
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
          city_id: 1,
          street: street+' '+this.state.newAddrHome
        })
        }).then(res => res.json()).then(json => {
          console.log( json )
            /*if( !json.st ){
                this.setState({
                    error: {
                        title: 'Предупреждение', 
                        text: json.text
                    },
                    errorOpen: true
                })
            }else{
                if( json.data.home == '' ){
                    this.setState({
                        error: {
                            title: 'Предупреждение', 
                            text: 'Номер дома не указан или указан не верно'
                        },
                        errorOpen: true
                    })
                }else{
                    this.setState({
                        newAddrInfo: json.data
                    })
                    this.saveDataCustomAddr()
                }
            }*/
        });
    }
  }
  
  changeDomTrue(type){
    this.setState({
      newAddrDom: type
    })
  }
  
  render(){
    return (
      <Grid container spacing={3}>
        <div className={this.state.classes.mainAddr}>
          <Autocomplete
            freeSolo
            id="newAddrStreet"
            style={{ flex: 3 }}
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
            value={this.state.newAddrHome} 
            onChange={ event => this.setState({ newAddrHome: event.target.value }) }
            onBlur={this.checkNewAddr.bind(this)}
          />
        </div>
        <div className={this.state.classes.otherAddr}>
          <TextField 
            label="Подъезд" 
            variant="outlined" 
            style={{ marginRight: 4}}
            value={this.state.newAddrPD} 
            onChange={ event => this.setState({ newAddrPD: event.target.value }) }
            //onBlur={this.saveDataCustomAddr.bind(this)}
          />
          <TextField 
            label="Этаж" 
            variant="outlined" 
            style={{ marginRight: 4, marginLeft: 4}}
            value={this.state.newAddrET} 
            onChange={ event => this.setState({ newAddrET: event.target.value }) }
            //onBlur={this.saveDataCustomAddr.bind(this)}
          />
          <TextField 
            label="Квартира" 
            variant="outlined" 
            style={{ marginRight: 8, marginLeft: 4}}
            value={this.state.newAddrKV} 
            onChange={ event => this.setState({ newAddrKV: event.target.value }) }
            //onBlur={this.saveDataCustomAddr.bind(this)}
          />  
        </div>
        <div style={{ width: '100%', marginRight: 8 }}>
          <ButtonGroup disableElevation variant="contained" className={this.state.classes.chooseDomTrue}>
            <Button className={ this.state.newAddrDom === true ? 'active' : '' } onClick={ this.changeDomTrue.bind(this, true) }>Домофон работает</Button>
            <Button className={ this.state.newAddrDom === false ? 'active' : '' } onClick={ this.changeDomTrue.bind(this, false) }>Домофон не работает</Button>
          </ButtonGroup>
        </div>
        <div style={{ width: '100%', marginRight: 8 }}>
          <TextField 
            label="Комментарий курьеру" 
            variant="outlined" 
            //style={{ margin: '16px 8px 8px 8px', flex: 1 }}
            //value={this.state.newAddrHome} 
            //onChange={ event => this.setState({ newAddrHome: event.target.value }) }
            //onBlur={this.checkNewAddr.bind(this)}
          />
          <TextField 
            label="Сдача" 
            variant="outlined" 
            //style={{ margin: '16px 8px 8px 8px', flex: 1 }}
            //value={this.state.newAddrHome} 
            //onChange={ event => this.setState({ newAddrHome: event.target.value }) }
            //onBlur={this.checkNewAddr.bind(this)}
          />
        </div>
      </Grid>
    )
  }
}

class BlockComment extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      classes: this.props.classes,
      
    };
  }
  
  render(){
    return (
      <Grid container spacing={3}>
        <div className={this.state.classes.mainAddr}>
          <TextField 
            label="Комментарий курьеру" 
            variant="outlined" 
            //style={{ margin: '16px 8px 8px 8px', flex: 1 }}
            //value={this.state.newAddrHome} 
            //onChange={ event => this.setState({ newAddrHome: event.target.value }) }
            //onBlur={this.checkNewAddr.bind(this)}
          />
          <TextField 
            label="Сдача" 
            variant="outlined" 
            //style={{ margin: '16px 8px 8px 8px', flex: 1 }}
            //value={this.state.newAddrHome} 
            //onChange={ event => this.setState({ newAddrHome: event.target.value }) }
            //onBlur={this.checkNewAddr.bind(this)}
          />
        </div>
      </Grid>
    )
  }
}

class BlockPic extends React.Component {
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
  
  choosePic(point){
    this.setState({
      orderPic: point.id,
      picPointInfo: point
    })
    
    //this.saveData();
  }
  
  render(){
    return (
      <Grid container direction="column" justify="space-between" alignItems="stretch" spacing={3} className={this.state.classes.container}>
        { this.state.pic_point.map( (item, key) =>
          <Button key={key} onClick={ this.choosePic.bind(this, item) } style={{ backgroundColor: this.state.orderPic == item.id ? '#CC0033' : '#e5e5e5', color: this.state.orderPic == item.id ? '#fff' : '#000' }} className={this.state.classes.boxPic}>{item.addr}</Button>
        )}
      </Grid>
    )
  }
}

class BlockPred extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      classes: this.props.classes,
      
      textAvgTime: 'Среднее время: ~',
      
      orderDate: '',//дата предзаказа
      orderTime: '',//дата предзаказа
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
  
  changeTypeTime = (event, newValue) => {
    this.setState({
      typeTime: newValue
    })
    
    this.loadTimeWait();
  }
  
  changeDate = (event, newValue) => {
    this.setState({
      orderDate: event.target.value
    })
    
    setTimeout(() => {
      this.loadTimePred();   
    }, 300)
  }
  
  changeTime = (event, newValue) => {
    this.setState({
      orderTime: event.target.value
    })
  }
  
  loadTimePred(){
    let my_cart = [];
    //let cartItems = itemsStore.getItems();  
    
    /*if( this.state.orderType+1 == 1 ){
        if( !this.state.orderAddr || !this.state.orderAddr.point_id ){
            this.setState({
                error: {
                    title: 'Предупреждение', 
                    text: 'Адрес доставки или точка самовывоза не выбрана'
                },
                errorOpen: true,
                orderTimes: '1'
            })
            
            return;
        }
    }*/
    
    /*cartItems.forEach(el => {
        my_cart.push({
            item_id: el.item_id,
            count: el.count,
        });
    });*/
    
    fetch('https://jacofood.ru/src/php/test_app.php', {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'},
      body: queryString.stringify({
        type: 'get_times_pred_web',  
        point_id: 1,
        //point_id: this.state.orderType+1 == 1 ? this.state.orderAddr.point_id ?? 0 : this.state.orderPic ?? 0,
        type_order: this.state.typeOrder+1,
        date: this.state.orderDate,
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
    fetch('https://jacofood.ru/src/php/test_app.php', {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'},
      body: queryString.stringify({
        type: 'load_time_wait',  
        point_id: 1,
        city_id: 1,
      })
    }).then(res => res.json()).then(json => {
      console.log( json )  
      this.setState({
        textAvgTime: json
      })
    });
  }
  
  render(){
    return (
      <>
        <Grid container spacing={3} className={this.state.classes.container}>
          <Tabs
            value={this.state.typeTime}
            onChange={this.changeTypeTime}
            style={{ marginTop: 15, width: '100%' }}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="По текущему" />
            <Tab label="Ко времени" />
          </Tabs>
        </Grid>
          
        { this.state.typeTime == 0 ?
          <Grid container spacing={3} className={this.state.classes.container}>
            <Typography component="span" style={{ padding: '8px 0px', fontSize: '1rem' }}>{this.state.textAvgTime}</Typography>
          </Grid>
            :
          <Grid container spacing={3} className={this.state.classes.container}>
            <div className={this.state.classes.formPred}>
              <FormControl variant="outlined" className={this.state.classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Дата</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={this.state.orderDate}
                  onChange={this.changeDate}
                  label="Дата"
                >
                  {this.state.date_pred.map( (item, key) =>
                    <MenuItem key={key} value={item.date}>{item.text}</MenuItem>
                  )}
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={this.state.classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Время</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={this.state.orderTime}
                  onChange={this.changeTime}
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
  constructor(props) {
    super(props);
    
    this.state = {
      classes: this.props.classes,
      
      cats: [],
      
      all_addr: [],
      pic_point: [],
      timePred: [],
      date_pred: [],
      
      orderDate: '',//дата предзаказа
      orderTime: '',//дата предзаказа
      typeOrder: 0,//тип заказа
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
        cats: json.arr
      })
      console.log( json )
    })
    .catch(err => { });
    
    fetch('https://jacofood.ru/src/php/test_app.php', {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'},
      body: queryString.stringify({
        type: 'get_by_mi', 
        city_id: 1,
        user_id: 0
      })
    }).then(res => res.json()).then(json => {
      
      console.log( json )
      
      this.setState({
          pic_point: json.get_addr_pic.points,
          //my_addr: json.get_my_addr,
          all_addr: json.get_addr,
          date_pred: json.date_pred
      })
    });
  }
  
  changeTab = (event, newValue) => {
    this.setState({
      typeOrder: newValue
    })
  }
  
  render() {
    return (
      <Grid container spacing={0}>
        <Grid item xs={8} style={{ paddingRight: 16 }}>
          <Header />
        </Grid>
        <Grid item xs={8} style={{ padding: '24px 8px 0px 16px' }}>
          <BlockTable classes={this.state.classes} />
        </Grid>
        <Grid item xs={4} style={{ padding: '16px', marginTop: -35 }} className={this.state.classes.container}>
          <Tabs
            value={this.state.typeOrder}
            onChange={this.changeTab}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Доставка" />
            <Tab label="Самовывоз" />
            <Tab label="Адрес клиента" />
          </Tabs>
          
          { this.state.typeOrder == 0 ?
            this.state.all_addr.length > 0 ? <BlockAddr classes={this.state.classes} all_addr={this.state.all_addr} /> : null
              :
              this.state.typeOrder == 1 ?
                this.state.pic_point.length > 0 ? <BlockPic classes={this.state.classes} pic_point={this.state.pic_point} /> : null
                  :
                <div>
                  <List component="nav" aria-label="main mailbox folders">
                    <ListItem
                      button
                      //selected={selectedIndex === 2}
                      //onClick={(event) => handleListItemClick(event, 2)}
                    >
                      <ListItemText primary="Льва Яшина 16" />
                    </ListItem>
                    <ListItem
                      button
                      //selected={selectedIndex === 3}
                      //onClick={(event) => handleListItemClick(event, 3)}
                    >
                      <ListItemText primary="Ленинградка 47" />
                    </ListItem>
                    <ListItem
                      button
                      //selected={selectedIndex === 3}
                      //onClick={(event) => handleListItemClick(event, 3)}
                    >
                      <ListItemText primary="Южное шоссе 45" />
                    </ListItem>
                  </List>
                </div>
          }
          
          { this.state.date_pred.length > 0 ? <BlockPred classes={this.state.classes} date_pred={this.state.date_pred} /> : null }
          
          
          
          <Grid container spacing={3} className={this.state.classes.container}>
            <form className={this.state.classes.blockTotalOrder} noValidate autoComplete="off" style={{ width: '100%', marginRight: 8, marginTop: 3 }}>
              
              <Typography variant="h6" component="span">К оплате: 100 р</Typography>
            
              <Button variant="contained" color="primary">Оформить заказ</Button>
              
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
      </Grid>
    )
  }
}

function Header() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const chechAddr = () => (event) => {
    console.log( event.target.value ) 
    
    fetch('https://jacofood.ru/src/php/test_app.php', {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'},
      body: queryString.stringify({
        type: 'get_user_addrs',  
        city_id: 1,
        login: event.target.value
      })
    }).then(res => res.json()).then(json => {
      console.log( json )
        
    });
  }
  
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#fff', color: '#000' }}>
        <Toolbar style={{ minHeight: 48 }}>
          <IconButton edge="start" className={classes.menuButton} onClick={toggleDrawer('left', true)} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Grid container >
            <Grid item xs={6} style={{ paddingTop: 5 }}>
              
            <form className={classes.root} noValidate autoComplete="off">
              <TextField  label="Outlined" variant="outlined" />
            </form>
                <Button variant="contained" color="primary" style={{ padding: '2px 6px', minWidth: 30, marginRight: 8 }}>?</Button>
                <Button variant="contained" color="primary" style={{ padding: '2px 6px', minWidth: 30 }}>Х</Button>
              
            </Grid>
            <Grid item xs={3} style={{ paddingTop: 5 }}>
              
                <TextField 
                  label="Телефон клиента" 
                  variant="outlined" 
                  style={{ marginRight: 4, marginLeft: 4}}
                  //value={this.state.newAddrET} 
                  //onChange={ event => this.setState({ newAddrET: event.target.value }) }
                  //onBlur={chechAddr()}
                />
              
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      
      <form className={classes.root} noValidate autoComplete="off">
        <TextField  label="Outlined" variant="outlined" />
      </form>
      
      <Drawer anchor={'left'} open={state.left} onClose={toggleDrawer('left', false)}>
        <div
          className={clsx(classes.list)}
          role="presentation"
          onClick={toggleDrawer('left', false)}
          onKeyDown={toggleDrawer('left', false)}
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
  );
}

export function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CreateOrder classes={classes} />
    </div>
  );
}