/*
 * Copyright (c) 2018. https://ashishsantikari.info
 */

import * as types from "./actionTypes";
import courseApi from '../api/mockCourseApi';
import {ajaxCallError, beginAjaxCall} from './ajaxStatusAction';

export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function loadCourses() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(response => {
      dispatch(loadCoursesSuccess(response));
    }).catch(err => {
      dispatch(ajaxCallError(err));
      throw err;
    });
  };
}

export function saveCourse(course) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse => {
      savedCourse.id
        ? dispatch(updateCourseSuccess(course))
        : dispatch(createCourseSuccess(course));
    }).catch(err => {
      dispatch(ajaxCallError(err));
      throw err;
    });
  };
}
