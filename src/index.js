import React from 'react';
import { render } from 'react-dom';
import './css/index.css';
import Router from './components/Router';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import {store} from './store'

render(
    <Provider store={store}>
      <Router />
    </Provider>, document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
