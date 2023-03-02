import React from "react"

const Container = ({ children, fluid }) => {
  const containerClass = fluid ? "container-fluid" : "container"
  return <div className={`${containerClass}`}>{children}</div>
}

export default Container
