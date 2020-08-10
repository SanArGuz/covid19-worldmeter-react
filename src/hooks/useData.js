import { useState, useEffect } from 'react'

const useData = URL => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(URL)
      .then(resp => resp.json())
      .then(response => setData(response))
  }, [])
  return data
}

export default useData
