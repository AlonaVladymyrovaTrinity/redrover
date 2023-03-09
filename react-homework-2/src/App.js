import React, { useState } from "react" 
import ButtonComp from "./ButtonComp";

const App = () => {
  const [count, setCount] = useState(0);
  let increaseCount = () => {
    setCount(count + 1);
  } 
  let decreaseCount = () => {
    setCount(count - 1);
  } 
  let setCountToZero = () => {
    setCount(0);
  } 
  return (
  <>
  <p>You clicked {count} times</p>
  <ButtonComp onClickFunction={increaseCount} name="Increase"/>
  <ButtonComp onClickFunction={decreaseCount} name="Decrease"/>  
  <ButtonComp onClickFunction={setCountToZero} name="Set to zero"/>
  </>
  );
}

export default App;
