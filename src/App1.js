import React, { Component } from 'react';
import './App.css';

import UserInput from './Assignment1/UserInput'
import UserOutput from './Assignment1/UserOutput'


class App1 extends Component {
  state = {
    userName: "Aarav"
  }

  usernameChangeHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>This is App1</h1>

        <p>===============================================================</p>
        <UserInput 
          changed={this.usernameChangeHandler}
          currentName={this.state.userName} />

        <UserOutput name={this.state.userName} />
      </div>
    );
  }
}
export default App1;