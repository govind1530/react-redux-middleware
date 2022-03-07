import React from 'react'
import  './index.css'
import { TodoContext } from './TodoContext'
import { v4 as uuidv4 } from 'uuid';
import { ADD_TODO ,REMOVE_TODO} from './action.types';
export default function Form() {
    const [todoString,setTodoString] = React.useState('')
    const {todos,dispatch} = React.useContext(TodoContext);
    console.log("todos",todos)
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(todoString === ''){
            return alert('Please enter todo value')
        }
        const todo = {
            todoString,
            id:uuidv4()
        }

        dispatch({
            type:ADD_TODO,
            payload:todo
        })
        setTodoString("")
        dispatch({
            type:REMOVE_TODO,
            payload:todos[0]?.id
        })
}
  return (
    <div>
    <form onSubmit={(e)=>handleSubmit(e)}>
       <input type="text"
       placeholder="todo"
       value={todoString}
       onChange={(e)=>setTodoString(e.target.value)}
       />
        <button className="btn">
            click</button>
    </form>
</div>
  )
}
