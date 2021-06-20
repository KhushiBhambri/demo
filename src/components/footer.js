import React from 'react'

export const Footer = () => {
    let foot={
       position:"fixed",
       bottom:"0",
       width:"100%",
       "backgroundColor":"aliceblue",
       color:"#2a2a2a"
    }
    return (
        <div className=" py-2" style={foot}>
            Copyright &copy; Khushi Bhambri 
        </div>
    )
}
