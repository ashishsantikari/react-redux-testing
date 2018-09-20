/*
 * Copyright (c) 2018. https://ashishsantikari.info
 */

import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {browserHistory, Router} from 'react-router';
import routes from './routes';
import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import configureStore from "./store/configureStore";
import {Provider} from 'react-redux';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from "./actions/authorActions";

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/></Provider>, document.getElementById('app')
);
