import {LOAD_COURSES_SUCCESS} from "./actionTypes";
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  return {type: LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses() {
  return function(dispatch){
    return courseApi.getAllCourses().then(response => {
      dispatch(loadCoursesSuccess(response));
    }).catch(err => {
      throw err;
    });
  }
}
