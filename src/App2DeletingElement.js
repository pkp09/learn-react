import React, { Component } from 'react';
import './App.css';
import './UdemyComponent/Styling.css'

import ConditionalRendering from './UdemyComponent/ConditionalRendering'

class App2DeletingElement extends Component {
  state = {
    persons :[
      {name: 'Aarav', age:3, id:1},
      {name: 'Ayansh', age:2, id:2}
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
  changeHandler = (event, id) =>{
    console.log("Onchange handler has been called");
    const personIndex = this.state.persons.findIndex(p => {
      return p.id===id;
    });
    
    const person = {...this.state.persons[personIndex]};

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const tempPersons = [...this.state.persons];
    tempPersons[personIndex] = person;

    this.setState({
      persons:tempPersons
    })

    // this.setState({
     // persons : [
     //   {name: event.target.value, age:3, id:1},
     //   {name: event.target.value, age:2, id:2}
     // ]
    // })
  }

  deleteHandler = (personIndex) => {
    // const personsConst = this.state.persons;
    // const personsConst = this.state.persons.slice();
    const personsConst = [...this.state.persons];
    personsConst.splice(personIndex, 1);
    this.setState({
      persons:personsConst
    })
    
  }

  reInitializePersonHandler = () => {
    console.log("Reinitializing Persons Array");
    this.setState({
      persons: [
        {name: 'Aarav', age:3, id:1},
        {name: 'Ayansh', age:2, id:2}
      ]
    })
  }
  render() {
    let showPersonUsingMap = null;
    let showReInitializeButton = null;

    if(this.state.showPerson){
      showPersonUsingMap = (
        this.state.persons.map( (person, index) => {
          return ( 
            <div className="style" key={person.id}>
              <h2>Iterate Array using map function</h2>
              <ConditionalRendering 
              name={person.name}
                age={person.age}
                changed={(event) => this.changeHandler(event, person.id)}
                click={() => this.deleteHandler(index)}
                />
            </div>
          )
        })
      )
    }
      
    if(this.state.persons.length === 0){
      console.log("length of Persons is 0")
      showReInitializeButton = (
        <button onClick={this.reInitializePersonHandler} className="style">ReInitialize Person</button>
      )
    }

    return (
      <div className="App">
        <h1>This is App1</h1>

        <p>===============================================================</p>
        <button onClick={this.togglePersonHandler} className="style">Toggle Person</button>
        
        {showPersonUsingMap}
        {showReInitializeButton}
      </div>
    );
  }
}
export default App2DeletingElement;