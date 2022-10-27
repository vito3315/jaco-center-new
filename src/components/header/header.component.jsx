import * as React from "react"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { NavLink as Link } from 'react-router-dom';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import itemsStore from '../../stores/items-store';
import { autorun } from "mobx"

export class Header extends React.Component{

  constructor(props) {
    super(props);
    
    this.state = {
      cityList: this.props.cityList,
      city: itemsStore.getCity(),
      page: '',
      
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
      
      thisDateTimeDel: null
    };
  }

  componentDidMount = () => {
    this._isMounted = true;
    
    if((window.location.protocol == 'http:' || window.location.protocol == 'http') && window.location.hostname != 'localhost'){
      window.location.href = 'https://jacocallcenter.ru/'+window.location.pathname;
    }

    autorun(() => {
      if( this._isMounted ){
        this.setState({
          page: itemsStore.getPage()
        })
      }
    })
  }

  toggleDrawer2(anchor, open){
    this.setState({
      [anchor]: open
    })
  };

  logOut(){

  }

  render(){

    if( this.state.page == 'auth' ){
      return null;
    }

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: '#fff' }}>
          <Toolbar >
            <IconButton
              size="large"
              edge="start"
              //color="#000"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={this.toggleDrawer2.bind(this, 'left', true)}
            >
              <MenuIcon />
            </IconButton>

            

          </Toolbar>
        </AppBar>


        <Drawer anchor={'left'} open={this.state.left} onClose={this.toggleDrawer2.bind(this, 'left', false)}>
          <div role="presentation">
            <Link
              to={ '/' }
              style={{ textDecoration: 'none' }}
              onClick={this.toggleDrawer2.bind(this, 'left', false)}
            >
              <ListItem button style={{ color: '#000' }}>
                <Typography variant="body1">Оформить заказ</Typography>
              </ListItem>
            </Link>
            <Link
              to={ '/orders' }
              style={{ textDecoration: 'none' }}
              onClick={this.toggleDrawer2.bind(this, 'left', false)}
            >
              <ListItem button style={{ color: '#000' }}>
                <Typography variant="body1">Список заказов</Typography>
              </ListItem>
            </Link>
            <Link
              to={ '/ordercook' }
              style={{ textDecoration: 'none' }}
              onClick={this.toggleDrawer2.bind(this, 'left', false)}
            >
              <ListItem button style={{ color: '#000' }}>
                <Typography variant="body1">Заказы на кухне</Typography>
              </ListItem>
            </Link>

            <Link
              to={ '/check_user_promo' }
              style={{ textDecoration: 'none' }}
              onClick={this.toggleDrawer2.bind(this, 'left', false)}
            >
              <ListItem button style={{ color: '#000' }}>
                <Typography variant="body1">Проверка промокода клиента</Typography>
              </ListItem>
            </Link>

            <Link
              to={ '/map' }
              style={{ textDecoration: 'none' }}
              onClick={this.toggleDrawer2.bind(this, 'left', false)}
            >
              <ListItem button style={{ color: '#000' }}>
                <Typography variant="body1">Карта</Typography>
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

      </Box>
    );
  }
}