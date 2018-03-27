'use strict';

import uuid from 'uuid/v1';

export const budgetCreate = budget => ({
  type: 'BUDGET_CREATE',
  payload: budget,
});