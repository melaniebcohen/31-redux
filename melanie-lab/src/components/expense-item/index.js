'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { expenseUpdate, expenseDelete } from '../../action/expense.js';
import ExpenseForm from '../expense-form';

class ExpenseItem extends Component {
  render() {
    let { expenses, expenseDelete, expenseUpdate, category } = this.props;

    return (
      <ul className='expense-list'>
        { expenses.map(expense => 
          <li className='expense-item' key={expense.id}>
            <button className='delete-button' onClick={() => expenseDelete(expense)}>X</button>
            <p>{expense.title}</p>
            <h4>${expense.price}</h4>

            <ExpenseForm
              expense={expense}
              buttonText='update'
              onComplete={expenseUpdate}
            />
          </li>
        )}
      </ul>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  expenseDelete: expense => dispatch(expenseDelete(expense)),
  expenseUpdate: expense => dispatch(expenseUpdate(expense)),
});

export default connect(null, mapDispatchToProps)(ExpenseItem);