'use strict';

// import './_category-item.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { categoryDelete, categoryUpdate } from '../../action/category.js';
import { expenseCreate } from '../../action/expense.js';
import { renderIf } from '../../lib/util.js';

import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';

class CategoryItem extends Component {
  render() {
    let catId = this.props.category.id;
    let { category, categoryUpdate, categoryDelete, expenseCreate, expenses } = this.props;
    
    // DEMO
    // let currentExpense = this.props.exp[category.id][0] ? this.props.exp[category.id][0] : null;
    // this.props.expense[category.id]

    // if (expenses[category.id].length > 0) {
    //   let categoryBudget = expenses[category.id].reduce((acc, cur) => {
    //     return acc + cur.price;
    //   }, 0);
    // }

    return (
      <div className='category-item'>
        <div className='category-item-content'>
          <h3>{category.title}</h3>
          <p><span>total:</span>{category.budget}</p>
        </div>
        
        <div className='category-item-edit'>
          <button className='delete-button' onClick={() => categoryDelete(category)}>X</button>

          <CategoryForm
            category={category}
            placeholderText={this.props.title}
            placeholderBudget={'$' + category.budget}
            buttonText='update'
            onComplete={categoryUpdate}
          />
        </div>

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
    );
  }
}

// mapStateToProps - categories, expenses

const mapDispatchToProps = dispatch => ({
  categoryUpdate: category => dispatch(categoryUpdate(category)),
  categoryDelete: category => dispatch(categoryDelete(category)),
  expenseCreate: expense => dispatch(expenseCreate(expense)),
});

export default connect(null, mapDispatchToProps)(CategoryItem);