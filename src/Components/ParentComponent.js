import React, {Component} from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  constructor(props){
    super(props)

    this.state = {
      parentName: 'Parent'
    }

    this.greetParent1 = this.greetParent1.bind(this)
    this.greetParent2 = this.greetParent2.bind(this)
  }

  greetParent1(){
    alert(`Hello ${this.state.parentName}`)
  }

  greetParent2(childName){
    alert(`Hello ${this.state.parentName} from ${childName}`)
  }
  //   <ChildComponent greetHandler1={this.greetParent1}/>
  render(){
    return (
      <div>

        <ChildComponent greetHandler2={this.greetParent2}/>
      </div>
    )
  }
}

export default ParentComponent
