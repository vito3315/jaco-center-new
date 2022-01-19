import * as React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import {Helmet} from "react-helmet";

import TextField from '@material-ui/core/TextField';

import itemsStore from '../../stores/items-store';
import config from '../../stores/config';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import CachedIcon from '@material-ui/icons/Cached';

const queryString = require('query-string');

import { Header } from '../header';

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

class CheckUserPromo_ extends React.Component {
  interval = null;
  
  constructor(props) {
    super(props);
        
    this.state = {
      classes: this.props.classes,
      cityList: [],
      spiner: false,
      
      number: '',
      promos: []
    };
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
  
  componentWillUnmount(){
    clearInterval(this.interval)
  }

  componentDidMount = () => {
    
    this.interval = setInterval(() => this.checkLogin(), 1000*60*60);
    this.checkLogin();
    
    document.title = "Проверка промокода клиента";

    fetch(config.urlApi, {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'},
      body: queryString.stringify({
        type: 'get_cat_center', 
        city_id: 1
      })
    }).then(res => res.json()).then(json => {
      this.setState({
        cityList: json.city_list,
      })
    }).catch(err => { });
  }
    
  changeNumber(event){
    this.setState({ number: event.target.value })
  }

  getPromoList(){
    this.setState({
      spiner: true
    })

    fetch(config.urlApi, {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'},
      body: queryString.stringify({
        type: 'check_user_promo', 
        number: this.state.number
      })
    }).then(res => res.json()).then(json => {
      console.log( json )

      setTimeout( () => {
        this.setState({
          promos: json,
          spiner: false
        })
      }, 300 )

    }).catch(err => { });
  }
  
  render() {
    return (
      <Grid container spacing={0}>
        
        <Helmet>
          <title>Проверка промокода клиента</title>
        </Helmet>
        
        <Backdrop open={this.state.spiner} style={{ zIndex: 99, color: '#fff' }}>
          <CircularProgress color="inherit" />
        </Backdrop>
        
        <Grid item xs={12}>
          { this.state.cityList.length > 0 ? <Header classes={this.state.classes} cityList={this.state.cityList} page="statOrder" /> : null }
        </Grid>

        
        
        <Grid container spacing={0} direction="row" justifyContent="center" alignItems="flex-end">
          <Grid item xs={2}>
            <TextField 
              label="Номер телефона" 
              //variant="inlined" 
              style={{ margin: '16px 8px 8px 8px', flex: 1 }}
              value={ this.state.number }
              onChange={ this.changeNumber.bind(this) }
            />

          </Grid>

          <Grid item xs={2}>
            <Button variant="contained" color="primary" className="btnClear" style={{ padding: '2px 6px', minWidth: 30 }} onClick={this.getPromoList.bind(this)}>
              <CachedIcon />
            </Button>
          </Grid>
        </Grid>
        
        <Grid item xs={12}>
          
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
        
        
        
      </Grid>
    )
  }
}

export function CheckUserPromo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CheckUserPromo_ classes={classes} />
    </div>
  );
}