import React from 'react'

function Person({person}){
  return(
    <div>
    <h4>
      {person.name} : {person.age} : {person.skill}
    </h4>
    </div>
  )
}

export default Person
