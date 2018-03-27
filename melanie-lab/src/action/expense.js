'use strict';

// id - a uuid
// categoryID - an id that corresponds to an existing category
// timestamp - a date from when the category was created
// name - a string that is the name of the category
// price - a number that is the total amount of $ in the category

import uuid from 'uuid/v1';

export const expenseCreate = expense => ({
  type: 'EXPENSE_CREATE',
  payload: {...expense, id: uuid()},
});

export const expenseUpdate = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: {...expense},
});

export const expenseDelete = expense => ({
  type: 'EXPENSE_DELETE',
  payload: {...expense},
});