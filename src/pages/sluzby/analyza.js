import React from "react"

import Layout from "../../components/Layout/Layout"
import Seo from "../../components/Seo/Seo"
import Section from "../../components/Section/Section"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { BsFillCheckCircleFill } from "react-icons/bs"

import { useState, useRef } from "react"

const AuditEshopu = ({ data }) => {
  const [email, setEmail] = useState("")
  const form = useRef(null)

  return (
    <Layout>
      <Section
        className="lg:py-0 pt-0 relative overflow-hidden hero-section lg:mb-0"
        id="top"
      >
        <div
          className={`flex flex-col justify-center w-full bg-cover bg-center hero`}
        >
          <div className="content !py-0 !px-0 flex flex-row items-center">
            <div className="lg:w-1/2 px-4 lg:py-12 lg:pr-16">
              <Img
                fluid={data.file.childImageSharp.fluid}
                className="-ml-4 -mr-4 mb-10 max-w-none w-[110%] lg:hidden"
              />
              <span className="inline-block uppercase text-primary font-medium mb-4 px-4 py-2 text-[13px] lg:text-sm bg-secondary rounded-lg">
                Analýza zdarma
              </span>
              <h1 className="title uppercase h2">
                Zvyšte objednávky svého e-shopu
              </h1>
              <p className="text-lg">
                Odkryjte{" "}
                <strong className="font-medium">
                  nejslabší i&nbsp;nejsilnější místa vašeho e&#8209;shopu
                </strong>{" "}
                a získejte návrh na úpravy úplně zdarma.
              </p>
              <div className="flex flex-col lg:block">
                <ul className="mt-0 order-2">
                  <p className="text-lg font-medium mt-8">
                    Videoanalýza e-shopu vám pomůže…
                  </p>
                  <li className="py-1 flex">
                    <BsFillCheckCircleFill className="fill-green-400"></BsFillCheckCircleFill>
                    <span className="pl-3">
                      najít místa, kde ztrácíte objednávky
                    </span>
                  </li>
                  <li className="py-1 flex">
                    <BsFillCheckCircleFill className="fill-green-400"></BsFillCheckCircleFill>
                    <span className="pl-3">
                      navnímat roky nasbírané know-how
                    </span>
                  </li>
                </ul>
                <form
                  action="https://jaknaeshop.ecomailapp.cz/public/subscribe/1/43c2cd496486bcc27217c3e790fb4088?source=video-audit
                "
                  method="POST"
                  ref={form}
                  className="order-1"
                >
                  <div className="relative mt-6 lg:mt-10">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-400 top-px"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </div>
                    <input
                      type="hidden"
                      name="_subject"
                      value="Nový kontakt na zákazníka | Jaknaeshop.com"
                    />
                    <input
                      type="text"
                      name="email"
                      className="bg-gray-100 border border-gray-100 text-gray-800 rounded-lg focus:ring-primary focus:border-primary block w-full pl-11 py-5 pr-2.5 placeholder-gray-300 dark:focus:ring-primary dark:focus:border-primary h-[80px]"
                      placeholder="váš@email.cz"
                      required="required"
                      onChange={e => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <button className="btn btn-primary !mt-4 block w-full h-[70px]">
                    Chci o&nbsp;tom vědět jako&nbsp;první
                  </button>
                </form>
              </div>
            </div>
            <div className="lg:w-1/2 hidden lg:block">
              {/* <img src={heroImage} alt="" className="half-image" /> */}
              <Img
                fluid={data.file.childImageSharp.fluid}
                className="half-image"
              />
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default AuditEshopu

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export const query = graphql`
  query {
    file(relativePath: { eq: "hero_page.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
