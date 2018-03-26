'use strict';

import './_category-form.scss';
import React, { Component } from 'react';

export default class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.category ? this.props.category : { title: '' },
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ 
      title: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    return (
      <form className='category-form' onSubmit={this.handleSubmit}>
        <input
          name='title'
          type='text'
          placeholder={this.props.placeholderText}
          value={this.state.title}
          onChange={this.handleChange}
        />
  
        <button className='form-button' type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}