import React from 'react'

export const Todoitem = ({todo,Del}) => {
    let todostyle={
        display:"flex",
        justifyContent:"space-between"
    }
    let btndiv={
        display:"flex",
        justifyContent:"space-around",
        minWidth:"120px",
        maxHeight:"32px"
    }
    return (
        <div >
        <div className="inline" style={todostyle}>
           <div style={{ overflowWrap: "break-word"}}><h5 className="ml-5" >{todo.title}</h5></div>
           <div style={btndiv}>
           <button className="btn btn-sm btn-danger" onClick={()=>{Del(todo)}}>X</button> 
           <button className="btn btn-sm btn-success" onClick={()=>{}}>Done</button>
           </div>
        </div>
           <p style={{ overflowWrap: "normal",textAlign:"left",marginLeft:"20px"}}>{todo.desc}</p>
           <hr style={{"backgroundColor":'white',width:"95%"}}/>
        </div>
    )
}
