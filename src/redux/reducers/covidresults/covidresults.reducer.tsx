import { covidResultsTypes } from "./covidresults.types";

export const initialState = {
    covidResults:[],
    loaded: false,
    updating: false,
    error: false,
    loadingCovidResults: true,
};

export function covidResultsReducer(
    state = initialState,
    action:any
){
    switch (action.type) {
        case covidResultsTypes.request:
            return Object.assign({}, state, {
                updatingHistory: true,
            });
        case covidResultsTypes.recieve :
            return Object.assign({}, state, {
                updatingHistory: false,
                covidResults: action.payload
            });

        default:
            return state;
    }
}
