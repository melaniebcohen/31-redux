'use strict';

import { createStore, applyMiddleware } from 'redux';
import reporter from './redux-reporter';
import validateBudget from './validate-budget';
import validateCategory from './validate-category';
import validateExpense from './validate-expense';
import reducer from '../reducer';


export default () => createStore(reducer, applyMiddleware(reporter, validateBudget, validateCategory, validateExpense));