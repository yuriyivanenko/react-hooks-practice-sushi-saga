import React, { useEffect, useState } from 'react'
import MoreButton from './MoreButton'
import Sushi from './Sushi'

function SushiContainer({ handleEatenSushi, budget }) {
  const [sushiList, setSushiList] = useState(null)
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(4)

  useEffect(() => {
    const fetchSushi = async () => {
      try {
        const response = await fetch('http://localhost:3001/sushis')

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        setSushiList(data)
      } catch (error) {
        alert(error)
      }
    }

    fetchSushi()
  }, [])

  const handleMoreBtnClick = () => {
    setStartIndex(startIndex + 4)
    setEndIndex(endIndex + 4)
  }

  if (!sushiList) return <h2>Loading...</h2>

  return (
    <div className='belt'>
      {sushiList.slice(startIndex, endIndex).map((sushi) => {
        return <Sushi key={`sushi${sushi.id}`} handleEatenSushi={handleEatenSushi} sushiInfo={sushi} budget={budget} />
      })}
      <MoreButton handleBtnClick={handleMoreBtnClick} />
    </div>
  )
}

export default SushiContainer
