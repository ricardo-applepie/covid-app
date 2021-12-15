import {covidResultsTypes} from '../covidresults/covidresults.types'; 

export const requestCovidResults = function(){
    return{
        type:covidResultsTypes.request, 
    }
} 
export const recieveCovidResults = function(covidResuits:any){
    return{
        type:covidResultsTypes.recieve, 
        payload:covidResuits
    }
} 