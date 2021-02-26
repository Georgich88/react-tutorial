import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';


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
      return p.id === id; // error testing
    });

    const person = { ...this.state.persons[personIndex] };

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
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.state.nameChangedHandler} />
      </div>) : null


    return (

      <div className="App">
        <Cockpit 
        title = {this.props.appTitle}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        chars = {this.state.chars}
        charsChanged = {this.charsChangedHandler}
        charDeleted = {this.deleteCharHandler}
        textChagned={this.validatedTextChangedHandler}
        validationMessage ={this.state.validationMessage}
        clicked = {this.togglePersonHandler}/>
        {persons}
      </div>

    )
  };

}

export default App;
