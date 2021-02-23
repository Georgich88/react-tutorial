import React from 'react';
import Radium from 'radium';
import './Person.css'

const person = (props) => {

    const style = {
        '@media (mid-width: 500px)': {
            width: '450px'
        }
    }

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age}!</p>
            <input type="text" onChange={props.changed} value={props.name} />
            <small>{props.children}</small>
        </div>
    )
}

export default Radium(person);