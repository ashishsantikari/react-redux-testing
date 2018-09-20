/*
 * Copyright (c) 2018. https://ashishsantikari.info
 */

import * as types from '../actions/actionTypes';
import initialState from "./initialState";

//reducer is a function which accepts an action and a state and returns new state
export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
