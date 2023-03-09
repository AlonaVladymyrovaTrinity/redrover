import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const App = () => {
  const course = 'Half Stack application development'
  const list = [
    {exercises: 10, part: 'Fundamentals of React'},
    {exercises: 7, part: 'Using props to pass data'},
    {exercises: 14, part: 'State of a component'}
  ];

  return (
    <div>
      <Header course={course}/>
      <Content list={list}/>
      <Total list={list}/>
    </div>
  )
}

export default App;
