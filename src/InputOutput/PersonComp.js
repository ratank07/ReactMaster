import React from 'react'
import './UserOutput.css'

const PersonComp = (props) => {
    return (
        <div className= "OutPutdiv">
            <p onClick={props.click}>Name : {props.name}</p>
            <p>Age :  {props.age}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default PersonComp;