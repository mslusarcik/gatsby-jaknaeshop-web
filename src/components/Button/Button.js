import React from "react"

// Import other react stuff
import { Link } from "gatsby"

const Button = ({ target, type, className, children }) => {
  const buttonType = type ? type : "primary"
  return (
    <>
      <Link
        to={target || '#'}
        className={`btn btn-${buttonType || "primary"} ${className || ""}`}
      >
        {children}
      </Link>
    </>
  )
}
export default Button
