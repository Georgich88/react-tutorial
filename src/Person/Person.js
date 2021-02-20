import React from 'react';

import './Person.css'

const person = (props) => {
    return (
    <div className="Person">
        <p onClick={props.click}>I'm {props.name} and I am {props.age}!</p>
        <input type="text" onChange={props.changed} value={props.name}/>
        <small>{props.children}</small>
    </div>
    )
}

export default person;