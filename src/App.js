import React from 'react'
import Background from './Component/Background'
import Foreground from './Component/Foreground'

const App = () => {
  return (
    <div className='relative h-screen w-full bg-white'>
      <Background/>
      <Foreground/>
    </div>
  )
}

export default App