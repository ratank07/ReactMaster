import React from 'react'

 const ValidationComp = (props) => {
     const style = {
        //  'width':'25%',
        //  'text-align':'center'
        border:"1px solid blue",
        width: '25%',
        margin: '10px auto',
        backgroundColor: 'blue',
        padding:'6px'
     }
    return ( props.textLen <= 5 ?<p style={style}>Input text too short</p>:<p>Input text too long</p>)
}

export default ValidationComp;