import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Section from "../components/Section"
import Container from "../components/Container"
import Hero from "../components/Hero"

import useCurrentWidth from "../hooks/useCurrentWidth"

// Import images
import HeroImageLg from "../images/banners/hero_banner_lg.png"

const IndexPage = () => {
  let width = useCurrentWidth()

  return (
    <Layout className="type-index">
      <Section>
        <Container>{`Current width -> ${width}`}</Container>
        <Container>
          <Hero
            title={
              <>
                Toužíte po vlastním e-shopu, <br />
                ale nevíte kde a jak začít?
              </>
            }
            subtitle={
              <span className="block max-w-[48%]">
                Pak jste otevřeli správný odkaz. V pár videích společně projdeme
                výběr platformy, nastavení e-shopu, získávání prvních zákazníků
                a další praktické tipy, které vám pomohou s nejčastějšími
                výzvami při rozjezdu prvního e-shopu.
              </span>
            }
            imageMdUp={HeroImageLg}
            image={HeroImageLg}
            primaryButtonType="primary"
            primaryButton="Chci koupit kurz"
            primaryButtonTarget="/#start"
            secondaryButtonType="default-outline"
            secondaryButton="Ještě se tu porozhlédnu"
            secondaryButtonTarget="/"
          ></Hero>
        </Container>
      </Section>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
