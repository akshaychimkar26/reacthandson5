import React, { useState } from 'react'
function Hoc(WrappedComponent) {
    function HocComponent(){
        const[count,setCount]=useState(0);
        const handleSubmit=()=>{
            setCount(count+1);
        }
  return (
    <div>
      <WrappedComponent value={count} submit={handleSubmit}></WrappedComponent>
    </div>
  )
}
return HocComponent;
}

export default Hoc;
