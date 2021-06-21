import React from 'react'

export const Todoitem = ({todo,Complete,Del}) => {
    let todostyle={
        display:"flex",
        justifyContent:"space-between"
    }
    if(todo.done===1) {
            todostyle={
            display:"flex",
            justifyContent:"space-between",
            backgroundColor:"#458B00"
            }
    }
    else{
        todostyle={
            display:"flex",
            justifyContent:"space-between",
            backgroundColor:"grey"
            }
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
           <button className="btn btn-sm btn-danger" style={{ borderRadius: "50%",border:"2px solid #282c34"}} onClick={()=>{Del(todo)}}>X</button> 
           <button className="btn btn-sm btn-success" style={{ borderRadius: "50%",border:"2px solid #282c34"}} onClick={()=>{Complete(todo)}}>&#10003;</button>
           </div>
        </div>
           <p style={{ overflowWrap: "normal",textAlign:"justify",marginLeft:"20px"}}>{todo.desc}</p>
           <hr style={{"backgroundColor":'white',width:"95%"}}/>
        </div>
    )
}
