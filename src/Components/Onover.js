import React from 'react'
import Hoc from './Hoc'
function Onover(props) {
  return (
    <div>
      <h1>value:{props.value}</h1>
      <button onMouseOver={props.submit}>Click!</button>
    </div>
  )
}

export default Hoc (Onover)
