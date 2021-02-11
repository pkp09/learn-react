import React from 'react'

const DestructuringInFunctionBody = (props) => {
  const {name, heroName} = props
  return (
    <div>
      <h1> DestructuringInFunctionBody {name} a.k.a. {heroName}</h1>
    </div>
  )
}
export default DestructuringInFunctionBody
