import React, { useState } from 'react'

function MoneyForm({ handleAddMoney }) {
  const [inputValue, setInputValue] = useState('')

  const handleChange = ({ target }) => setInputValue(target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddMoney(parseFloat(inputValue))
    setInputValue('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='number' value={inputValue} onChange={handleChange} placeholder='Enter amount' />
        <button type='submit'>Add Money</button>
      </form>
    </div>
  )
}

export default MoneyForm
