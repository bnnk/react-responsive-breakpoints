import useBaseResponsive from './useBaseHook'

const base = {
  sm: false,
  md: false,
  lg: false,
  xl: false,
  default: false
}
const makeDict = (keys, value) =>
  Object.assign({}, ...keys.map((n) => ({ [n]: value })))

export default function useAllow(breakpoints) {
  var allowed = Object.assign(base, makeDict(breakpoints || [], true))
  var value = useBaseResponsive(allowed)
  return value
}
