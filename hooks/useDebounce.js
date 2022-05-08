import { useRef } from 'react'

export default function useDebounce(fn, delay) {
  const func = fn

  const timeoutRef = useRef(null)

  function debounceFn(...args) {
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      func(args)
    }, delay)
  }

  return debounceFn
}