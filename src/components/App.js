import React, { useState } from 'react'
import SushiContainer from './SushiContainer'
import MoneyForm from './MoneyForm'
import Table from './Table'

const API = 'http://localhost:3001/sushis'

function App() {
  const [plates, setPlates] = useState([])
  const [budget, setBudget] = useState(100)

  const handleEatenSushi = (sushi) => {
    setPlates([...plates, sushi])
    setBudget((preValue) => preValue - sushi.price)
  }

  const handleAddMoney = (money) => setBudget(budget + money)

  return (
    <div className='app'>
      <MoneyForm handleAddMoney={handleAddMoney} />
      <SushiContainer handleEatenSushi={handleEatenSushi} budget={budget} />
      <Table plates={plates} budget={budget} />
    </div>
  )
}

export default App
