import { combineReducers } from 'redux';

import { userReducer } from './user';

export * from './user';
export * from './types';

export const Reducers = combineReducers({
  userState: userReducer,
});
