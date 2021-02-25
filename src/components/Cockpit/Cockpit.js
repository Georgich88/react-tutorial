
import React from 'react';
import styled from 'styled-components'
import CharComponent from '../Char/CharComponent';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1x solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover: {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

const cockpit = (props) => {


    const classes = []
    if (props.persons.length <= 2) {
      classes.push('red');
    }

    if (props.persons.length <= 1) {
      classes.push('bold');
    }

    let chars = (<div>{
        [...props.chars].map((char, index) => {
          return <CharComponent
            click={() => props.charDeleted(index)}
            char={char} />
        })}</div>
      );

    return (<div>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <h2>Char task:</h2>
        <input
            type="text"
            onChange={props.charsChanged}
            value={props.chars} />
        {chars}
        <br />
        <StyledButton alt={props.showPersons}
            onClick={props.clicked}>
            Toggle People
        </StyledButton>
    </div>);
};

export default cockpit 