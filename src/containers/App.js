import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import AuthContext from "../context/auth-context";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
    this.state = {
      persons: [
        { id: "0000001", name: "Max", age: Math.floor(Math.random() * 30) },
        { id: "0000002", name: "Manu", age: Math.floor(Math.random() * 30) },
        {
          id: "0000003",
          name: "Stepahnie",
          age: Math.floor(Math.random() * 30),
        },
      ],
      otherState: "some other value",
      showPersons: false,
      showCockpit: true,
      validationMessage: "",
      chars: "",
      changeCounter: 0,
      authenticated: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // componentWillMount() {
  //   console.log("[App.js] componentWillMount");
  // }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id; // error testing
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return { persons: persons, changeCounter: prevState.changeCounter + 1 };
    });
  };

  validatedTextChangedHandler = (event) => {
    console.log(event.target.value);
    this.setState({ validationMessage: event.target.value });
  };

  deleteCharHandler = (index) => {
    const chars = [...this.state.chars];
    chars.splice(index, 1);
    this.setState({ chars: chars.join("") });
  };

  charsChangedHandler = (event) => {
    this.setState({ chars: event.target.value });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log("[App.js] rendering ...");
    let persons =
      this.state.showPersons === true ? (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      ) : null;
    console.log();
    return (
      <div className="App">
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              chars={this.state.chars}
              charsChanged={this.charsChangedHandler}
              charDeleted={this.deleteCharHandler}
              textChagned={this.validatedTextChangedHandler}
              validationMessage={this.state.validationMessage}
              clicked={this.togglePersonHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
