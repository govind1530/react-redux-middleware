import React from 'react'

import {useDispatch,useSelector} from 'react-redux'
import AddAge from './Action'
export default function Age() {
const dispatch = useDispatch()
const state= useSelector(state=>state)
console.log(state)
  return (
      <div>
    <div>Age</div>
    <button onClick={()=>dispatch(AddAge())}>
        Add
    </button>
    </div>
  )
}
