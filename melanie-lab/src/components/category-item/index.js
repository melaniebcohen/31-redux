'use strict';

import React, { Component } from 'react';
import CategoryForm from '../category-form';

export default class CategoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: props.category ? props.category.title : '',
    };
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
    this.props.onComplete(Object.assign({}, this.state));
  }

  render() {
    return (
      <div className='category-item'>
        <h3>{this.props.title}</h3>
        <button type='submit' onClick={this.props.categoryDelete}>{this.props.buttonText}</button>

        <CategoryForm
          placeholderText={this.props.title}
          buttonText='update category'
          onComplete={this.props.categoryUpdate}
        />
      </div>
    );
  }
}