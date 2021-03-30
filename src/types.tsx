import { History } from 'history';
import RootReducer from './rootReducer';

export type RootState = ReturnType<typeof RootReducer>;
export type HistoryType = ReturnType<typeof Object>;

export interface IPos {
  type: string;
  squareInfo: Record<string, string>;
}

export interface IPrice {
  amount: number;
  currency: string;
}
export interface IVariation {
  name: string;
  price: IPrice;
  _id: string;
  status: string;
  pointOfSaleInfo: IPos;
}
export interface IItemDetail {
  name: string;
  description: string;
  variations: IVariation[];
  categories: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modifier: Record<any, any>[];
  status: string;
  _id: string;
  applicableTaxKeys: string[];
  pointOfSaleInfo: IPos;
  imagePaths?: string[];
}
