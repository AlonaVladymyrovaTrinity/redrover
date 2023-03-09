import React from 'react';

const ButtonComp = ({onClickFunction, name}) => {
    return (<button onClick={onClickFunction}>{name}</button>)
}
export default ButtonComp;