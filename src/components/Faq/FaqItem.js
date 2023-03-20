import React from "react"

const FaqItem = ({ heading, content }) => {
  return (
    <div className="faq-item w-full md:w-1/2 py-4 lg:pr-6 mb-4">
      <h3 className="faq-question h5">{heading}</h3>
      <p className="faq-answer">{content}</p>
    </div>
  )
}

export default FaqItem
