import React, { Suspense } from 'react';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Routes, Route } from "react-router-dom";


//const Dashboard = React.lazy(() => import("./pages/Dashboard"));

//import { Home } from '../home';
const Home = React.lazy(() => import("../home"));
const Orders = React.lazy(() => import("../orders"));
const OrderCook = React.lazy(() => import("../ordercook"));
const Auth = React.lazy(() => import("../auth"));
const CheckUserPromo = React.lazy(() => import("../check_user_promo"));
const Map = React.lazy(() => import("../map"));

//import { Orders } from '../orders';
//import { OrderCook } from '../ordercook';
//import { Auth } from '../auth';
//import { CheckUserPromo } from '../check_user_promo';
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

              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  
                  <Route index path="/" exact={ true } element={<Home />} />
                  <Route path="/orders" exact={ true } element={<Orders />} />
                  <Route path="/ordercook" exact={ true } element={<OrderCook />} />
                  <Route path="/auth" exact={ true } element={<Auth />} />
                  <Route path="/check_user_promo" exact={ true } element={<CheckUserPromo />} />
                  <Route path="/map" exact={ true } element={<Map />} />
                  <Route path="*" element={<NotFound />} />
                  
                </Routes>
              </Suspense>
                
                  
              </Container>
            </main>
          </div>
        </Provider>
      </ThemeProvider>
    );
}