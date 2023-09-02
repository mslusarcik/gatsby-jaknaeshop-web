import * as React from "react"

import Layout from "../../components/Layout/Layout"
import Seo from "../../components/Seo/Seo"
import Section from "../../components/Section/Section"
import Container from "../../components/Container/Container"
import Button from "../../components/Button/Button"

import checklistImage from "../../images/checklist-illustration.png"
import ecommerceIllustration from "../../images/ecommerce-illustration.png"
import heroImage from "../../images/hero_page.jpg"
import { BsFillCheckCircleFill } from "react-icons/bs"

import useCurrentWidth from "../../hooks/useCurrentWidth"
import { useState, useRef } from "react"

const VlastniEshop = () => {
  let width = useCurrentWidth()
  const [showAlert, setShowAlert] = useState(false)
  const [email, setEmail] = useState("")
  const form = useRef(null)
  const options = {
    resubscribe: false,
    source: "breadcrumb",
    update_existing: true,
  }

  const sendData = e => {
    e.preventDefault()

    const data = new FormData(form.current)
    const subscriber_data = {}
    for (var [key, value] of data.entries()) {
      subscriber_data[key] = value
    }

    const ecoData = { subscriber_data, ...options }
    fetch(
      "https://private-anon-221658c2a3-ecomailczv2.apiary-proxy.com/lists/1/subscribe",
      {
        method: "POST",
        body: ecoData,
        headers: {
          key: "34047623cc9274412436d8675c52d4d52cb0723f6e4c825539e5a343a187793c",
        },
      }
    )
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(error => console.log(error))
  }

  const sendEmail = e => {
    e.preventDefault()
    //const data = new FormData(form.current)
    fetch(
      "https://private-anon-221658c2a3-ecomailczv2.apiary-proxy.com/lists/1",
      {
        method: "GET",
        //body: data,
        headers: {
          key: "34047623cc9274412436d8675c52d4d52cb0723f6e4c825539e5a343a187793c",
        },
      }
    )
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(error => console.log(error))
  }

  // const sendEmail = e => {
  //   e.preventDefault()
  //   console.log("XAXAAXA")
  //   setShowAlert(!showAlert)
  // }

  return (
    <Layout>
      {/* <div
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          padding: "15px 25px",
          backgroundColor: "green",
          color: "white",
        }}
      >{`Current width -> ${width}`}</div> */}
      <Section
        className="lg:py-0 relative overflow-hidden hero-section"
        id="top"
      >
        <div
          className={`flex flex-col justify-center w-full bg-cover bg-center hero`}
        >
          <div className="content !py-0 !pl-0 flex flex-row items-center">
            <div className="xl:w-1/2 px-4 lg:pr-16">
              <h1 className="title uppercase h2">
                Dělejte na e&#8209;shopu úpravy, které mají smysl
              </h1>
              <p className="">
                Zvyšte prodeje a zlepšete uživatelskou zkušenost díky detailní
                video&#8209;analýze e&#8209;shopu.
              </p>
              <ul className="mt-8">
                <li className="py-1 flex">
                  <BsFillCheckCircleFill className="fill-green-400"></BsFillCheckCircleFill>
                  <span className="pl-3">
                    Získáte komplexní video-audit a průchod nákupní cestou
                  </span>
                </li>
                <li className="py-1 flex">
                  <BsFillCheckCircleFill className="fill-green-400"></BsFillCheckCircleFill>
                  <span className="pl-3">
                    Poznáte nejslabší a nejsilnější stránky e-shopu
                  </span>
                </li>
                <li className="py-1 flex">
                  <BsFillCheckCircleFill className="fill-green-400"></BsFillCheckCircleFill>
                  <span className="pl-3">
                    Dostanete do rukou akční plán, který vás povede dál
                  </span>
                </li>
              </ul>
              <form
                action="https://jaknaeshop.ecomailapp.cz/public/subscribe/1/43c2cd496486bcc27217c3e790fb4088?source=breadcrumb"
                method="POST"
                ref={form}
              >
                <div className="relative mt-10">
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
                    type="text"
                    name="email"
                    className="bg-gray-100 border border-gray-100 text-gray-800 rounded-lg focus:ring-primary focus:border-primary block w-full pl-11 py-5 pr-2.5 placeholder-gray-300 dark:focus:ring-primary dark:focus:border-primary h-[80px]"
                    placeholder="miroslav@slusarcik.cz"
                    required="required"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <button className="btn btn-primary !mt-4 block w-full h-[70px]">
                  Stáhnout kód
                </button>
              </form>
              {/* <div
              onClick={e => {
                sendEmail(e)
              }}
              >
                <Button
                  type="primary"
                  target="/"
                  className="!mt-4 block w-full h-[70px]"
                >
                  Stáhnout kód
                </Button>
              </div> */}
              <button onClick={e => sendData(e)}>Fetch API</button>
              {showAlert &&
                `Obsah, který hledáte najdete zde: ${process.env.BREADCRUM_URL_DOWNLOAD}`}
            </div>
            <div className="xl:w-1/2 hidden xl:block">
              <img src={heroImage} alt="" className="half-image" />

              <span
                style={{
                  backgroundImage:
                    "/static/hero_page-fa24e4ba46d58b54d70d470c2675ec08.jpg",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom center",
                }}
              ></span>
            </div>
          </div>
          {/* <div className="content !px-4">
            <h2 className="title uppercase !text-white h1">Title</h2>
            <p className="subtitle">Subtitle is empty</p>
            <Button type="primary" target="/">
              Button
            </Button>
          </div> */}
        </div>
      </Section>
      <Section id="start">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <div className="overflow-hidden rounded-3xl bg-gray-100 mb-8 lg:mb-0">
                <img
                  src={checklistImage}
                  alt=""
                  className="w-[55%] mx-auto py-16"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="content lg:max-w-[510px] mx-auto px-4">
                <span className="text-sm mb-4 font-regular block text-gray-500">
                  BUILD YOUR EMAIL LIST
                </span>
                <h2>Kompatibilní se&nbsp;Shoptetem.</h2>
                <p>S tímto kódem uspějete na následujících šablonách:</p>
                <ul>
                  <li> - Classic</li>
                  <li> - Step</li>
                  <li> - Samba</li>
                  <li> - Atd.</li>
                </ul>
                {/* <p>{process.env.BREADCRUM_URL_DOWNLOAD}</p> */}
                <Button className="mt-10">XXX</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Section id="start">
        <Container>
          <div className="flex lg:items-center flex-col lg:flex-row-reverse">
            <div className="lg:w-1/2">
              <div className="overflow-hidden rounded-3xl bg-gray-100 mb-8 lg:mb-0">
                <img
                  src={ecommerceIllustration}
                  alt=""
                  className="w-[55%] mx-auto py-16"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="content lg:max-w-[510px] mx-auto px-4">
                <span className="text-sm mb-4 font-regular block text-gray-500">
                  BUILD YOUR EMAIL LIST
                </span>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>
                  Fill your lists with emails from people that want to get to
                  know your product. Get the right kind of attention for a
                  successful connection.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Section className="bg-secondary border-b border-blue-50 border-opacity-10 lg:min-h-[820px] lg:flex lg:items-center">
        <Container>
          <h2 className="lg:text-center text-white">Jste připraveni makat?</h2>
          <p className="text-white lg:text-center">
            Fill your lists with emails from people
          </p>
          <form
            action="https://jaknaeshop.ecomailapp.cz/public/subscribe/1/43c2cd496486bcc27217c3e790fb4088?source=breadcrumb"
            method="POST"
          >
            <div className="relative mt-12 max-w-[550px] mx-auto">
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
                type="text"
                name="email"
                className="bg-gray-100 border border-gray-100 text-gray-800 rounded-lg focus:ring-primary focus:border-primary block w-full pl-11 py-5 pr-2.5 placeholder-gray-300 dark:focus:ring-primary dark:focus:border-primary h-[80px]"
                placeholder="miroslav@slusarcik.cz"
                required="required"
              />
            </div>
            <div className="form-group w-full text-center">
              <button className="btn btn-primary !mt-4 block w-full max-w-[550px] mx-auto h-[70px]">
                Stáhnout kód
              </button>
            </div>
          </form>
        </Container>
      </Section>
      {/* <Section>
        <Container>
          <span className="text-sm mb-4 font-regular block text-gray-500 text-center">
            BUILD YOUR EMAIL LIST
          </span>
          <h2 className="text-center">Lorem ipsum dolor sit amet.</h2>
          <div className="flex mt-24">
            <div className="w-1/3 px-16">
              <h3 className="h5">Hahaha</h3>
              <p>Heheheehe.</p>
            </div>
            <div className="w-1/3 px-16">
              <h3 className="h5">Hahaha</h3>
              <p>Heheheehe.</p>
            </div>
            <div className="w-1/3 px-16">
              <h3 className="h5">Hahaha</h3>
              <p>Heheheehe.</p>
            </div>
          </div>
        </Container>
      </Section> */}
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (
  <Seo title="Kurz e-shopu" bodyClass="type-course"></Seo>
)

export default VlastniEshop
