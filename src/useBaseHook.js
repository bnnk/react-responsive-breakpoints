import { useState, useEffect } from 'react'

export default function useBaseResponsive(state) {
  const [wstate, setWState] = useState(false)
  const breakpoints = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  }
  const resState = state || {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    default: 'default'
  }

  const getResValue = (width) => {
    if (width < breakpoints.sm) {
      return resState.sm
    } else if (width < breakpoints.md) {
      return resState.md
    } else if (width < breakpoints.lg) {
      return resState.lg
    } else if (width < breakpoints.xl) {
      return resState.xl
    } else {
      return resState.default
    }
  }

  const updateDimensions = () => {
    setWState(getResValue(window.innerWidth))
  }
  useEffect(() => {
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])
  return wstate
}
