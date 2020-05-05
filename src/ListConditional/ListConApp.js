import React, { Component } from 'react'
import ValidationComp from '../ListConditional/ValidationComp'
import CharComp from '../ListConditional/CharComp'
class ListConApp extends Component {
    state = {
        textInput: '',
        textLen: 0,
        textArr:[],
        showtag: false
    }
    getTextLenght = (event) => {
            const textArr = event.target.value.split('');
            console.log('textar',textArr);
            
            this.setState({
                textInput: event.target.value,
                textLen: event.target.value.length,
                textArr:textArr
            })
    }
    removeArrElemet = (ArEl, index) => {
        const IputArr = [...this.state.textArr];
       let SpicedArr = IputArr.splice(index, 1);
        console.log('spicedArr',SpicedArr);
        const joinedText = IputArr.join('')
        this.setState({
            textArr: IputArr,
            textInput: joinedText
        })
    //     const persons = [...this.state.textArr];
    //     persons.splice(index,1);
    //    this.setState({textArr: persons})
    }
    render() {
        return(
            <div>
                <input onChange={(event)=> this.getTextLenght(event)} value={this.state.textInput}/>
        {this.state.textLen !== 0 ? <p> Input is {this.state.textInput} and lenght {this.state.textLen}</p>
         : null}
         <ValidationComp textLen={this.state.textLen} />
        <div>{this.state.textArr.map((ArrEle,index) => {
            return <CharComp char={ArrEle}
            click={(event)=>this.removeArrElemet(event,index)}
            key={index}/>
        })}</div>
         </div>
        )
    }
}

export default ListConApp;