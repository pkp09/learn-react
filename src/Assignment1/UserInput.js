import React from "react"

import './UserInput.css'

const UserInput = (props) => {
    

    return( 
        <div>
            Input Name : <input type="text" 
            value={props.currentName} 
            onChange={props.changed}
            className='inputStyle'
            />
        </div>
    )
}

export default UserInput