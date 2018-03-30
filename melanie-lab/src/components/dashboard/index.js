'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { categoryCreate } from '../../action/category.js';
import { budgetCreate, budgetUpdate } from '../../action/budget.js';

import NavBar from '../navbar';
import BudgetAmounts from '../budget-amounts';
import BudgetForm from '../initial-budget-form';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashboardContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     budget: this.props.budget.budget,
  //     remaining: this.props.budget.remaining,
  //   };
  // }

  // shouldComponentUpdate(props) {
  //   console.log(props.budget);

  //   if (props.categories && props.categories.length) {
  //     let categoryBudgetTotal = props.categories.map(category => {
  //       return category.budget;
  //     }).reduce((acc, cur) => {
  //       return acc + cur;
  //     });

  //     let newRemaining = props.budget.remaining - categoryBudgetTotal;

  //     if (newRemaining <= 0 && props.budget.remaining === 0) {
  //       return false;
  //     } else if (newRemaining <= 0) {
  //       let newBudget = { budget: props.budget.budget, remaining: 0 };
  //       this.props.budgetUpdate(newBudget);
  //       return true;
  //     } else {
  //       let newBudget = { budget: props.budget.budget, remaining: newRemaining };
  //       this.props.budgetUpdate(newBudget);
  //       return true;
  //     }
  //   } else {
  //     return false;
  //   }
  // }

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
        
        {/* Needs to be refactored, I know it's hacky */}
        {typeof this.props.budget.budget === 'number'  ? 
          <section className='budget-amounts'>
            <div>
              <p><span>initial:</span> ${budget.budget}</p>
              {categories.length ? <p><span>remaining:</span> ${budget.budget - 
                (categories.map(category => {
                  return category.budget;
                }).reduce((acc, cur) => {
                  return acc + cur;
                }))} </p> 
                : <p><span>remaining:</span>${budget.budget}</p>
              }
            </div>
          </section>
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
    budgetUpdate: budget => dispatch(budgetUpdate(budget)),
    categoryCreate: category => dispatch(categoryCreate(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);