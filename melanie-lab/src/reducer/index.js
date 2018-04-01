'use strict';

import { combineReducers } from 'redux';
import budgetReducer from './budget.js';
import expensesReducer from './expense.js';
import categoriesReducer from './category.js';

export default combineReducers({
  budget: budgetReducer,
  expenses: expensesReducer,
  categories: categoriesReducer,
});