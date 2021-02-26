import React, { Component } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';


class Persons extends Component {

  static getDerivedStateFromProps(props, state){
    console.log('[Persons.js] getDerivedStateFromProps');
    return state;
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  render() {
    console.log('[Person.js] rendering ...', this.props);
    return this.props.persons.map((person, index) => {
      return <ErrorBoundary key={person.id}>
        <Person
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, person.id)}
          name={person.name}
          age={person.age} />
      </ErrorBoundary>
    })
  };
}



export default Persons;