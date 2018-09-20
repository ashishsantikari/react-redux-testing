/*
 * Copyright (c) 2018. https://ashishsantikari.info
 */

import React from 'react';
import {IndexRoute, Route} from 'react-router';
import App from './components/App';
import CoursesPage from "./components/course/CoursesPage";
import Home from "./components/home/Home";
import About from "./components/about/About";
import ManageCoursePage from "./components/course/ManageCoursePage";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="courses" component={CoursesPage}/>
    <Route path="course" component={ManageCoursePage}/>
    <Route path="course/:id" component={ManageCoursePage}/>
    <Route path="about" component={About}/>
  </Route>
);
