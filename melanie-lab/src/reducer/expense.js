'use strict';

let initialState = {};

export default (state=initialState, action) => {
  let { type, payload } = action;

  switch(type) {
  case 'CATEGORY_CREATE':
    return {...state, [payload.id] : []};
  case 'CATEGORY_DESTROY':
    let newState = Object.keys(state).reduce((acc, key) => {
      if (key !== payload.id) {
        acc[key] = state[key];
      }
      return acc;
    }, {});
    
    return newState;
  case 'EXPENSE_CREATE':
    let categoryId = payload.categoryId;
    payload.price = parseInt(payload.price);
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
    payload.price = parseInt(payload.price);
    categoryExpenses = state[categoryId];

    return {
      ...state,
      [categoryId]: categoryExpenses.map(expense => expense.id === payload.id ? payload : expense ),
    };
  default:
    return state;
  }
};