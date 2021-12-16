import {covidResultsTypes,dateOptionsTypes} from '../covidresults/covidresults.types'; 

export const requestCovidResults = function(fromToDate:any):any{
    return{
        type:covidResultsTypes.request, 
        payload:fromToDate
    }
} 

export const recieveCovidResults = function(covidResuits:any):any{
    return{
        type:covidResultsTypes.recieve, 
        payload:covidResuits
    }
} 

export const recieveDateOptions= function(options:any){
    return{
        type:dateOptionsTypes.recieve ,
        payload: options
    }
}