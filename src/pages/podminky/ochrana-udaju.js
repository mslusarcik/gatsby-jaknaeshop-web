import React from "react"
import Layout from "../../components/Layout/Layout"
import Section from "../../components/Section/Section"
import Container from "../../components/Container/Container"

const gdpr = () => {
  return (
    <div>
      <Layout>
        <Section>
          <Container>
            <h1 className="h2 text-center mb-0">
              Zásady ochrany osobních údajů
            </h1>
            <hr className="my-12" />
            <h2 className="h4 text-center mt-0">1. Kdo údaje sbírá</h2>
            <p className="text-center">
              Miroslav Slusarčík
              <br />
              IČO: 06185584
              <br />
              se sídlem Vokovická 271/33, 160 00 Praha
            </p>
            <hr className="my-12" />
            <div className="block lg:max-w-[65%] lg:mx-auto">
              <div className="lg:px-12">
                <h2 className="h4 text-center mt-0">
                  2. Jaké informace zpracováváme a proč
                </h2>
                <h3 className="text-center h5 mt-6 lg:mt-12">
                  PDF a jiné vyžádané materiály ke stažení
                </h3>
                <p className="text-center">
                  Na základě vašeho souhlasu se zpracováním osobních údajů
                  sbíráme vaši e-mailovou adresu, abychom vám mohli zaslat
                  elektronické materiály a další e-maily spojené s kampaní.
                </p>
                <h3 className="text-center h5 mt-6 lg:mt-12">
                  Kontaktování a požadavky na služby
                </h3>
                <p className="text-center">
                  Před přijetím vašeho požadavku sbíráme vaši e-mailovou adresu
                  na základě vašeho souhlasu, abychom vám mohli poslat odkaz na
                  formulář pro požadavek. V kontaktním formuláři shromažďujeme
                  vaše jméno a e-mail, abychom mohli odpovědět na dotazy v
                  souvislosti s budoucím plněním smlouvy. V rámci formuláře pro
                  požadavek sbíráme vaše jméno, e-mail a název firmy pro budoucí
                  plnění smlouvy, abychom mohli připravit návrh řešení a cenovou
                  nabídku.
                </p>
                <h2 className="h4 text-center mt-6 lg:mt-12">
                  3. Jak dlouho údaje uchováváme
                </h2>
                <p className="text-center">
                  PDF a jiné vyžádané digi-materiály: po dobu 1 roku. <br />
                  Zaslání poptávkového formuláře: po dobu 1 roku. <br />
                  Odeslání dotazu a poptávky: po dobu 1 roku.
                </p>
                <h2 className="h4 text-center mt-6 lg:mt-12">
                  4. Kdo údaje zpracovává
                </h2>
                <p className="text-center">
                  Miroslav Slusarčík (IČO 06185584, se sídlem Vokovice 271/33,
                  160 00 Praha), který provozuje tento web.
                </p>
                <h2 className="h4 text-center mt-6 lg:mt-12">
                  5. Na co máte právo
                </h2>
                <p className="text-center">
                  Pokud si myslíte, že vaše údaje zpracováváme v rozporu s
                  příslušnými právními předpisy, kontaktujte nás.
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </Layout>
    </div>
  )
}

export default gdpr
