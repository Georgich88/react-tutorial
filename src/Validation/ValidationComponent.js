import React, { Component } from 'react';


class ValidationComponent extends Component {

    constructor(props) {
        super(props);
        this.validationMessage = props.validationMessage;
    }

    render(){
        console.log(this.validationMessage);
        const valid = this.validationMessage.length > 5;
        const validationMessage = valid ? "It is okay" : "Text too short";

        return (
            <div className="ValidationComponent">
                <p>{validationMessage}</p>
            </div>
            )
    }
    

}

export default ValidationComponent;