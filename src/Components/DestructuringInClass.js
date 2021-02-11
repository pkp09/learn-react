import React, {Component} from 'react'

class DestructuringInClass extends Component {
  constructor(){
    super()
    this.state = {
      state1:0,
      state2:1
    }
  }
  changeState(){
    this.setState({
      state1: this.state.state1 + 1,
      state2: this.state.state2 * 2
    })
  }
  render(){
    const {name, heroName} = this.props
    const {state1, state2} = this.state
    return(
      <div>
        <h1> Hello DestructuringInClass {name} a.k.a. {heroName}</h1>
        <h2>
          Change State Value
          <button onClick={() => this.changeState()}>{this.state.state2} ChangeState {this.state.state1}</button>
        </h2>
      </div>
    )
  }
}

export default DestructuringInClass
