import { ratesTypes } from "../rates/rates.types";

console.log(ratesTypes.request)
export const initialState = {
    messages: [
        {
            type: '',
        },
    ],
    loaded: false,
    updating: false,
    loopIndex: 0,
    error: false,
    loadedHistory: false,
    updatingHistory: false,
};

export function ratesReducer(
    state = initialState,
    action:any
){
    switch (action.type) {
        case ratesTypes.request:
        console.log("loaded")
            return Object.assign({}, state, {
                updatingHistory: true,
            });
        case ratesTypes.recieve :
            return Object.assign({}, state, {
                updatingHistory: false,
                rates: action.payload
            });

        default:
            return state;
    }
}
