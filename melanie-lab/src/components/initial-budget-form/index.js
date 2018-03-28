'use strict';

import './_initial-budget-form.scss';
import React, { Component } from 'react';

export default class InitalBudgetForm extends Component {
  constructor(props) {
    super(props);
    this.state = { budget: '' },
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ 
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    return (
      <form className='budget-form' onSubmit={this.handleSubmit}>
        <label>set your total budget.</label>
        <input
          name='budget'
          type='number'
          placeholder={this.props.placeholderText}
          value={this.state.budget}
          onChange={this.handleChange}
        />

        <button className='form-button' type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}