import React, { Component } from 'react';
import './App.css';
import './UdemyComponent/Styling.css'

import ConditionalRendering from './UdemyComponent/ConditionalRendering'

class App2ConditionalRendering extends Component {
  state = {
    persons :[
      {name: 'Aarav', age:3},
      {name: 'Ayansh', age:2}
    ],
    userName: "Aarav",
    showPerson: false
  }
  togglePersonHandler = () =>{
    const v1 = this.state.showPerson;
    this.setState({
      showPerson: !v1      
    })
  }
  changeHandler = () =>{
    console.log("Onchange handler has nbeen called");
  }

  deleteHandler = (personIndex) => {
    const personsConst = this.state.persons;
    personsConst.splice(personIndex, 1);
    this.setState({
      persons:personsConst
    })
  }
  render() {
    let showPerson = null;
    let showPersonUsingMap = null;

    if(this.state.showPerson){
    
      showPersonUsingMap = (
        this.state.persons.map( (person, index) => {
          return ( 
          <div className="style">
            <h2>Iterate Array using map function</h2>
            <ConditionalRendering 
            name={person.name}
              age={person.age}
              changed={this.changeHandler}
              click={() => this.deleteHandler(index)}/>
          </div>)
        })
      )

      showPerson = (
      <div>
        <h2>Toggel Using JS way</h2>
        <div className="style">
          <ConditionalRendering 
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} 
            changed={this.changeHandler} />
          </div>
          <div className="style">
          <ConditionalRendering 
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.changeHandler} />
          </div>
        </div>)
    }
    return (
      <div className="App">
        <h1>This is App1</h1>

        <p>===============================================================</p>
        <button onClick={this.togglePersonHandler} className="style">Toggle Person</button>
        {
        this.state.showPerson ?
        <div>
          <h2>Toggel Using Ternary Operator</h2>
          <div className="style">
            <ConditionalRendering 
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              changed={this.changeHandler} />
            </div>
            <div className="style">
            <ConditionalRendering 
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              changed={this.changeHandler} />
            </div>
          </div> : null
        } 
        
        {showPerson}
        
        {showPersonUsingMap}
      </div>
    );
  }
}
export default App2ConditionalRendering;