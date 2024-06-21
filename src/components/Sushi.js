import React from 'react'

function Sushi({ sushiInfo: { name, img_url, price, created_at } }) {
  return (
    <div className='sushi'>
      <div className='plate' onClick={/* Give me a callback! */ null}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : <img src={img_url} alt={name} width='100%' />}
      </div>
      <h4 className='sushi-details'>
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi
