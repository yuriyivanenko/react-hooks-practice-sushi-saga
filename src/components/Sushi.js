import React, { useState } from 'react'

function Sushi({ sushiInfo, handleEatenSushi, budget }) {
  const { name, img_url, price } = sushiInfo
  const [isEaten, setIsEaten] = useState(false)

  const handlePlateClick = () => {
    if (isEaten === false && budget >= price) {
      setIsEaten(true)
      handleEatenSushi(sushiInfo)
    } else if (budget < price && isEaten === false) {
      alert(`You don't have enough money!`)
    }
  }

  return (
    <div className='sushi'>
      <div className='plate' style={isEaten ? null : { cursor: 'pointer' }} onClick={handlePlateClick}>
        {isEaten ? null : <img src={img_url} alt={name} width='100%' />}
      </div>
      <h4 className='sushi-details'>
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi
