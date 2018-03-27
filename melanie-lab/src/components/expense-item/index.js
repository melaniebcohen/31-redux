'use strict';

/*
should have a button that will delete the expense from the app state (onClick)
should display the name and price of the component
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expenseDelete } from '../../action/expense.js';

import ExpenseForm from '../expense-form';

class ExpenseItem extends Component {
  render() {
    let { expense, expenseDelete } = this.props;

    <div className='expense-item'>
      <h3>{expense.title}</h3>
      <button className='delete-button' onClick={() => expenseDelete(category)}>X</button>

      {/* RENDER EXPENSE FORM HERE FOR UPDATING */}
    </div>
  }
}

const mapDispatchToProps = dispatch => ({
  expenseDelete: expense => dispatch(expenseDelete(expense)),
});

export default connect(null, mapDispatchToProps)(ExpenseItem);