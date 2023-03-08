import React from "react"

const Benefit = ({ icon, heading, content, className }) => {
  return (
    <>
      <div className={`benefit-item ${className || ""}`}>
        {icon || "Insert an icon"}
        <h3 className="h4">{heading || "Insert heading"}</h3>
        <p>{content || "Insert content"}</p>
      </div>
    </>
  )
}

export default Benefit
