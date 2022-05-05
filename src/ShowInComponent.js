import React from 'react'
import useAllow from './useAllow'

export default function ShowIn({ breakpoints, fallback, children }) {
  const showChildren = useAllow(breakpoints)
  const Fallback = fallback
  return showChildren ? children : fallback ? <Fallback /> : <></>
}
