import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function createReducer(state = initialState.courses, action) {
  // debugger;
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
