import React, {Component} from 'react'

class ConditionRenderingUsingTernaryCondtionalOperator extends Component {
  constructor(props){
    super(props)
    this.state={
      isLoggedIn: true
    }
  }
  render(){
    return(
      this.state.isLoggedIn ?
      ( <div>Conditional Rendering Using Ternary Conditional Operator :  Welcome Aarav</div> )
      : ( <div>Conditional Rendering Using Ternary Conditional Operator : Welcome Aayansh</div> )
    )
  }
}

export default ConditionRenderingUsingTernaryCondtionalOperator
