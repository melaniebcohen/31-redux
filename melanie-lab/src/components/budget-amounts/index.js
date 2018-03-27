'use strict';

import React, { Component } from 'react';

export default class BudgetAmounts extends Component {
  render() {
    return (
      <section>
        <p>initial: ${this.props.initial}</p>
        <p>remaining: $</p>
      </section>
    );
  }
}