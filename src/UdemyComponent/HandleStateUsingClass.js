import React, {Component  } from "react"

class HandleStateUsingClass extends Component{
    state = {
        persons : [
            {name:'Aarav', age:3},
            {name:'Ayansh', age:2}
        ],
        otherObj : {otherObj1: 'Other Obj1', otherObj2 : 'Other Obj2' },
        otherValue: 'Other Value'
    }
    clickHandler = () => {
        console.log('Button Clicked to change State...')
        this.setState({
            persons : [
                {name:'Aarav1', age:3.1},
                {name:'Ayansh1', age:2.1}
            ]}
        )
    }
    render(){
        return(
            <div>
                <p>Value in State : {this.state.otherValue} <br></br>
                    this.state.otherObj.otherObj1 Value is : {this.state.otherObj.otherObj1} 
                    <br></br> this.state.otherObj.otherObj2 Value is : {this.state.otherObj.otherObj2}</p>
                <p>{this.state.persons[0].name} : {this.state.persons[0].age}</p>
                <p>{this.state.persons[1].name} : {this.state.persons[1].age}</p>
                <button onClick={this.clickHandler}>Change State</button>
            </div>
        )
    }
}

export default HandleStateUsingClass