import React from 'react'

function HandlePropsUsingFunction(props){
    return (
        <div>
            <h3> I'm {props.name} and my age is {props.age}</h3>
            <p>{props.children}</p>
        </div>
    )
}

export default HandlePropsUsingFunction