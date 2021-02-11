import React from 'react'

const ValidationComponent = (props) => {
    let msg = "";
    if(props.len <= 5){
        msg = "Text is too short";
    }else if(props.len > 20)
        msg = "text is too long";
    else{
        msg = "Perfect string"
    }
    return(
        <div> 
            <p>Validation Component **** The length of Text is : {props.len}</p>
            <p>{msg}</p>
            <h2>Using Ternary Operator </h2>
            {props.len <= 5 ? "Text is too short" : 
                props.len > 10 ? "text is too long" : 'perfect Sting this is'}
        </div>
    )
}

export default ValidationComponent;