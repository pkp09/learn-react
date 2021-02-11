import React from 'react'
import './Style.css'

const CharComponent = (props) => {
    const inLineStyle = {
        display: 'inline-block',
        padding: '16px',
        marging: '16px',
        border: '4px solid red',
        textAlign: 'Center'
    };
    return (
        <div>
            <p> THis is CSS in file</p>
            <div className="Style"> 
                <p onClick={props.click}>Char is : {props.name} </p>
            </div> 
            <p>This is CSS in line style </p>
            <div style={inLineStyle}> 
                <p onClick={props.click}>Char is : {props.name} </p>
            </div>       
        </div>
        
    )
}

export default CharComponent