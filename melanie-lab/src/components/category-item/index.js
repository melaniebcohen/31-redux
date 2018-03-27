'use strict';

import './_category-item.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { categoryDelete, categoryUpdate } from '../../action/category.js';
import { expenseCreate } from '../../action/expense.js';

import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';

class CategoryItem extends Component {
  render() {
    let { category, categoryUpdate, categoryDelete, expenseCreate } = this.props;

    return (
      <div className='category-item'>
        <h3>{category.title}</h3>
        <button className='delete-button' onClick={() => categoryDelete(category)}>X</button>

        <CategoryForm
          category={category}
          placeholderText={this.props.title}
          placeholderBudget={'$' + category.budget}
          buttonText='update category'
          onComplete={categoryUpdate}
        />

        <ExpenseForm 
          category={category}
          placeholderText='expense name...'
          placeholderBudget='$ expense budget...'
          buttonText='add expense'
          onComplete={expenseCreate}
        />          
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    budget: state.budget,
    categories: state.categories,
    expenses: state.expenses,
  };
};

const mapDispatchToProps = dispatch => ({
  categoryUpdate: category => dispatch(categoryUpdate(category)),
  categoryDelete: category => dispatch(categoryDelete(category)),
  expenseCreate: expense => dispatch(expenseCreate(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);