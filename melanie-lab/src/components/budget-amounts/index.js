'use strict';

import React, { Component } from 'react';
import { budgetUpdate } from '../../action/budget.js';
import { connect } from 'react-redux';

class BudgetAmounts extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(props) {
    console.log(props.budget);

    if (props.categories && props.categories.length) {
      let categoryBudgetTotal = props.categories.map(category => {
        return category.budget;
      }).reduce((acc, cur) => {
        return acc + cur;
      });

      let newRemaining = props.budget.remaining - categoryBudgetTotal;

      if (newRemaining <= 0 && props.budget.remaining === 0) {
        return false;
      } else if (newRemaining <= 0) {
        let newBudget = { remaining: 0 };
        this.props.budgetUpdate(newBudget);
        return true;
      } else {
        let newBudget = { remaining: newRemaining };
        this.props.budgetUpdate(newBudget);
        return true;
      }
    } else {
      return false;
    }
  }
  
  render() {
    return (
      <section className='budget-amounts'>
        <div>
          <p><span>initial:</span> ${this.props.budget.budget}</p>
          <p><span>remaining:</span> ${this.props.budget.remaining}</p>
        </div>
      </section>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(BudgetAmounts);