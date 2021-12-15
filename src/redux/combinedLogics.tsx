import { ratesLogic } from './reducers/rates/rates.logic'
import { covidResultsLogic } from './reducers/covidresults/covidresults.logic'

export const logics = [
    ...ratesLogic,
    ...covidResultsLogic,
]