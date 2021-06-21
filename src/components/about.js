import React from 'react'
 import image from './image.png';

export const About = () => {
    let para={
       "textAlign":"justify",
       "marginLeft":"5%",
       "marginRight":"5%"
    }
    return (
        <div>
            <h3 className="mt-3 heading">This is a <span>Task Manager Application or  </span>Todo App.</h3>
            <p style={para}> 
                 Dear User,<br/>You are Welcome to This Task Managing Application. It is quite User Friendly.
                 All you need to do is to give the Task Title and its Description(if Required) and Click the Add Button.
                The task gets Added to the Todo List.
                <br/>After completion you can click the delete button to clear it from the list or click the done button to mark it as done.
                The choice completely depends on user.
                <br/>**Note: you can also Keep the task for next time all you need to do is click the done button again to mark it as undone.
                <br/>Hope U like this Simple webApp !
                </p>
                <img src={image} alt=""height="50%" width="70%"/>
            <hr style={{"backgroundColor":'white',width:"90%"}}/>
            <h3 className="mt-3">Know the Creator</h3>
            <p style={para} className="mb-5">
                I am a Software Developer with profound interest in designing Web Apps.<br/>
                I believe in the Principle of Learn and Grow.
                Being fascinated and passionate about Tech world, I am pursuing Graduation In Computer Science and Engineering.
                <br/>
                With Knowldege of various programming languages like C, C++, Python, Java and JavaScript, I acquired Skills in Data Structures, DataBase Management Systems and Machine Learning. 
                Also an active member of various Tech socities like DSC, WWC and Social Organisations like NCC and Art of Living.
                <br/><br/>Get connected with me if you like!
                </p>
        </div>
    )
}

  

