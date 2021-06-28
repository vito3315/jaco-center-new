import React from 'react';
import { NavLink as Link, Switch, Route, Redirect } from 'react-router-dom';

import { Home } from '../home';
import { Orders } from '../orders';
import { ordercook } from '../ordercook';
import { Auth } from '../auth';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';

import { Provider } from 'mobx-react';
import itemsStore from '../../stores/items-store';
const stores = { itemsStore };

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
            
        };
    }

    componentDidMount = () => {
        
    }

    render() {
        
        return (
            <Provider { ...stores }>
                <Switch>
                    <Route
                        path='/'
                        exact={ true }
                        component={ Home }
                    />
                    <Route
                        path='/orders'
                        exact={ true }
                        component={ Orders }
                    />
                    <Route
                        path='/ordercook'
                        exact={ true }
                        component={ ordercook }
                    />
                    <Route
                        path='/auth'
                        exact={ true }
                        component={ Auth }
                    />
                    <Route
                        component={ NotFound }
                    />
                </Switch>
            </Provider>
        );
        
    }
}