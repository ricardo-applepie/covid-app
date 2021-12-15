import { combineReducers } from 'redux';
import { ratesReducer as rates } from './reducers/rates/rates.reducer';
import {covidResultsReducer as covid} from './reducers/covidresults/covidresults.reducer';

export const createReducer = () => ({
    rates,
    covid
});


const reducer = createReducer();

export const rootReducer = combineReducers (reducer);