import {
  covidResultsTypes,
  dateOptionsTypes,
} from "../covidresults/covidresults.types";

interface Options {
  event: any;
  fieldname: any;
}

interface CovidResuits {
  type: "string";
  payload: Object;
}

// actions to be dispatch to redux store  to get covid results are found in this folder .
export const requestCovidResults = function (fromToDate: any): any {
  return {
    type: covidResultsTypes.request,
    payload: fromToDate,
  };
};
//this action is called to update redux state

export const recieveCovidResults = function (covidResuits: CovidResuits) {
  return {
    type: covidResultsTypes.recieve,
    payload: covidResuits,
  };
};

export const recieveDateOptions = function (options: Options) {
  return {
    type: dateOptionsTypes.recieve,
    payload: options,
  };
};
