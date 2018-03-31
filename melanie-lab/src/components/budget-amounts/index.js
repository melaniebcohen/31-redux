'use strict';

import React, { Component } from 'react';
import { budgetUpdate } from '../../action/budget.js';
import { connect } from 'react-redux';

class BudgetAmounts extends Component {
  
  render() {
    return (
      <section className='budget-amounts'>
        <div>
          <p><span>initial:</span> ${this.props.budget.budget}</p>

          {this.props.remaining ? 
            <p><span>remaining:</span> ${this.props.remaining}</p>
            : 
            <p><span>remaining:</span> ${this.props.budget.budget}</p>
          }
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  let calculateTotal = state => {
    if (state.expenses) {
      let expensesTotal = 0;

      for (let i = 0; i < Object.keys(state.expenses).length; i++) {
        let expCategory = Object.keys(state.expenses)[i];
        let expensesInCat = state.expenses[expCategory];

        if (expensesInCat.length > 0) {
          for (let j = 0; j < expensesInCat.length; j++) {
            expensesTotal += state.expenses[expCategory][j].price;
          }
        }
      }
      return expensesTotal;
    }
  };

  return { 
    remaining: state.budget.remaining - calculateTotal(state),
  };
};

const mapDispatchToProps = dispatch => ({
  budgetUpdate: budget => dispatch(budgetUpdate(budget)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BudgetAmounts);