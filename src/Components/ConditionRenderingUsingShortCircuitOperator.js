import React, {Component} from 'react'

class ConditionRenderingUsingShortCircuitOperator extends Component {
  constructor(props){
    super(props)
    this.state={
      isLoggedIn: true
    }
  }
  render(){
    return(
      this.state.isLoggedIn &&
      ( <div>Conditional Rendering Using Short Circuit Operator :  Welcome Aarav</div> )
    )
  }
}

export default ConditionRenderingUsingShortCircuitOperator
