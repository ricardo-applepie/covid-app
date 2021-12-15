import { createLogic } from 'redux-logic';
import axios from 'axios';

import {recieveRates} from "./rates.actions";
import {ratesTypes} from "./rates.types";

let API_KEY = "e7bc8e7d32b74d2daa36b4c8413cf8d6";


let api = `https://api.exchangerate-api.com/v4/latest/usd`
let newApi =`https://api.currencyfreaks.com/latest?apikey=${API_KEY}&symbols=PKR,GBP,EUR,INR&base=EUR`
const fetchRatesLogic = createLogic({
    // declarative built-in functionality wraps your code
    type: ratesTypes.request, // only apply this logic to this type
    cancelType: "CANCEL_FETCH_POLLS", // cancel on this type
    latest: true, // only take latest

    // your code here, hook into one or more of these execution
    // phases: validate, transform, and/or process
    process({ getState, action }, dispatch, done) {
        console.log("api call");
        axios
        
            .get(api)
            .then((resp) => {
                dispatch(recieveRates(resp));
                console.log(resp.data); 

            })
            .catch((err) => {
                console.error(err); // log since could be render err
            })
            .then(() => done()); // call done when finished dispatching
    }
});
export const ratesLogic = [fetchRatesLogic];

export default [ratesLogic];
