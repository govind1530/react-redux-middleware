import React from 'react'

import {useDispatch,useSelector} from 'react-redux'
import AddAge from './Action'
const axios  = require('axios');
export default function Age() {
const dispatch = useDispatch()
const state= useSelector(state=>state)
console.log(state)
const getData = () =>{
axios.get('http://localhost:8000/contact?name="govind&city="jaipur"&state="Rajasthan"&country="india"').then(
  response => 
  console.log("response",response)
  )
}
  return (
      <div>
    <div>Age</div>
    <button onClick={getData}>
        Add
    </button>
    </div>
  )
}
