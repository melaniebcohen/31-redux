'use strict';

/*
should have a button that will delete the expense from the app state (onClick)
should display the name and price of the component
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { expenseUpdate, expenseDelete } from '../../action/expense.js';
import ExpenseForm from '../expense-form';

class ExpenseItem extends Component {
  render() {
    let { expenses, expenseDelete, expenseUpdate } = this.props;
    return (
      <ul className='expense-list'>
        { expenses.map(expense => 
          <li className='expense-item' key={expense}>
            <h3>{expense.title}</h3>
            <button className='delete-button' onClick={() => expenseDelete(expense)}>X</button>

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