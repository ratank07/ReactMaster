import React, { useState } from 'react';
import Person1 from "../Person/person";
const Appfun = props => {
  const [personState, setpersonState] = useState({
    person: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 27 },
      { name: "Manumove", age: 7 },
    ]
  });
//   this.onCLickChanged = () => {
//     this.setpersonState({person: [
//         { name: "Maxmelon", age: 26 },
//         { name: "Manu", age: 27 },
//         { name: "Manumove", age: 7 },
//       ]})
// }

  return (
    <div className="App">
      <button onClick={ ''} >Switch Name</button>
      <h1>HI this is jsx h1 will create Element</h1>
      <Person1
        name={personState.person[0].name}
        age={personState.person[0].age}
      />
      <Person1
        name={personState.person[1].name}
        age={personState.person[1].age}
      />
      <Person1 /> <Person1 name="ketan">this diff flavor</Person1>
    </div>
  );
};

export default Appfun;


