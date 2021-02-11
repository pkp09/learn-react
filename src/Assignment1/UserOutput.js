import React from "react"
import './UserOutput.css'
const UserOutput = (props) => {
    return(
        <div className="outputStyle"> This is OutPut
            User Name is : {props.name}
            <p>Username: {props.name}</p>
            <p>I hope I'll be overwritten!</p>
        </div>
    )
}

export default UserOutput