import { combineReducers } from 'redux';
import {covidResultsReducer as covid} from './reducers/covidresults/covidresults.reducer';
// combining all reducers . 

export const createReducer = () => ({
    covid
});


const reducer = createReducer();

export const rootReducer = combineReducers (reducer);