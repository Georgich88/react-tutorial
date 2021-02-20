import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import React, { Component } from 'react';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: Math.floor(Math.random() * 30) },
      { name: 'Manu', age: Math.floor(Math.random() * 30) },
      { name: 'Stepahnie', age: Math.floor(Math.random() * 30) }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    //console.log('Was clicked')
    // DO NOT DO THIES: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: Math.floor(Math.random() * 30) },
        { name: 'Manu', age: Math.floor(Math.random() * 30) },
        { name: 'Stepahnie', age: Math.floor(Math.random() * 30) }
      ]
    })
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: Math.floor(Math.random() * 30) },
        { name: event.target.value, age: Math.floor(Math.random() * 30) },
        { name: 'Stepahnie', age: Math.floor(Math.random() * 30) }
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (

      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Maximilian')}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changed={this.nameChangedHandler} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Maximus')}
          changed={this.nameChangedHandler} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}> My Hobbies: Racing</Person>
      </div>
    )
  };

}

export default App;
