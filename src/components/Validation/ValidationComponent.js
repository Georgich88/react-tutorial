import React from 'react';


const validationComponent = (props) => {


    console.log(props.validationMessage);
    const valid = props.validationMessage.length > 5;
    const validationMessage = valid ? "It is okay" : "Text too short";

    return (
        <div className="ValidationComponent">
            <p>{validationMessage}</p>
        </div>
    )



}

export default validationComponent;