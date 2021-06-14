import React from 'react';
import { NavLink as Link, Switch, Route, Redirect } from 'react-router-dom';

import { Home } from '../home';

import { Header } from '../header';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

const queryString = require('query-string');

import { Provider } from 'mobx-react';
import itemsStore from '../../stores/items-store';
const stores = { itemsStore };

import { autorun } from "mobx"


function Status({ code, children }) {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) staticContext.status = code;
        return children;
      }}
    />
  );
}

export function NotFound() {
  return (
    <Status code={404}>
        <Grid container className="Contact mainContainer MuiGrid-spacing-xs-3" style={{ marginTop: 64 }}>
            <Grid item xs={12}>
                <Typography variant="h5" component="h1">404 Страница не найдена</Typography>
            </Grid>
            
        </Grid>
    </Status>
  );
}

export class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {      
            categoryItems: [],  
            cartItems: [],
            activePage: '',
            is_load: false,
            openCity: false,
            cityName: '',
            testData: [1, 2, 3, 4, 5, 6, 7, 8, 9],
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
        /*autorun(() => {
            this.setState({
                activePage: itemsStore.getPage()
            })
            
            this.setState({
                cityName: itemsStore.getCity()
            })
        })*/
    }

    
    render() {
        //{!itemsStore.getToken() && this.state.cityName ? <Redirect push to={"/"+this.state.cityName+"/"} /> : <Profile />}
        return (
            <Provider { ...stores }>
                
                               
                    <Header />        
                    
                    <Switch>
                        <Route
                            path='/'
                            exact={ true }
                            component={ Home }
                        />
                        <Route
                            component={ NotFound }
                        />
                    </Switch>
                    
                
                    
                    
                    
                
            </Provider>
        );
    }
}