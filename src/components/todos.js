import React from 'react'
import { Todoitem } from "./todoitem";

export const Todos = ({todos,Del}) => {
    return (
        <div className="container mb-5 mt-2">
          <h4 className="my-3" style={{textShadow: "2px 1px 2px #838996"}}>Your Todos List</h4>
          { todos.length===0? "No Todos to display":  
            todos.map((todo)=>{
                return (<Todoitem todo={todo}  Del={Del}/>)
            })
          }
        </div>
    )
}
