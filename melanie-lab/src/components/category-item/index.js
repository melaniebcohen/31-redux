'use strict';

import './_category-item.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { categoryDelete, categoryUpdate } from '../../action/category.js';
import CategoryForm from '../category-form';

class CategoryItem extends Component {
  render() {
    let { category, categoryUpdate, categoryDelete } = this.props;

    return (
      <div className='category-item'>
        <h3>{category.title}</h3>
        <button onClick={() => categoryDelete(category)}>X</button>

        <CategoryForm
          category={category}
          placeholderText={this.props.title}
          placeholderBudget={'$' + category.budget}
          buttonText='update category'
          onComplete={categoryUpdate}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  categoryUpdate: category => dispatch(categoryUpdate(category)),
  categoryDelete: category => dispatch(categoryDelete(category)),
});

export default connect(null, mapDispatchToProps)(CategoryItem);