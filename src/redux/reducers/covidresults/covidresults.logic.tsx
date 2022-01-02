import React from "react";
import { createLogic } from "redux-logic";
import axios from "axios";
import { recieveCovidResults } from "./covidresults.actions";
import { covidResultsTypes } from "./covidresults.types";
import { endPoints } from "../../../config/endpoints";
import { Client } from "../../../client/client";

const fetchcovidResults = createLogic({
  // declarative built-in functionality wraps your code
  type: covidResultsTypes.request, // only apply this logic to this type
  cancelType: "CANCEL_FETCH_POLLS", // cancel on this type
  latest: true, // only take latest

  // your code here, hook into one or more of these execution
  // phases: validate, transform, and/or process
  process({ getState, action }, dispatch, done) {
    let client = new Client();
    client.get(`${endPoints.covidSituations.url}`).then((data: any) => {
      console.log(data.data);
      dispatch(recieveCovidResults(data.data));
      done();
    });
  },
});

const general = createLogic({
  // declarative built-in functionality wraps your code
  type: "*", // only apply this logic to this type
  cancelType: "CANCEL_FETCH_POLLS", // cancel on this type
  latest: true, // only take latest

  // your code here, hook into one or more of these execution
  // phases: validate, transform, and/or process
  process({ getState, action }, dispatch, done) {
    let client = new Client();
  },
});
export const covidResultsLogic = [fetchcovidResults, general];

export default [covidResultsLogic];
