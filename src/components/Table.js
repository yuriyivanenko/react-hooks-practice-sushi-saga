import React from 'react'

function Table({ plates = [], budget }) {
  const emptyPlates = plates.map((_, index) => <div key={index} className='empty-plate' style={{ top: -7 * index }} />)
  return (
    <>
      <h1 className='remaining'>You have: ${budget} remaining!</h1>
      <div className='table'>
        <div className='stack'>{emptyPlates}</div>
      </div>
    </>
  )
}

export default Table
