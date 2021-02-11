import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './Assignment2/ValidationComponent'
import CharComponent from './Assignment2/CharComponent'

class AppAssignment2 extends Component {
  state = {
    valLength: 0, 
    value1: "Asd"
  }

  countLength = (event) => {
    this.setState({
      valLength: event.target.value.length,
      value1 : event.target.value
    })
  }

  deleteHandler = (valIndex) => {
    const valConst = [...this.state.value1];
    valConst.splice(valIndex, 1);
    // Join is used for converting Array to String
    const updatedVal = valConst.join('');
    this.setState({
      value1:updatedVal
    })


  }
  
  render() {
    let charComp = "";
    let val1 = [...this.state.value1]
    charComp = (
     val1.map((val, index) => {
       return ( <CharComponent name={val} 
        click={() => this.deleteHandler(index) }
        key={index}
        /> )
      })
    )

    // const charList = this.state.value1.split('').map(ch => {
      // return <CharComponent name={ch} />
    // })
    return (
      
      <div className="App">
        <h1>This is AppAssignment2</h1>
        <hr />
        Input some value: 
        <input type="text" 
          onChange={(event) => this.countLength(event)} 
          value={this.state.value1}/>

        <p> AppAssignment2 **** Length of Input is : {this.state.valLength}</p>

        <ValidationComponent len={this.state.value1.length} />
        <p>============================</p>
        {charComp}
      </div>
    );
  }
}
export default AppAssignment2;