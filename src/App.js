import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/HomepageContainer';
import Post from './components/views/Post/PostContainer';
import PostEdit from './components/views/PostEdit/PostEditContainer';
import PostAdd from './components/views/PostAdd/PostAddContainer';
import Cart from './components/features/Cart/CartContainer';
import Payment from './components/views/Payment/Payment'
import { NotFound } from './components/views/NotFound/NotFound';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/post/add' component={PostAdd} />
              <Route exact path='/post/:id' component={Post} />
              <Route exact path='/post/:id/edit' component={PostEdit} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/cart/payment' component={Payment} />
              <Route path='*' component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };

