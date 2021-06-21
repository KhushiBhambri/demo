import React, { useState } from 'react';
import { Button,Form } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const Gettodo = ({addTodo}) => {
   let field={
        width:"70vw",
        display:"flex",
       margin:"auto",
       boxShadow:"3px 3px #838996"
    }
    let btnn={
        marginLeft:"15px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        maxHeight:"50px",
        maxWidth:"50px",
        height: "50px",
        width: "50px",
        fontSize: "20px",      
        color: "#fff",
        backgroundColor: "#838996",
        fontWeight: 600,
        border:" 2px solid aliceblue",
        boxShadow:"3px 3px 5px  #838996"
    }
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

   
  const submit = (e) => {
        e.preventDefault();
        if (!title) {
            alert("Todo Title is Necessary");
        }
        else {
            const Todo = {
                title: title,
                desc: desc,
                done:0
              }
            addTodo(Todo);
            setTitle("");
            setDesc("");
        }
    }
    return (
   <div >
   <Form  onSubmit={submit}>
    <h4 style={{textShadow: "2px 1px 2px #838996"}}>Add Todos</h4>
    <div style={{display:"flex", justifyContent:"center",alignItems:"center",}}>
    <div className="box" >
        <Form.Group controlId="formBasicEmail" style={{marginTop:"1rem"}}>
            {/* <Form.Label>Todo Title</Form.Label> */}
            <Form.Control style={field} type="text" placeholder="Enter a Todo"   autoComplete="off" value={title}  onChange={(e) => setTitle(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            {/* <Form.Label>Enter Desc</Form.Label> */}
            <Form.Control style={field} type="text" placeholder="Briefly Specify the Task here"   autoComplete="off" value={desc} onChange={(e) => setDesc(e.target.value)}/>
        </Form.Group>
    </div>
    <Button variant="primary" type="submit"className=" btn-sm" style={btnn}>Add</Button>
  </div>
  </Form>
  </div>
    )
}
