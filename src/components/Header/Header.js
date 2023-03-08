import * as React from "react"

import Button from "../Button/Button"
import Container from "../Container/Container"

// Import assets
import Logo from "../../images/logo-less.svg"

// Import other react stuff
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <Container>
        <div className="inner-header">
          <div className="logo-wrapper">
            <Link to={"/"} className="flex items-center">
              <img src={Logo} alt="" className="logo" />
              <span className="font-bold text-md md:text-xl ml-2">
                JAKNAESHOP
                <br />
                <span className="font-light text-[14px] lg:text-sm block">
                  …ukážu vám, že e-shop může mít každý
                </span>
              </span>
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <Button
                  type="primary"
                  to="/"
                  className="!hidden md:inline-block"
                >
                  Kontaktovat
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header
