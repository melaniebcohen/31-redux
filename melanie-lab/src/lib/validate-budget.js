'use strict';

const validateBudget = store => next => action => {
  const isBudget = action.type && action.type.startsWith('BUDGET');

  if (isBudget) {
    try {
      const budget = action.payload;

      const notValidated = !budget;

      if (notValidated) {
        throw new Error('VALIDATION ERROR: budget must be set');
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
  
export default validateBudget;