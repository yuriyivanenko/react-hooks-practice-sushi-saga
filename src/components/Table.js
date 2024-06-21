import React from 'react'

function Table({ plates = [] }) {
  const emptyPlates = plates.map((_, index) => <div key={index} className='empty-plate' style={{ top: -7 * index }} />)
  const totalSushiEaten = plates.length === 0 ? 0 : plates.reduce((acc, currentItem) => acc + currentItem.price, 0)
  return (
    <>
      <h1 className='remaining'>You have: ${100 - totalSushiEaten} remaining!</h1>
      <div className='table'>
        <div className='stack'>{emptyPlates}</div>
      </div>
    </>
  )
}

export default Table
