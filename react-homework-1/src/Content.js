import React from "react";

let Content = (props) => {
    const list = props.list;      
    return(
    <>
    {list.map((e) =>
      <p>{e.part} {e.exercises}</p>)}
    </>
    )
}
export default Content;