'use strict';

let initialState = '';

export default (state=initialState, action) => {
  let { type, payload } = action;

  switch(type) {
  case 'BUDGET_CREATE':
    payload.budget = parseInt(payload.budget);
    payload.remaining = payload.budget;
    return payload;
  case 'BUDGET_UPDATE':
    return payload;
  default:
    return state;
  }
};