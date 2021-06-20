import React from 'react'

export const About = () => {
    let para={
       "textAlign":"justify",
       "marginLeft":"5%",
       "marginRight":"5%"
    }
    return (
        <div>
            <h3 className="mt-3 heading">This is a <span>Task Manager Application or  </span>Todo App.</h3>
            <p style={para}> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repudiandae eos numquam laboriosam sapiente suscipit officiis, quibusdam ullam odio quod tempora 
                deserunt nostrum beatae expedita sit aut adipisci quisquam quasi neque deleniti! Odit sed libero 
                unde doloribus laborum soluta aliquid debitis odio sint modi? Fugit ullam similique, 
                voluptates suscipit adipisci laudantium perspiciatis necessitatibus alias. 
                Nobis quasi nesciunt ipsum praesentium sapiente! Doloribus!</p>
            <hr style={{"backgroundColor":'white',width:"90%"}}/>
            <h3 className="mt-3">Know the Author</h3>
            <p style={para}> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repudiandae eos numquam laboriosam sapiente suscipit officiis, quibusdam ullam odio quod tempora 
                deserunt nostrum beatae expedita sit aut adipisci quisquam quasi neque deleniti! Odit sed libero 
                unde doloribus laborum soluta aliquid debitis odio sint modi? Fugit ullam similique, 
                voluptates suscipit adipisci laudantium perspiciatis necessitatibus alias. 
                Nobis quasi nesciunt ipsum praesentium sapiente! Doloribus!</p>
        </div>
    )
}

  

