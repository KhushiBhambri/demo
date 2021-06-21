
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// importing same names for named export and multiple components 
//import { Headersearch }  from "./components/header";  

import { Header }  from "./components/header";  
import { About } from "./components/about";  
// import { Contact } from "./components/contact";
import { Todos } from "./components/todos";
import { Gettodo} from "./components/form";
import { Footer } from "./components/footer";

import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
//import * as Abc from './components/header';   
// use as  <ALL.Headersearch/>     // use anything as a name alias instead of "ALL"

//any name given without curly braces for default export single component
// like -- import head  from "./components/header";  

function App() {
 
   let init_todo
   if (localStorage.getItem("todos") === null) {
       init_todo = [];
     }
   else {
     init_todo = JSON.parse(localStorage.getItem("todos"));
   }

   const  [todos,setTodos]=useState(init_todo);
    useEffect(()=>{
      localStorage.setItem('todos',JSON.stringify(todos));
    },[todos])
  

  const addTodo=(Todo)=>{
    setTodos([...todos, Todo]);
  }

  const Del=(Todo)=>{
    setTodos(todos.filter((e) => {
      return e !== Todo;
    }));
  }

  const Complete=(Todo)=>{
    (Todo.done)?Todo.done=0:Todo.done=1;
    setTodos(todos.filter((e) => {
      return true;
    }));
  }

  return (
    <div className="App">
    <Router>
      <Header title="My Todo List"/>
      <Switch>
        
      <Route exact path="/about">
            <About />
      </Route> 

      {/* <Route path="/contact" component={Contact} />  */}

      <Route  path='/' render={()=>{       
        // in particular exact path :)
          return(
            <>
              <Gettodo addTodo={addTodo}/>
              <Todos  todos={todos} Complete={Complete} Del={Del}/>
            </>
          )} }>
      </Route>

      </Switch>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
