import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchSushi = async () => {
      try {
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        setData(
          data.map((item) => {
            return {
              ...item,
              isEaten: false,
            }
          })
        )
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchSushi()
  }, [url])

  return { data, loading, error }
}

export default useFetch
