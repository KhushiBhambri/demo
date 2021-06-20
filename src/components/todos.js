import React from 'react'
import { Todoitem } from "./todoitem";

export const Todos = ({todos,Del}) => {
    return (
        <div className="container my-2">
          <h4 className="my-3">Your Todos List</h4>
          { todos.length===0? "No Todos to display":  
            todos.map((todo)=>{
                return (<Todoitem todo={todo}  Del={Del}/>)
            })
          }
        </div>
    )
}
