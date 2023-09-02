import React from "react"

import Layout from "../../components/Layout/Layout"
import Seo from "../../components/Seo/Seo"
import Section from "../../components/Section/Section"
import Container from "../../components/Container/Container"

import { AiOutlineInfoCircle } from "react-icons/ai"

const success = () => {
  return (
    <Layout>
      <Section className="w-full py-8">
        <Container>
          <div
            className="bg-teal-100 border-t-4 border-teal-500 text-teal-900 px-4 py-3 shadow-md rounded-lg lg:mx-4"
            role="alert"
          >
            <div className="flex">
              <div className="py-1">
                <AiOutlineInfoCircle
                  className="fill-current text-teal-500 mr-4"
                  size={28}
                ></AiOutlineInfoCircle>
              </div>
              <div>
                <p className="font-medium mb-0">Skvělá práce!</p>
                <p className="text-sm">
                  Všechno proběhlo v pořádku. Můžete pokračovat třeba{" "}
                  <a
                    href="https://instagram.com/jaknaeshop"
                    className="text-secondary"
                  >
                    na Instagram @jaknaeshop
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  )
}

export default success

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (
  <Seo title="Kurz e-shopu" bodyClass="type-alert"></Seo>
)
