'use strict';

import './_dashboard.scss';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { categoryCreate, categoryUpdate, categoryDelete } from '../../action/category.js';
import NavBar from '../navbar';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashboardContainer extends Component {
  render() {
    return (
      <main className='dashboard-container'>
        <NavBar />
        <h2>create a new category.</h2>

        <CategoryForm
          buttonText='create category'
          placeholderText='create a new category and track your expenses'
          placeholderBudget='enter the budget for your new category'
          onComplete={this.props.categoryCreate}
        />

        {this.props.categories.map(item => 
          <CategoryItem
            key={item.id}
            category={item}
            title={item.title}
            buttonText='delete category'
            categoryDelete={this.props.categoryDelete}
          />
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