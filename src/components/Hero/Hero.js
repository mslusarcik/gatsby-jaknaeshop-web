import React from "react"

// Import components
import Button from "../Button/Button"
import useCurrentWidth from "../../hooks/useCurrentWidth"

// Import other react stuff
import { useState, useEffect } from "react"

const Hero = ({
  title,
  subtitle,
  primaryButton,
  primaryButtonType,
  primaryButtonTarget,
  secondaryButton,
  secondaryButtonType,
  secondaryButtonTarget,
  image,
  imageMdUp,
  children,
  className,
}) => {
  const [heroImage, setHeroImage] = useState(imageMdUp)
  let width = useCurrentWidth()

  useEffect(() => {
    if (width > 768) {
      setHeroImage({ imageMdUp })
    } else {
      setHeroImage({ image })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width])

  return (
    <>
      <div
        className={`flex flex-col justify-center w-full bg-cover bg-center min-h-[480px] hero ${
          className || ""
        }`}
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="content">
          <h2 className="title uppercase !text-white h1">
            {title || "Title is empty"}
          </h2>
          <p className="subtitle">{subtitle || "Subtitle is empty"}</p>
          {primaryButton && (
            <Button type={primaryButtonType} target={primaryButtonTarget}>
              {primaryButton || "Button text is empty"}
            </Button>
          )}
          {secondaryButton && (
            <Button
              className="md:ml-5"
              type={secondaryButtonType}
              target={secondaryButtonTarget}
            >
              {secondaryButton || "Button text is empty"}
            </Button>
          )}
          {children}
        </div>
      </div>
    </>
  )
}

export default Hero
