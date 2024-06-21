import React from 'react'

function LessButton({ handleBtnClick, startIndex }) {
  if (startIndex === 0)
    return (
      <button disabled onClick={handleBtnClick}>
        Less sushi!
      </button>
    )
  return <button onClick={handleBtnClick}>Less sushi!</button>
}

export default LessButton
