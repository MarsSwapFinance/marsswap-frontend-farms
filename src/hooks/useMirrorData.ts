import { useEffect, useState } from "react"

const useMirrorData = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    fetch('https://graph.mirror.finance/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: `
        {
          assets {
            symbol
            name
            prices {
              oraclePrice
              oraclePriceAt(timestamp: ${yesterday.getTime()})
            }
          }
        }
        `
      })
    })
      .then(r => r.json())
      .then(res => setData(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return {
    data,
    loading,
    error
  }
}

export default useMirrorData
