'use strict';

// import './_budget-amounts.scss';
import React, { Component } from 'react';

export default class BudgetAmounts extends Component {
  render() {
    return (
      <section className='budget-amounts'>
        <div>
          <p><span>initial:</span> ${this.props.initial}</p>
          <p><span>remaining:</span> $</p>
        </div>
      </section>
    );
  }
}