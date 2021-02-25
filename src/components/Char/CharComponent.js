import React from 'react';
import './CharComponent.css'

const charComponent = (props) => {
    return (
        <button className="Char"
            onClick={props.click}>{props.char}</button>
    )
}

export default charComponent;