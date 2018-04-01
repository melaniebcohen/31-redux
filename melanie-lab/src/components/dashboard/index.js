'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { categoryCreate } from '../../action/category.js';
import { budgetCreate } from '../../action/budget.js';

import NavBar from '../navbar';
import BudgetAmounts from '../budget-amounts';
import BudgetForm from '../budget-form';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashboardContainer extends Component {
  render() {
    let { budget, budgetCreate, categoryCreate, categories, expenses } = this.props;

    return (
      <main className='dashboard-container'>
        <NavBar />

        {this.props.budget.length === 0 ? 
          <BudgetForm 
            buttonText='set budget'
            placeholderText='set total budget'
            onComplete={budgetCreate}
          />
          : undefined}

        {this.props.budget.budget > 0 ? 
          <BudgetAmounts 
            budget={budget}
            categories={categories}
          />
          : undefined}


        <h2>create a new category.</h2>
        <CategoryForm
          buttonText='create category'
          placeholderText='create a new category and track your expenses'
          onComplete={categoryCreate}
        />

        {categories.map(item =>
          <CategoryItem
            key={item.id}
            category={item}
            expenses={expenses}
            categories={categories}
          />
        )}
      </main>
    );
  }
}

const mapStateToProps = state => {
  return { 
    budget: state.budget,
    categories: state.categories,
    expenses: state.expenses,
  };
};

const mapDispatchToProps = dispatch => {
  return { 
    budgetCreate: budget => dispatch(budgetCreate(budget)),
    categoryCreate: category => dispatch(categoryCreate(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);