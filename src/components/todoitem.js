import React from 'react'

export const Todoitem = ({todo,Del}) => {
    let todostyle={
        display:"flex"
    }
    return (
        <>
        <div className="inline" style={todostyle}>
           <h4 className="ml-5">{todo.title}</h4>
           <button className="btn btn-sm btn-danger" style={{position: "absolute", right: "15vw"}} onClick={()=>{Del(todo)}}>Delete</button> 
        </div>
           <p>{todo.desc}</p>
           {/* <button className="btn btn-sm btn-success mx-5" onClick={()=>{complete(todo)}}>Done</button> */}
           <hr style={{"backgroundColor":'white',width:"95%"}}/>
        </>
    )
}
