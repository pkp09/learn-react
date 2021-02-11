import React from 'react'

const HelloWithoutJSX = () => {
  return React.createElement('div', {className:'Hello'}, React.createElement('h1',null, 'HelloWithoutJSX'))
}

export default HelloWithoutJSX
