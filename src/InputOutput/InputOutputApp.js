import React, { Component } from "react";
import UserInput from "./UserInput";
import UserOutput from "./UserOutput";
import PersonComp from "./PersonComp";
import ListConApp from '../ListConditional/ListConApp'
class InputOutPutApp extends Component {
  state = {
    UserName: "Ratan",
    originalUser: "Ratan",
    showhidedive: false,
    persons: [
      {id:'123', name: "Ratan K", age: 27 },
      {id:'321', name: "Akshay j", age: 26 },
      {id:'543', name: "Akash M", age: 24 },
    ],
  };
  ChangeUserName = (event) => {
    this.setState({
      UserName: event.target.value,
      showhidedive: false,
      persons: [
        { id:'123', name: "Ratan K", age: 27 },
        { id: '321', name: "Akshay j", age: 26 },
        { id: '543', name: "Akash M", age: 24 },
      ],
    });
  };
  
  deletePersonHandler = (pindex) => {
    console.log('dele person handler');
    
    const persons = [...this.state.persons];
     persons.splice(pindex,1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    console.log('personindex',personIndex);
    
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person; 
    
    this.setState({
      persons: persons
    })
  }
  showhidedive = true;
  render() {
    return (
      <div>
        <ListConApp/>
        <UserInput
          originalUser={this.state.UserName}
          changed={this.ChangeUserName}
        />
        <button
          onClick={() => 
            this.setState({ showhidedive: !this.state.showhidedive })
          }
        >
          Show or Hide Div
        </button>
        <UserOutput UserName={this.state.UserName} />
        <UserOutput UserName={this.state.UserName} />
        {this.state.showhidedive ? (
          <div>
            {this.state.persons.map((person, index) => {
              return <PersonComp
              click={()=>this.deletePersonHandler(index)}
              name={person.name}  age={person.age} key={index}
              changed = {(event)=> this.nameChangedHandler(event, person.id)} />;
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

export default InputOutPutApp;
