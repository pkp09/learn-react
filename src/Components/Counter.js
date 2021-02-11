import React, {Component} from 'react'

class Counter extends Component{
  constructor(){
    super();
    this.state = {
      count: 0
    }
  }
  incrementFive(){
      this.increment1()
      this.increment1()
      this.increment1()
      this.increment1()
      this.increment1()
  }

  increment1(){
    this.setState(prevState => (
      {
        count: prevState.count +1
      }
    ))
  }

  decrementFive(){
    this.decrement1()
    this.decrement1()
    this.decrement1()
    this.decrement1()
    this.decrement1()
  }

decrement1(){
  this.setState(prevState => (
    {
      count: prevState.count-1
    }
  ))
}

  increment(){
    this.setState({
      count: this.state.count+1
    }, () => {
      console.log("Callback value", this.state.count)
    })
    console.log(this.state.count)
  }

  decrement(){
    this.setState({
      count: this.state.count-1
    }, () => {
      console.log("Callback value", this.state.count)
    })
    console.log(this.state.count)
  }

  render(){
    return(
      <div>
        <button onClick={() => this.decrementFive()}>Decrement</button>
        count = {this.state.count}
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter
