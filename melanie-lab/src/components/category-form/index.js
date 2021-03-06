'use strict';

import React, { Component } from 'react';

export default class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.category ? this.props.category : { title: '', budget: 0 },
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.category) {
      this.setState(props.category);
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

    if (!this.props.category) {
      this.setState({ title: '', budget: '' });
    }
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}