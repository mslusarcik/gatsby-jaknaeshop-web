import React from "react"

const Alert = ({ icon, heading, content }) => {
  return (
    <div>
      <div
        className="flex flex-col lg:flex-row px-4 py-8 mb-4 rounded-lg bg-blue-50 mt-2"
        role="alert"
      >
        {<span className="lg:mr-4 lg:ml-2 mb-4 lg:mb-0">{icon}</span>}
        <div className="!text-sky-600">
          <h3 className="h5 !mb-1 !text-sky-600">{heading}</h3>
          Kontaktujte mě <strong>na telefonní číslo 731 326 653.</strong>
          {content}
        </div>
      </div>
    </div>
  )
}

export default Alert
