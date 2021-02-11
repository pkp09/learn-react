import React, {Component} from 'react'

class StateInClassComponent extends Component {
  constructor(){
    super()
    this.state = {
      message: "Value Intialized"
    }
  }
  changeMessage(){
    this.setState({
      message:'Value Changed'
    })
  }
  render(){
    return (
      <div>
        <h1>
          Welcome StateInClassComponent Value = {this.state.message}
        </h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}

export default StateInClassComponent
