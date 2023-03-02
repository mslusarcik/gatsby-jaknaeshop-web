import * as React from "react"

import Button from "./Button"
import Container from "./Container"

// Import assets
import Logo from "../images/logo.png"

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
              <span className="font-bold text-xl ml-3">
                JAKNAESHOP
                <br />
                <span className="font-light text-sm block mt-1">
                  …ukážu vám, že e-shop může mít každý
                </span>
              </span>
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={"/"} activeClassName="active">
                  Home
                </Link>
              </li>
              <li>
                <Button type="primary" to="/">
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
