import React, { useState } from 'react';
import { Button,Form } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const Gettodo = ({addTodo}) => {
   let field={
        width:"75vw",
        display:"flex",
       margin:"auto"
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
              }
            addTodo(Todo);
            setTitle("");
            setDesc("");
        }
    }
    return (
   <div>
   <Form  onSubmit={submit}>
    <h4>Add Todos</h4>
    <Form.Group controlId="formBasicEmail">
        {/* <Form.Label>Todo Title</Form.Label> */}
        <Form.Control style={field} type="text" placeholder="Enter a Todo"   autoComplete="off" value={title}  onChange={(e) => setTitle(e.target.value)}/>
    </Form.Group>
    <Form.Group controlId="formBasicPassword">
        {/* <Form.Label>Enter Desc</Form.Label> */}
        <Form.Control style={field} type="text" placeholder="Briefly Specify the Task here"   autoComplete="off" value={desc} onChange={(e) => setDesc(e.target.value)}/>
    </Form.Group>
    <Button variant="primary" type="submit"className="btn btn-sm btn-warning">Submit</Button>
  </Form>
  </div>
    )
}
