'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { categoryDelete, categoryUpdate } from '../../action/category.js';
import { expenseCreate } from '../../action/expense.js';
import { budgetUpdate } from '../../action/budget.js';
import { renderIf } from '../../lib/util.js';

import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';

class CategoryItem extends Component {
  componentWillReceiveProps(nextProps) {
    let { category, categories, categoryUpdate, categoryDelete, expenseCreate, expenses } = this.props;

    let expensesTotal = 0;

    if (nextProps.expenses[category.id] && nextProps.expenses[category.id].length) {
      expensesTotal = nextProps.expenses[category.id].map(expense => {
        return expense.price;
      }).reduce((acc, cur) => {
        return acc + cur;
      });

      if (typeof expensesTotal === 'number') {
        category.budget = expensesTotal;
      } else {
        category.budget = expensesTotal.price;
      }
    }
  }

  render() {
    let catId = this.props.category.id;
    let { category, categories, categoryUpdate, categoryDelete, expenseCreate, expenses } = this.props;
        
    return (
      <div className='category-item'>
        <div className='category-item-content'>
          <h3>{category.title}</h3>
          <p><span>total:</span> ${category.budget}</p>
        </div>
        
        <div className='category-item-edit'>
          <CategoryForm
            category={category}
            placeholderText={this.props.title}
            placeholderBudget={'$' + category.budget}
            buttonText='update'
            onComplete={categoryUpdate}
          />

          <button className='delete-button' onClick={() => categoryDelete(category)}>X</button>
        </div>

        <div className="expenses">
          <ExpenseForm 
            categoryId={category.id}
            placeholderText='expense name...'
            placeholderBudget='$ expense budget...'
            buttonText='add expense'
            onComplete={expenseCreate}
          />
          
          { expenses[category.id].length ? 
            <ExpenseItem
              expenses={expenses[category.id]}
            />
            : undefined
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    budget: state.budget,
  };
};

const mapDispatchToProps = dispatch => ({
  budgetUpdate: budget => dispatch(budgetUpdate(budget)),
  categoryUpdate: category => dispatch(categoryUpdate(category)),
  categoryDelete: category => dispatch(categoryDelete(category)),
  expenseCreate: expense => dispatch(expenseCreate(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);