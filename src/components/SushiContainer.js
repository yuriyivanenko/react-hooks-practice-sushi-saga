import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import MoreButton from './MoreButton'
import Sushi from './Sushi'

function SushiContainer({ handleEatenSushi, budget }) {
  const { data, loading, error } = useFetch('http://localhost:3001/sushis')
  const [sushiList, setSushiList] = useState(null)
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(4)

  useEffect(() => {
    if (data) {
      setSushiList(data)
    }
  }, [data])

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>{error}</h1>

  const handleEatSushi = (sushiToEat) => {
    setSushiList(
      sushiList.map((sushi) => {
        if (sushi.id === sushiToEat.id) {
          return {
            ...sushi,
            isEaten: true,
          }
        } else {
          return sushi
        }
      })
    )
  }

  const handleMoreBtnClick = () => {
    if (endIndex === sushiList.length) {
      setStartIndex(0)
      setEndIndex(4)
      return
    }

    setStartIndex(startIndex + 4)
    setEndIndex(endIndex + 4)
  }

  return (
    <div className='belt'>
      {sushiList.slice(startIndex, endIndex).map((sushi) => {
        return (
          <Sushi
            key={`sushi${sushi.id}`}
            handleEatSushi={handleEatSushi}
            handleEatenSushi={handleEatenSushi}
            sushiInfo={sushi}
            budget={budget}
          />
        )
      })}
      <MoreButton handleBtnClick={handleMoreBtnClick} />
    </div>
  )
}

export default SushiContainer
