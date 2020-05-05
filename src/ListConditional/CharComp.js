import React from 'react'

const CharComp = (props) => {
    const style = {
        //  'width':'25%',
        //  'text-align':'center'
        border:"1px solid black",
        // width: '25%',
        margin: '6px',
        backgroundColor: '#bbc',
        padding:'6px',
        cursor: 'pointer',
        display:'inline-block'
     }
return <p style= {style} onClick={props.click}>{props.char}</p>
}

export default CharComp;