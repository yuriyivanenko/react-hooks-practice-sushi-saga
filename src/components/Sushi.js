import React, { useState } from 'react'

function Sushi({ sushiInfo: { name, img_url, price }, handleEatenSushi }) {
  const [isEaten, setIsEaten] = useState(false)

  const handlePlateClick = () => {
    if (isEaten === false) {
      setIsEaten(true)
      handleEatenSushi(name)
    }
  }
  console.log(isEaten)
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
