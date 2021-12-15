
import { ratesTypes} from "./rates.types";
 
export const requestRates = () => ({
    type: ratesTypes.request
})

export const recieveRates = (rates:any)=>({
    type: ratesTypes.recieve,
    payload: rates
}); 

