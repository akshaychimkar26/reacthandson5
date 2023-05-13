import React from 'react'
import Hoc from './Hoc'
function Onclick(props) {
  return (
    <div>
      <h1>value:{props.value}</h1>
      <button onClick={props.submit}>Click!</button>
    </div>
  )
}

export default Hoc (Onclick)
