'use strict';

import { connect } from 'react-redux';
import React, { Component } from 'react';

import { categoryCreate, categoryUpdate, categoryDelete } from '../../action/category.js';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashboardContainer extends Component {
  // componentDidMount() {
  //   this.props.categoryCreate({ title: 'test category here' });
  // }

  render() {
    return (
      <main className='dashboard-container'>
        <h2>create a new category.</h2>

        <CategoryForm
          buttonText='create category'
          placeholderText='create a new category and track your expenses'
          onComplete={this.props.categoryCreate}
        />

        {this.props.categories.map(item => 
          <div key={item.id}>
            <CategoryItem 
              title={item.title}
              buttonText='delete category'
              onClick={this.props.categoryDelete}
            />
          </div>
        )}
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryDelete(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);