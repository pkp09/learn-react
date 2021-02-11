import React from 'react'

function NameList(){
  const names = ['Aarav', 'Aayansh', 'Pandey']
  const nameList = names.map(name => <h2 key={name}>{name} </h2>)
  return(
    <div>
      <h2>Index Based List </h2>
      <h6>{names[0]} </h6>
      <h6>{names[1]} </h6>
      <h6>{names[2]} </h6>
      <h2>Using Arrays.map() method</h2>
      <div>
      {
        nameList
      }
      </div>
    </div>
  )
}
export default NameList
