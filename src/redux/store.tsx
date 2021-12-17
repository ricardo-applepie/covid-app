import { createStore, applyMiddleware, compose, Store, AnyAction } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import {rootReducer} from './combinedReducers';
import {logics} from './combinedLogics';
import { composeWithDevTools } from 'redux-devtools-extension';

// this is the redux store 

const logicMiddleware:any = createLogicMiddleware(logics, {});
const middlewares:any = [
      // Add other middleware here...
      logicMiddleware,
];
  
export const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middlewares)));
  
  


