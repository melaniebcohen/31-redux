'use strict';

import './_category-item.scss';
import React, { Component } from 'react';
import CategoryForm from '../category-form';

export default class CategoryItem extends Component {
  render() {
    return (
      <div className='category-item'>
        <h3>{this.props.title}</h3>

        <CategoryForm
          placeholderText={this.props.title}
          buttonText='update category'
          // onComplete={this.props.categoryUpdate}
        />

        <button className='delete-button' type='submit' onClick={() => this.props.categoryDelete(this.props.category)}>{this.props.buttonText}</button>
      </div>
    );
  }
}