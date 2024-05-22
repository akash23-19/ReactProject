import Chai from "./Chai";
import {useState} from 'react';

function App() {


  let [counter, setCounter]=useState(15)
  //let counter=15
  
  const addValue  = () => {
    //console.log("value added",counter);
    setCounter(counter +1)

  }
    
  const removeValue = () =>{
    setCounter(counter-1)
  }

  return (
    <>
    <h1>Chai nn react</h1>
    <h2>counter value : {counter}</h2>
    <button onClick={addValue}>Add value {counter}</button>
    <br></br>
    <button onClick={removeValue}>Remove value{counter}</button>

    </>
  );
}

export default App;
