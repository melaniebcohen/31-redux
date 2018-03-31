'use strict';

import React, { Component } from 'react';

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = props.expense ? {...props.expense} : { 
      title: '', 
      price: '',
      categoryId: props.categoryId,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.expense) {
      this.setState({...nextProps.expense});
    }

    if (nextProps.categoryId) {
      this.setState({ categoryId: nextProps.categoryId });
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);

    if (!this.props.expense) {
      this.setState({
        title: '',
        price: '',
      });
    }
  }

  render() {
    return (
      <form className='expense-form' onSubmit={this.handleSubmit}>
        <div>
          <label>create a new expense</label>
          <input
            name='title'
            type='text'
            placeholder={this.props.placeholderText}
            value={this.state.title}
            onChange={this.handleChange}
            required
          />

          <input
            name='price'
            type='number'
            placeholder={this.props.placeholderBudget}
            value={this.state.price}
            onChange={this.handleChange}
            required
          />

          <button className='expense-form-button' type='submit'>{this.props.buttonText}</button>
        </div>
      </form>
    );
  }
}