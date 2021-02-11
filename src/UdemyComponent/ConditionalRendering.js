import React from 'react'

const Person = (props) => {
    return(
        <div>
            <p onClick={props.click}>I'm {props.name} and I my age is {props.age}</p>
            {props.name} &&&&& {props.age}
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default Person