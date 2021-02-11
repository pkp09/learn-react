import React, {Component} from 'react'

class ClassEventHadler extends Component{
  clickEventHandler(){
    console.log("Class Event Handler")
  }
  render(){
    return (
    <div>
      <h1>ClassEventHadler</h1>
      <button onClick={this.clickEventHandler}>Class Event Handler </button>
    </div>
  )
  }
}

export default ClassEventHadler
