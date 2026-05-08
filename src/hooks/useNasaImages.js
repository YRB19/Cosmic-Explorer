import { useState, useEffect } from 'react'
import { fetchNasaImages } from '../services/nasaApi'


export function useNasaImages(query, count = 5) {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {

    if (!query) {
      setImages([])
      setLoading(false)
      setError(null)
      return
    }
    let cancelled = false

    const run = async () => {
      setLoading(true)
      setError(null)

      try {
        const results = await fetchNasaImages(query, count)
        if (!cancelled) {
          setImages(results)
        }
      } catch (err) {
        if (!cancelled) {
          console.warn('NASA image fetch failed:', err.message)
          setError('Could not load NASA images. Check your internet connection.')
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    run()


    return () => {
      cancelled = true
    }
  }, [query, count])

  return { images, loading, error }
}

