'use strict';

import './_category-item.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { categoryUpdate } from '../../action/category.js';
import CategoryForm from '../category-form';

class CategoryItem extends Component {
  render() {
    return (
      <div className='category-item'>
        <h3>{this.props.title}</h3>

        <CategoryForm
          category={this.props.category}
          placeholderText={this.props.title}
          placeholderBudget={'$' + this.props.category.budget}
          buttonText='update category'
          onComplete={this.props.categoryUpdate}
        />

        <button className='delete-button' type='submit' onClick={() => this.props.categoryDelete(this.props.category)}>{this.props.buttonText}</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { categories: state };
};

const mapDispatchToProps = dispatch => {
  return { categoryUpdate: category => dispatch(categoryUpdate(category)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);