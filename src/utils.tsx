import { IStall } from './types';


export const GenerateExpenseLevel = (expenseLevel:number) => {
  let i = expenseLevel;
  let str = "";
  while (i > 0) {
    str += "$";
    i -= 1;
  }
  return str;
};


