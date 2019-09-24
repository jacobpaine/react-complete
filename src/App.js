import React, { Component } from "react";
import "./App.css";
import Person from "./Person/person";

class App extends Component {
  state = {
    persons: [{ name: "Jacob", age: "36" }, { name: "Arthur Dent", age: "42" }],
    showPersons: false
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React app</h1>
        </header>
        <button onClick={this.togglePersonsHandler}> Switch Name </button>
        {this.state.showPersons === true ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            ></Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
            ></Person>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
