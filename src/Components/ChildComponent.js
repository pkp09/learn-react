import React from 'react'

function ChildComponent(props){
  return (
    <div>
      <h3>Parent Child Using Parent Handler Method in Child Class </h3>
      <button onClick={props.greetHandler1}>Greet Parent</button>

      <br></br>
      <h3>Parent Child Using Parent Handler Method in Child Class with Parameter </h3>
      <button onClick= { () => props.greetHandler2('Child Name is : Aarav')}>Greet Parent</button>

    </div>
  )
}

export default ChildComponent
