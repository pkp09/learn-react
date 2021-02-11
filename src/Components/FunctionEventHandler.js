import React from 'react'

function clickEventHandler(){
  function clickHandler(){
    console.log('Click Event Handler using function')
  }
  return(
    <div>
      Click Event Handler using function
      <button onClick={clickHandler}>Click Event</button>
    </div>
  )
}
export default clickEventHandler
