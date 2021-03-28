import React from 'react';
import { IStall } from './types';

const greyedDollar = () => (
  <span style={{ display: 'inline', color: '#979797' }}>$</span>
);

const normalDollar = () => (
  <span style={{ display: 'inline', color: '#263238' }}>$</span>
);

export const GenerateExpenseLevel = (expenseLevel: number) => {
  let i = expenseLevel;
  let j = 3 - expenseLevel;
  const retVal = [];
  while (i > 0) {
    retVal.push(normalDollar());
    i -= 1;
  }
  while (j > 0) {
    retVal.push(greyedDollar());
    j -= 1;
  }
  return retVal;
};
