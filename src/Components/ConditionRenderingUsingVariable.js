import React, {Component} from 'react'

class ConditionRenderingUsingVariable extends Component {
  constructor(props){
    super(props)
    this.state={
      isLoggedIn: true
    }
  }
  render(){
    let message
    if(this.state.isLoggedIn){
      message = <div>Conditional Rendering Using Variable :  Welcome Aarav</div>
    }else{
      message = <div>Conditional Rendering Using Variable : Welcome Aayansh</div>
    }
    return <div>{message}</div>
  }
}

export default ConditionRenderingUsingVariable
