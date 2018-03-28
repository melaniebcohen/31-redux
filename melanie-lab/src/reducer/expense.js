'use strict';

let initialState = {};

export default (state=initialState, action) => {
  let { type, payload } = action;

  switch(type) {
  case 'CATEGORY_CREATE':
    return {...state, [payload.id] : []};
  case 'CATEGORY_DELETE':
    return {...state, [payload.id] : undefined };
  case 'EXPENSE_CREATE':
    let { categoryId } = payload;
    let categoryExpenses = state[categoryId];
    return {...state, [categoryId]: [...categoryExpenses, payload]};
  case 'EXPENSE_DELETE':
    // DELETE NOT WORKING YET
    // return state.filter(expense => expense.id !== payload.id);
  default:
    return state;
  }
};