import React from 'react'
import Person from './Person'

function ListOfObjectsRendering () {
  const persons = [
    {
      name: 'Aarav',
      age: '3',
      skill: 'Dancing'
    }, {
      name: 'Aayansh',
      age: '2',
      skill: 'Singing'
    }
  ]

  const personsList = persons.map(person => (<Person person={person} key={person.skill} />))

  return(
    <div>
      <h2>From Person.js</h2>
      {personsList}
    </div>
    )
}

export default ListOfObjectsRendering
