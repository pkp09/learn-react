import React from 'react'

function onClickEventHandler() {
    function clickEvent(){
        console.log('Button Clicked')
    }

    return(
        <div>
            <button onClick={clickEvent}>Click Event</button>
        </div>
    );
}

export default onClickEventHandler