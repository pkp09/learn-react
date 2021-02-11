import React, {Component} from 'react'

class EventBind extends Component{
  constructor(){
    super()
    this.state={
      message1:"Hello Message1",
      message2:"Hello Message2",
      message3:"Hello Message3",
      message4:"Hello Message4"
    }
    this.eventBinding3 = this.eventBinding3.bind(this)
  }
  eventBinding1(){
    this.setState({
      message1: 'Bye Bye Message 1'
    })
    console.log("Event Binding 1")
  }

  eventBinding2(){
    this.setState({
      message2: 'Bye Bye Message2'
    })
    console.log("Event Binding 2")
  }

  eventBinding3(){
    this.setState({
      message3: 'Bye Bye Message3'
    })
    console.log("Event Binding 3")
  }

  eventBinding4 = () => {
    this.setState({
      message4: 'Bye Bye Message4'
    })
  }
  render(){
    return (
      <div>
      message1 : Using Event Binding in Bind function : {this.state.message1}
      <button onClick={this.eventBinding1.bind(this)}>Click</button>
      <br></br>
      message2 : Using Event Binding in Arrow Function : {this.state.message2}
      <button onClick={() => this.eventBinding2()}>Click</button>
      <br></br>
      message3 : Using Event Binding in Class Constructor : {this.state.message3}
      <button onClick={this.eventBinding3}>Click</button>
      <br></br>
      message4 : Using Event Binding in Class Property : {this.state.message4}
      <button onClick={this.eventBinding4}>Click</button>
      </div>
    )
  }
}

export default EventBind
