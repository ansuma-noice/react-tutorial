import React, { useReducer, useState } from "react";
import Todo from "./Todo";

export const ACTIONS={
    ADD:'add',
    DELETE:'minus',
    TOGGLE:'toggle'
}


function reducer(todos,action){
    switch(action.type){
        case ACTIONS.ADD:
            return[...todos,newTodo(action.payload.name)]

        case ACTIONS.TOGGLE:
            return todos.map(todo=>{
                if(todo.id === action.payload.id){
                    return {...todo,complete: !todo.complete}
                }
                return todo
            })
        case ACTIONS.DELETE:
            return todos.filter(todo=> todo.id !== action.payload.id)  
        default:
            return todos      
    }
}

function newTodo(name){
    return { id:Date.now(),name:name,complete:false}
}

export default function App() {
    
    const [todos,dispatch]=useReducer(reducer,[])
    const [name,setname]=useState('')

  function handleSubmit(e){
    e.preventDefault()
    dispatch({type:ACTIONS.ADD,payload:{name:name}})
    setname('')
  }


    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' value={name} onChange={e=>setname(e.target.value)}/>
            </form>
            {todos.map(todo=>{
                return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
            })}

        </>
    )
}