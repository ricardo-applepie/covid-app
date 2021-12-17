import { covidResultsTypes ,dateOptionsTypes} from "./covidresults.types";
export type Actions =
    | any

 // initial redux state 
export const initialState = {
    cases:[],
    dates:[],
    loaded: false,
    updating: false,
    error: false,
    loadingCovidResults: true,
    filterResults:{
        from:"", 
        to:""
    },
    options:[]
};

export function covidResultsReducer(
    state = initialState,
    action:Actions
){
    switch (action.type) {
        case covidResultsTypes.request:
            return Object.assign({}, state, {
                updatingHistory: true,
            });
        case covidResultsTypes.recieve :
            let cases= action.payload.map(function(covidCase:any){
             return covidCase.Cases;
            })
            let dates= action.payload.map(function(covidDates:any){
             return covidDates.Date;
            })
            
            let options= action.payload.map(function(option:any){
                return{value: option.Date, label:option.Date}
            }) ; 

            return Object.assign({}, state, {
                updatingHistory: false,
                cases: cases,
                dates:dates,
                options:options
            });
           case dateOptionsTypes.recieve :
     
             let fieldname= ""
             let date= ""
             if(action.payload === 'from'){
                fieldname= action.payload.fieldname;
                date=action.payload.event.value
             }else{
                fieldname= action.payload.fieldname;
                date=action.payload.event.value             }
            
            return Object.assign({}, state, {
             filterResults:{
              ...state.filterResults,
              [fieldname]:date
             }
             
            }); 
        default:
            return state;
    }
}
