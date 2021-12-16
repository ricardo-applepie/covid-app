import React, { Component, useState } from 'react'
import Select from 'react-select'; 

import {recieveDateOptions} from '../../redux/reducers/covidresults/covidresults.actions'
import  {useDispatch} from "react-redux";

function Button  (props:any) {
  let dispatch= useDispatch(); 

  const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
 function handleChange(event:any,fieldname:any){

 dispatch(recieveDateOptions({event:event,fieldname:fieldname}))
 }
  return (
    <div>
      <Select  onChange={(e:any)=>handleChange(e,props.name)}options={props.data||options} />
    </div>
  )
  
}
export default Button; 
