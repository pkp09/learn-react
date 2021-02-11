import React, {Component} from 'react'

class HandlePropsUsingClass extends Component{
    render(){
        return(
        <div>
            <h3>This is {this.props.name} and Age is {this.props.age}</h3>
            <p> {this.props.children}</p>
        </div>
        )
    }
}

export default HandlePropsUsingClass