import { useCallback, useLayoutEffect, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useWindow() {
  const hasWindow = typeof window !== 'undefined'

  const getWindowDimensions = useCallback(() => {
    const windowWidth = hasWindow ? window.innerWidth : null
    const windowHeight = hasWindow ? window.innerHeight : null

    return {
      windowWidth,
      windowHeight
    }
  }, [hasWindow])

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useLayoutEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [getWindowDimensions, hasWindow])

  return windowDimensions
}
