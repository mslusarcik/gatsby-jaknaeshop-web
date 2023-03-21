import { useState, useEffect } from "react"

const getWidth = () => {
  if (typeof window !== `undefined`) {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    )
  }
}
const useCurrentWidth = () => {
  let [width, setWidth] = useState()

  useEffect(() => {
    setWidth(getWidth())
  }, [])

  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId)
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setWidth(getWidth()), 150)
    }
    // set resize listener
    window.addEventListener("resize", resizeListener)

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener)
    }
  }, [])

  if (!width) {
    // Returns null on first render, so the client and server match
    return null
  }

  return width
}

export default useCurrentWidth
