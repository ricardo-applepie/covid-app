import React, { useEffect } from 'react'; 
import { useDispatch } from 'react-redux';
import {endPoints} from '../../config/endpoints'; 
import {requestCovidResults} from '../../redux/reducers/covidresults/covidresults.actions'; 

function  Overview() {
    let dispatch= useDispatch()

    useEffect(() => {
        dispatch(requestCovidResults())
        console.log("Effect has been called");
    }, []) 
    

         
      return (
      <div>

      </div>
      )

}
export default Overview; 