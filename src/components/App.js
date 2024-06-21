import React, { useState } from 'react'
import SushiContainer from './SushiContainer'
import Table from './Table'

const API = 'http://localhost:3001/sushis'

function App() {
  const [plates, setPlates] = useState([])
  const handleEatenSushi = (sushi) => {
    setPlates([...plates, sushi])
  }
  return (
    <div className='app'>
      <SushiContainer handleEatenSushi={handleEatenSushi} />
      <Table plates={plates} />
    </div>
  )
}

export default App
