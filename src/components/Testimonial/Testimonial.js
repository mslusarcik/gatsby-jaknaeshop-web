import React from "react"
import { AiFillStar } from "react-icons/ai"
import { FaQuoteLeft } from "react-icons/fa"

const Testimonial = ({ image, content, author }) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center mt-12 lg:mt-20">
      <div className="testimonial-image lg:w-[60%] sm:-mx-4 lg:mx-0 mt-4 lg:mt-0 mb-8 lg:mb-0">
        {image && <img src={image} alt="xxx"></img>}
      </div>
      <div className="testimonial-content lg:w-[30%] lg:p-4">
        <FaQuoteLeft size="48" className="mb-4 text-primary"></FaQuoteLeft>
        <p className="text-xl">
          <strong>{content || "Insert content.."}</strong>
        </p>
        <ul className="flex flex-row pl-0 mt-4 mb-1">
          <li>
            <AiFillStar className="text-primary"></AiFillStar>
          </li>
          <li>
            <AiFillStar className="text-primary"></AiFillStar>
          </li>
          <li>
            <AiFillStar className="text-primary"></AiFillStar>
          </li>
          <li>
            <AiFillStar className="text-primary"></AiFillStar>
          </li>
          <li>
            <AiFillStar className="text-primary"></AiFillStar>
          </li>
        </ul>
        <p className="font-medium">{author || "Insert author.."}</p>
      </div>
    </div>
  )
}

export default Testimonial
