'use strict';

const validateExpense = store => next => action => {
  const isExpense = action.type && action.type.startsWith('EXPENSE');

  if (isExpense) {
    try {
      const expense = action.payload;
      console.log('validate-expense expense payload', expense);

      const notValidated = !expense.id || !expense.title || !expense.categoryId;

      if (notValidated) {
        throw new Error('VALIDATION ERROR: expense must include id, title, and categoryId');
      } else {
        return next(action);
      }
    } catch (err) {
      console.error(err);
    }
  } else {
    return next(action);
  }
};

export default validateExpense;