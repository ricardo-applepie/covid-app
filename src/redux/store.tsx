import { createStore, applyMiddleware, compose, Store, AnyAction } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { rootReducer } from './combinedReducers';
import { logics } from './combinedLogics';
import { composeWithDevTools } from 'redux-devtools-extension';

//  redux store
const logicMiddleware: any = createLogicMiddleware(logics, {});
const middlewares: any = [
  // Adding  all middlewares...
  logicMiddleware,
];

export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middlewares))
);
