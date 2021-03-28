import { History } from 'history';
import RootReducer from './rootReducer';
import { stall } from './data/testData';

export type RootState = ReturnType<typeof RootReducer>;
export type HistoryType = ReturnType<typeof Object>;

export type IStall = typeof stall;

