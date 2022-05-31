import React from 'react';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { NavLink as Link, Switch, Route, Redirect } from 'react-router-dom';

import { Home } from '../home';
import { Orders } from '../orders';
import { OrderCook } from '../ordercook';
import { Auth } from '../auth';
import { CheckUserPromo } from '../check_user_promo';
import { Header } from '../header';

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

const theme = createTheme({
    palette: {
      primary: {
        main: '#c03',
      },
      def: {
        main: '#353b48',
        secondary: '#fff'
      },
      secondary: {
        main: '#6ab04c',
      }
    },
});

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

export function App () {
    return (
      <ThemeProvider theme={theme}>
        <Provider { ...stores }>
          <div style={{ display: 'flex' }}>
            <main style={{ flexGrow: 1, overflow: 'auto', }}>

              <CssBaseline />
              <Header />

              <Container maxWidth={false} style={{ paddingTop: 32, paddingBottom: 32, width: '100%' }}>

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
                    component={ OrderCook }
                  />
                  <Route
                    path='/auth'
                    exact={ true }
                    component={ Auth }
                  />
                  <Route
                    path='/check_user_promo'
                    exact={ true }
                    component={ CheckUserPromo }
                  />
                  <Route
                    element={ NotFound }
                  />
                </Switch>
                  
              </Container>
            </main>
          </div>
        </Provider>
      </ThemeProvider>
    );
}