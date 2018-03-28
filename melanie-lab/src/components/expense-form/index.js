/*
should support an expense prop that will both set the intial form state, and update the state in the hook on componentWillReceiveProps()
*/

'use strict';

import './_expense-form.scss';
import React, { Component } from 'react';

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = props.expense ? {...props.expense} : { 
      title: '', 
      budget: '',
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

    // if (!this.props.expense) {
    //   this.setState({
    //     title: '', 
    //     budget: '',
    //   });
    // }
  }

  render() {
    return (
      <form className='expense-form' onSubmit={this.handleSubmit}>
        <input
          name='title'
          type='text'
          placeholder={this.props.placeholderText}
          value={this.state.title}
          onChange={this.handleChange}
        />

        <input
          name='budget'
          type='number'
          placeholder={this.props.placeholderBudget}
          value={this.state.budget}
          onChange={this.handleChange}
        />

        <button className='expense-form-button' type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}