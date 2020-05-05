import React from 'react'
import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className= "OutPutdiv">
            <p onClick={props.click}>UserName : {props.UserName}</p>
            <p>This is dynamic user inputs and outputs</p>
        </div>
    )
}

export default UserOutput;