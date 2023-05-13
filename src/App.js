import React from 'react'
import PureCompo from './Components/PureCompo'
import Onclick from './Components/Onclick'
import Onover from './Components/Onover'
import Normalclick from './Components/Normalclick'
import "./style5.css"

function App() {
  return (
    <div>
      <h1 className='h1'>HOC</h1>
      <div className='hoc'>
      <Onclick/>
      <Onover/>
      </div>
      
      <div className='normclick'><Normalclick/></div>
      
      <div className='purecompo'><PureCompo/></div>
    </div>
  )
}

export default App
