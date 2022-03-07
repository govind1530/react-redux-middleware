import React from 'react'

import {TodoContext} from './TodoContext';
import todoReducer from './Reducer';
import Form from './Form';
export default function Todo() {
    const [todos,dispatch] = React.useReducer(todoReducer,[]);
        
   
  return (
      <TodoContext.Provider value={{todos,dispatch}}>
          <Form/>
      </TodoContext.Provider>
  
  )
}
