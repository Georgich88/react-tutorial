import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import ValidationComponent from './Validation/ValidationComponent'
import CharComponent from './Char/CharComponent';
import styled from 'styled-components'


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

class App extends Component {

  state = {
    persons: [
      { id: '0000001', name: 'Max', age: Math.floor(Math.random() * 30) },
      { id: '0000002', name: 'Manu', age: Math.floor(Math.random() * 30) },
      { id: '0000003', name: 'Stepahnie', age: Math.floor(Math.random() * 30) }
    ],
    otherState: 'some other value',
    showPersons: false,
    validationMessage: '',
    chars: ''
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons })
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person

    this.setState({ persons: persons })
  }

  validatedTextChangedHandler = (event) => {
    console.log(event.target.value);
    this.setState({ validationMessage: event.target.value })
  }

  deleteCharHandler = (index) => {
    const chars = [...this.state.chars];
    chars.splice(index, 1);
    this.setState({ chars: chars.join('') })
  }

  charsChangedHandler = (event) => {
    this.setState({ chars: event.target.value })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {

    let persons = this.state.showPersons === true ?
      (<div>
        {this.state.persons.map((person, index) => {
          return <Person
            click={() => this.deletePersonHandler(index)}
            changed={(event) => this.nameChangedHandler(event, person.id)}
            name={person.name}
            age={person.age}
            key={person.id} />
        })}
      </div>) : null


    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    let chars = (<div>{
      [...this.state.chars].map((char, index) => {
        return <CharComponent
          click={() => this.deleteCharHandler(index)}
          char={char} />
      })}</div>
    );

    return (

      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <h2>Validation task:</h2>
        <input type="text" onChange={this.validatedTextChangedHandler} />
        <ValidationComponent
          validationMessage={this.state.validationMessage}
          key={this.state.validationMessage} />
        <p value={this.state.validationMessage} />
        <h2>Char task:</h2>
        <input
          type="text"
          onChange={this.charsChangedHandler}
          value={this.state.chars} />
        {chars}
        <br />
        <StyledButton alt={this.state.showPersons} 
          onClick={this.togglePersonHandler}>
          Toggle People
        </StyledButton>
        {persons}
      </div>

    )
  };

}

export default App;
