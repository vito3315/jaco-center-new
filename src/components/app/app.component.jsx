import React from 'react';
import { makeStyles } from '@mui/styles';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { NavLink as Link, Switch, Route, Redirect } from 'react-router-dom';

import { useHistory } from "react-router-dom";

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

const drawerWidth = 300;

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    width: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
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
    const classes = useStyles();
    let history = useHistory();
    
    return (
      <ThemeProvider theme={theme}>
        <Provider { ...stores }>
          <div className={classes.root}>
            <main className={classes.content}>

              <CssBaseline />
              <Header classes={classes} history={history} />

              <Container maxWidth={false} className={classes.container}>

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