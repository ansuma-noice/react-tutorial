import React from 'react'
import { ACTIONS } from './AppRe'


function Todo({todo,dispatch}) {
  return (
    <div>
        <span style={{color:todo.complete ? '#AAA' : '#000'}}>{todo.name}</span>
        <button onClick={()=>dispatch({type:ACTIONS.TOGGLE,payload:{id:todo.id}})}>toggle</button>
        <button onClick={()=>dispatch({type:ACTIONS.DELETE,payload:{id:todo.id}})}>delete</button>
        
    </div>
  )
}

export default Todo