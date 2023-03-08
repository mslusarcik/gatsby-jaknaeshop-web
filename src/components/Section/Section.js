import React from "react"

const Section = ({ children, className }) => {
  const classes = className ? className : ""
  return <section className={`${classes}`}>{children}</section>
}

export default Section
