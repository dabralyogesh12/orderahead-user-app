import React from 'react';
import { IStall } from './types';

const greyedDollar = () => (
  <span
    style={{
      display: 'inline',
      color: '#979797',
      fontFamily: 'Roboto',
      fontSize: '14px',
    }}
  >
    $
  </span>
);

const normalDollar = () => (
  <span
    style={{
      display: 'inline',
      color: '#263238',
      fontFamily: 'Roboto',
      fontSize: '14px',
    }}
  >
    $
  </span>
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

export const isDesktop = () => window.innerWidth > 1280;
