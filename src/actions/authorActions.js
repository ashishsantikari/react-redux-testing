/*
 * Copyright (c) 2018. https://ashishsantikari.info
 */

import * as types from './actionTypes';
import authorApi from "../api/mockAuthorApi";
import {ajaxCallError, beginAjaxCall} from "./ajaxStatusAction";


export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return authorApi.getAllAuthors().then(response => {
      dispatch(loadAuthorsSuccess(response));
    }).catch(err => {
      dispatch(ajaxCallError(err));
      throw err;
    });
  };
}
