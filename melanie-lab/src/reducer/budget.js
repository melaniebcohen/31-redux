'use strict';

let initialState = '';

export default (state=initialState, action) => {
  let { type, payload } = action;

  switch(type) {
  case 'BUDGET_CREATE':
    return parseInt(payload.budget);
  default:
    return state;
  }
};