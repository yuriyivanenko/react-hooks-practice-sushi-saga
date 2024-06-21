import React, { useState } from 'react'
import SushiContainer from './SushiContainer'
import Table from './Table'

const API = 'http://localhost:3001/sushis'

function App() {
  const [plates, setPlates] = useState([])
  const [budget, setBudget] = useState(100)

  const handleEatenSushi = (sushi) => {
    setPlates([...plates, sushi])
    setBudget((preValue) => preValue - sushi.price)
  }

  return (
    <div className='app'>
      <SushiContainer handleEatenSushi={handleEatenSushi} budget={budget} />
      <Table plates={plates} budget={budget} />
    </div>
  )
}

export default App
