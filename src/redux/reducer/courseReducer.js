import * as types from "../actions/actionTypes";

export default function createReducer(state = [], action) {
  // debugger;
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
