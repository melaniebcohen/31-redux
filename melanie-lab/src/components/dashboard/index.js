'use strict';

import './_dashboard.scss';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { categoryCreate as categoryActionCreate } from '../../action/category.js';
import { budgetCreate as budgetActionCreate } from '../../action/budget.js';

import NavBar from '../navbar';
import InitialBudgetForm from '../initial-budget-form';
import BudgetAmounts from '../budget-amounts';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashboardContainer extends Component {
  render() {
    return (
      <main className='dashboard-container'>
        <NavBar />

        {this.props.budget === '' ? 
          <InitialBudgetForm 
            buttonText='set budget'
            placeholderText='set total budget'
            onComplete={this.props.budgetCreate}
          />
          : undefined}
        
        {this.props.budget !== '' ? 
          <BudgetAmounts
            initial={this.props.budget}
          />
          : undefined}
        
        <h2>create a new category.</h2>

        <CategoryForm
          buttonText='create category'
          placeholderText='create a new category and track your expenses'
          onComplete={this.props.categoryCreate}
        />

        {this.props.categories.map(item =>
          <div key={item.id}>
            <CategoryItem
              category={item}
              key={item.id}
            />
          </div>
        )}
      </main>
    );
  }
}

const mapStateToProps = state => {
  return { 
    budget: state.budget,
    categories: state.categories,
  };
};

const mapDispatchToProps = dispatch => {
  return { 
    budgetCreate: budget => dispatch(budgetActionCreate(budget)),
    categoryCreate: category => dispatch(categoryActionCreate(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);