import React, {Component} from 'react'

class ConditionRenderingUsingIfElse extends Component {
  constructor(props){
    super(props)
    this.state={
      isLoggedIn: false
    }
  }
  render(){
    if(this.state.isLoggedIn){
      return <div>Conditional Rendering Using If Else Condition :  Welcome Aarav</div>
    }else{
      return <div>Conditional Rendering Using If Else Condition : Welcome Aayansh</div>
    }
  }
}

export default ConditionRenderingUsingIfElse
