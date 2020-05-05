import React from 'react'
import './person.css'
const person = (props) => { 
return (
<div className="Person">
<p onClick={props.click}>I'm a {props.name}! and i'm {props.age} yera old</p> 
<p>{props.children}</p>
<input type="text" onChange={props.changed} value={props.name}/>
</div> 
) 
}

export default person;
