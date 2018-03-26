'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import DashboardContainer from '../dashboard';
import createAppStore from '../../lib/store.js';

const store = createAppStore();

export default class App extends Component {
  componentDidMount() {
    store.subscribe(() => console.log('__STATE__', store.getState()));
    store.dispatch({ type: null });
  }

  render() {
    return (
      <section>
        <Provider store={store}>
          <BrowserRouter>
            <Route 
              exact
              path='/'
              component={DashboardContainer}
            />
          </BrowserRouter>
        </Provider>
      </section>
    );
  }
}