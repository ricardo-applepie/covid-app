import React, { Component, useState } from 'react'
import Select from 'react-select'; 
import {recieveDateOptions} from '../../redux/reducers/covidresults/covidresults.actions'
import  {useDispatch} from "react-redux";



function Button  (props:any) {
    // dispatch function is used to dispatch actions to redux; 
    let dispatch= useDispatch(); 
  // option object holds default values for the graph if data from redux not available . 
    const options = [
    { value: '2021', label: '2021' },
    { value: '2011', label: '2011' },
    { value: '2013', label: '2012' }
  ]
  //handle form dates selector , this updates the from and to dates values during api requests . 
  function handleChange(event:any,fieldname:any) {
    dispatch(recieveDateOptions({event:event,fieldname:fieldname}))
  }

    return (
      <div>
        <Select  onChange={(e:any)=>handleChange(e,props.name)}options={props.data||options} />
      </div>
    )
    
  }

export default Button; 
