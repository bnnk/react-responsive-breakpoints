import React from 'react'

import { ShowIn, useBreakPoint, useAllow } from 'react-responsive-breakpoints'
import 'react-responsive-breakpoints/dist/index.css'

const App = () => {
  const allow = useAllow(["md", "lg", "xl", "default"])

  const breakpoint = useBreakPoint()
  return <><ShowIn breakpoints={["md", "lg", "xl", "default"]} fallback={() => null}>
    <h1>I ONLY SHOW IN ["md", "lg", "xl", "default"]</h1>
  </ShowIn>
  <h1>Currently one of ["md", "lg", "xl", "default"]: {allow ? "true" : "false"}</h1>
  <h1>Current breakpoint: {breakpoint}</h1></>
}

export default App
