import React from 'react'

const UserInput = (props) => {

    const inputStyle = {
            margin: "7px",
            backgroundColor: '#ccc',
            width: '25%',
            height: '20px',
            padding: '10px',
            fontSize: '20px',
            cursor: 'pointer'
            
    }
    return <input style={inputStyle} onChange={props.changed}  value={props.originalUser}/>
}

export default UserInput;