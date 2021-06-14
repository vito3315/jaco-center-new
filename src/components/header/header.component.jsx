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


const queryString = require('query-string');

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputMask from "react-input-mask";
import Badge from '@material-ui/core/Badge';
import itemsStore from '../../stores/items-store';

import { autorun } from "mobx"

export class Header extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {      
            categoryItems: [],  
            cartItems: [],
            activePage: '',
            is_load: false,
            openCity: false,
            cityName: '',
            testData: [1, 2, 3, 4, 5, 6, 7],
            cityList: [],
            
            openLogin: false,
            userLogin: '',
            userLoginFormat: '',
            userCode: '',
            
            stage_1: true,
            stage_2: false,
            
            timerSMS: 59,
            errPhone: '',
            errSMS: '',
            userName: '',
            
            soc_link: null
        };
    }
    
    componentDidMount = () => {
        
        
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}