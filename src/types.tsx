import { History } from 'history';
import RootReducer from './rootReducer';

export type RootState = ReturnType<typeof RootReducer>;
export type HistoryType = ReturnType<typeof Object>;

