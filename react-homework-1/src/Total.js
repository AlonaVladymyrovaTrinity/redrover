import React from "react";
let Total = (props) => {
    let Summ=0;
    const list = props.list;
    list.map((e) => 
    Summ+=e.exercises)
    return(<p>Number of exercises {Summ}</p>)
}
export default Total;