import React,{ pureComponent } from 'react'
import { useState } from 'react';
import { useMemo } from 'react';

function PureCompo() {
    const [count,setcount]=useState(0);
    const memocount=useMemo(()=>count,[count])
    const handleclick=()=>{
        setcount(count+1);
    }

  return (
    <div>
        <h1>value:{memocount}</h1>
      <button onClick={handleclick}>Purecomponent!</button>
    </div>
  )
}

export default PureCompo
