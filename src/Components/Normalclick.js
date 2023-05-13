import { useState } from "react";
import React from 'react'

function Normalclick() {
    const [count,setcount]=useState(0);
    const handlechange=()=>{
        setcount(count+1)
    }
  return (
    <div>
        <h1>value:{count}</h1>
      <button onClick={handlechange}>Normalcomponent!</button>
    </div>
  )
}

export default Normalclick
