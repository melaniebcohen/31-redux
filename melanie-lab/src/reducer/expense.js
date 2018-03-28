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
    let categoryId = payload.categoryId;
    payload.budget = parseInt(payload.budget);
    let categoryExpenses = state[categoryId];

    return {...state, [categoryId]: [...categoryExpenses, payload]};
  case 'EXPENSE_DELETE':
    categoryId = payload.categoryId;
    categoryExpenses = state[categoryId];

    return {
      ...state,
      [categoryId]: categoryExpenses.filter(expense => expense.id !== payload.id),
    };
  case 'EXPENSE_UPDATE':
    categoryId = payload.categoryId;
    payload.budget = parseInt(payload.budget);
    categoryExpenses = state[categoryId];

    return {
      ...state,
      [categoryId]: categoryExpenses.map(expense => expense.id === payload.id ? payload : expense ),
    };
  default:
    return state;
  }
};