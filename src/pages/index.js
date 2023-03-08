import * as React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import Section from "../components/Section/Section"
import Container from "../components/Container/Container"
import Hero from "../components/Hero/Hero"
import Benefit from "../components/Benefit/Benefit"
import Testimonial from "../components/Testimonial/Testimonial"

import useCurrentWidth from "../hooks/useCurrentWidth"

// import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StaticImage } from "gatsby-plugin-image"

// Import images
import HeroImageLg from "../images/banners/hero_banner_lg_v3.png"
import VideoPlayer from "../images/bg-video-player.png"
import premioveMatraceImage from "../images/premiove-matrace.png"
import moodStoresImage from "../images/mood-stores.png"
import bikeGalleryImage from "../images/bike-gallery.png"

import { BiChevronRight, BiMicrophone, BiLeaf } from "react-icons/bi"
import { RiLockLine } from "react-icons/ri"
import {
  TbPlayerTrackNext,
  TbSquareRoundedNumber1,
  TbSquareRoundedNumber2,
  TbSquareRoundedNumber3,
  TbSquareRoundedNumber4,
  TbSquareRoundedNumber5,
  TbGift,
  TbCheck,
  TbInfoCircle,
} from "react-icons/tb"
import Button from "../components/Button/Button"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// swiper modules you want to use
import SwiperCore, { Autoplay, Navigation } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

SwiperCore.use([Autoplay, Navigation])

const IndexPage = () => {
  let width = useCurrentWidth()

  return (
    <Layout>
      <Section className="py-0 bg-secondary" id="top">
        <div
          style={{
            position: "fixed",
            bottom: 0,
            right: 0,
            padding: "15px 25px",
            backgroundColor: "green",
            color: "white",
          }}
        >{`Current width -> ${width}`}</div>
        {/* <Container>{`Current width -> ${width}`}</Container> */}
        <Hero
          className="rounded-none"
          // title={
          //   <>
          //     Toužíte po <span className="">vlastním e&#8209;shopu</span>
          //     , <br />
          //     ale nevíte kde a jak začít?
          //   </>
          // }
          title={
            <>
              Nastartujte konečně <br className="hidden lg:block" />
              svůj <span className="text-primary">vlastní e&#8209;shop</span>
            </>
          }
          subtitle={
            <span className="block max-w-[700px]">
              V pár videích společně{" "}
              <strong>
                projdeme výběr platformy, nastavení e&#8209;shopu, získávání
                prvních zákazníků a další praktické tipy
              </strong>
              , které vám pomohou s nejčastějšími výzvami při rozjezdu
              e&#8209;shopu.
            </span>
          }
          imageMdUp={HeroImageLg}
          image={HeroImageLg}
          primaryButtonType="primary"
          primaryButton="Chci koupit kurz"
          primaryButtonTarget="/"
          secondaryButtonType="default-outline"
          secondaryButton="Ještě se tu porozhlédnu"
          secondaryButtonTarget="/"
        ></Hero>
      </Section>
      <Section>
        <Container>
          <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center justify-around">
            <div className="content-holder max-w-[640px] lg:max-w-[520px]">
              <h2>Položte všechny své obavy na lopatky</h2>
              <p>
                Založení e&#8209;shopu je plné nejistot a otázek. Myšlenky a
                obavy, které se honí hlavou každému, kdo se rozhodne pro
                podnikání na vlastní pěst. Určitě je znáte...
              </p>
              <ul className="mt-4 mb-12">
                <li className="flex items-center">
                  <BiChevronRight className="fill-secondary self-start"></BiChevronRight>
                  <span className="ml-3">
                    Děsí vás představa o tom, kolik peněz budete muset do svého
                    e&#8209;shopu nainvestovat.
                  </span>
                </li>
                <li className="flex items-center">
                  <BiChevronRight
                    className="fill-secondary self-start"
                    height="1rem"
                    width="1rem"
                  ></BiChevronRight>
                  <span className="ml-3">
                    Nemáte jistotu, jestli zvládnete e&#8209;shop rozjet jako
                    vedlejšák při práci.
                  </span>
                </li>
                <li className="flex items-center">
                  <BiChevronRight className="fill-secondary self-start"></BiChevronRight>
                  <span className="ml-3">
                    Nadšeně zkoušíte testovací verze e&#8209;shopů, ale cítíte
                    se jako Alenka v říši divů.
                  </span>
                </li>
              </ul>
              <Button>S kurzem se neztratíte</Button>
            </div>
            <div className="image-holder p-6 px-16 mb-10 lg:mb-0 pl-8 bg-sky-50 rounded-egg">
              <StaticImage
                src="../images/person-thinking.png"
                alt="xxx"
                placeholder="blurred"
                className="max-w-[450px]"
              ></StaticImage>
            </div>
          </div>
        </Container>
      </Section>
      <Section className="bg-stone-50">
        <Container>
          <h2 className="lg:text-center max-w-[480px] lg:max-w-none">
            Co můžete od kurzu očekávat?
          </h2>
          <div className="flex flex-col lg:flex-row justify-around mt-12 lg:mt-20">
            <Benefit
              className="w-full lg:w-[25%] self-center flex flex-col mb-6 lg:mb-0"
              icon={
                <BiMicrophone
                  size="64"
                  className="mb-4 lg:mb-6 text-secondary"
                ></BiMicrophone>
              }
              heading={<>Slova, kterým rozumíte</>}
              content={
                <>
                  Žádný technický jazyk tady nečekejte.{" "}
                  <strong>
                    {" "}
                    Jedny z priorit, kterých se držím při vytváření obsahu, je
                    srozumitelnost a hodnotný obsah{" "}
                  </strong>{" "}
                  . Každé téma je maximálně zjednodušené.
                </>
              }
            />
            <Benefit
              className="w-full lg:w-[25%] self-center flex flex-col mb-6 lg:mb-0"
              icon={
                <TbPlayerTrackNext
                  size="64"
                  className="mb-4 lg:mb-6 text-secondary"
                ></TbPlayerTrackNext>
              }
              heading={<>Vždy jasný další krok</>}
              content={
                <>
                  Jestli mám vybrat jednu věc, která se opakuje s každým
                  klientem, pak mám jasno.
                  <strong>
                    {" "}
                    Mají toho tolik na práci, že neví, čím začít. Na konci kurzu
                    se dozvíte, jakým směrem se dál vydat, aby vše šlapalo jak
                    má
                  </strong>
                  .
                </>
              }
            />
            <Benefit
              className="w-full lg:w-[25%] self-center flex flex-col"
              icon={
                <BiLeaf
                  size="64"
                  className="mb-4 lg:mb-6 text-secondary"
                ></BiLeaf>
              }
              heading={<>Bez skrytých úmyslů</>}
              content={
                <>
                  Kurz neslouží k tomu, abych vám prodal další službu.{" "}
                  <strong>
                    Dal jsem si svůj neskromný cíl snížit počet e-shopů, které
                    po roce fungování zaniknou
                  </strong>
                  . Jdete do toho se mnou?
                </>
              }
            />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="lg:text-center max-w-[480px] lg:max-w-none">
            Kdo vás celým kurzem provede?
          </h2>
          <p className="subtitle lg:text-center max-w-[480px] lg:max-w-none">
            Jsem Míra Slusarčík, kodér, který pomáhá tvořit úspěšné e-shopy.
            Tady jich pár je:
          </p>
          <Swiper
            modules={[Autoplay, Navigation]}
            className="slider-v1"
            navigation={true}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={swiper => console.log(swiper)}
          >
            <SwiperSlide>
              <Testimonial
                image={premioveMatraceImage}
                content="…skvelá kounikácia a nápady. Rozumie nielen kódovaniu, ale aj UX. Veľmi cením proaktivitu a doladení detailov, ktoré mňa nenapadli a aj následný servis pri rozšrování úprav…"
                author={
                  <>
                    Igor,
                    <a
                      href="https://www.premiove-matrace.cz/"
                      className="text-secondary"
                    >
                      {" "}
                      www.premiove-matrace.cz{" "}
                    </a>
                  </>
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial
                image={moodStoresImage}
                content="…potrebovali sme pomoc vyslovene s niekoľkými bodmi, kde
                nesiahali naše schopnosti. S Mirom sme si jasne stanovili
                potrebné práce na našich stránkach, aby sme dosiahli
                úpravy, ktoré sme potrebovali. Výborná komunikácia,
                dodržanie termínov, jasné podmienky…"
                author={
                  <>
                    Eren,{" "}
                    <a
                      href="https://www.moodstores.sk/"
                      className="text-secondary"
                    >
                      {" "}
                      www.moodstores.sk{" "}
                    </a>
                  </>
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial
                image={bikeGalleryImage}
                content='…proaktivní přístup k řešení zadání. Tzn. ne pouze
                odpovědi typu "jde/umím" nebo "nejde/neumím", ale
                "vymyslíme". Férový přístup = rada pokud jde danou věc
                řešit nastavením v adminu…'
                author={
                  <>
                    Jaromír,{" "}
                    <a
                      href="https://www.bikegallery.cz/"
                      className="text-secondary"
                    >
                      www.bikegallery.cz
                    </a>
                  </>
                }
              />
            </SwiperSlide>
          </Swiper>
        </Container>
      </Section>
      <Section className="bg-secondary">
        <Container>
          <div className="flex items-center justify-around">
            <div className="content-holder">
              <h2 className="lg:text-center text-white">
                Je čas přejít{" "}
                <span className="text-primary">k tomu hlavnímu</span>
              </h2>
              <p className="lg:text-center text-white lg:max-w-[60%] lg:mx-auto subtitle">
                Celý kurz je rozložený do 5 modulů a 10 videí, které mají
                dohromady 50 minut. Rozložení jednotlivých modulů je složené
                tak, aby vám všechny informace dávaly smysl:
              </p>
              <ol className="mt-12 flex flex-wrap text-white">
                <li className="flex flex-col items-start md:w-1/2 xl:w-1/3 md:p-4">
                  <TbSquareRoundedNumber1
                    className="self-start shrink-0 mb-4 text-primary"
                    size="48"
                  ></TbSquareRoundedNumber1>
                  <span className="mb-8">
                    <h3 className="h4 !text-white">
                      Teorie, která zažehná všechny vaše nejistoty
                    </h3>
                    <p>
                      Celý kurz je rozložený do 5 modulů a 10 videí, které mají
                      dohromady 50 minut. Rozložení jednotlivých modulů je
                      složené tak, aby vám všechny informace dávaly smysl.
                    </p>
                  </span>
                </li>
                <li className="flex flex-col items-start md:w-1/2 xl:w-1/3 md:p-4">
                  <TbSquareRoundedNumber2
                    className="self-start shrink-0 mb-4 text-primary"
                    size="48"
                  ></TbSquareRoundedNumber2>
                  <span className="ml-3 mb-8">
                    <h3 className="h4 !text-white">
                      Založení e-shopu a poznávání rozhraní
                    </h3>
                    <p>
                      Celý kurz je rozložený do 5 modulů a 10 videí, které mají
                      dohromady 50 minut. Rozložení jednotlivých modulů je
                      složené tak, aby vám všechny informace dávaly smysl.
                    </p>
                  </span>
                </li>
                <li className="flex flex-col items-start md:w-1/2 xl:w-1/3 md:p-4">
                  <TbSquareRoundedNumber3
                    className="self-start shrink-0 mb-4 text-primary"
                    size="48"
                  ></TbSquareRoundedNumber3>
                  <span className="ml-3 mb-8">
                    <h3 className="h4 !text-white">
                      Nastavení všech klíčových sekcí nového e-shopu
                    </h3>
                    <p>
                      Celý kurz je rozložený do 5 modulů a 10 videí, které mají
                      dohromady 50 minut. Rozložení jednotlivých modulů je
                      složené tak, aby vám všechny informace dávaly smysl.
                    </p>
                  </span>
                </li>
                <li className="flex flex-col items-start md:w-1/2 xl:w-1/3 md:p-4">
                  <TbSquareRoundedNumber4
                    className="self-start shrink-0 mb-4 text-primary"
                    size="48"
                  ></TbSquareRoundedNumber4>
                  <span className="ml-3 mb-8">
                    <h3 className="h4 !text-white">
                      Základy propagace a hledání prvních zákazníků
                    </h3>
                    <p>
                      Celý kurz je rozložený do 5 modulů a 10 videí, které mají
                      dohromady 50 minut. Rozložení jednotlivých modulů je
                      složené tak, aby vám všechny informace dávaly smysl.
                    </p>
                  </span>
                </li>
                <li className="flex flex-col items-start md:w-1/2 xl:w-1/3 md:p-4">
                  <TbSquareRoundedNumber5
                    className="self-start shrink-0 mb-4 text-primary"
                    size="48"
                  ></TbSquareRoundedNumber5>
                  <span className="ml-3 mb-8">
                    <h3 className="h4 !text-white">
                      Hotovo. Máte svůj e-shop. Ale co teď s ním?
                    </h3>
                    <p>
                      Celý kurz je rozložený do 5 modulů a 10 videí, které mají
                      dohromady 50 minut. Rozložení jednotlivých modulů je
                      složené tak, aby vám všechny informace dávaly smysl.
                    </p>
                  </span>
                </li>
                <li className="flex flex-col items-start md:w-1/2 xl:w-1/3 md:p-4">
                  <TbGift
                    className="self-start shrink-0 mb-4 text-primary"
                    size="48"
                  ></TbGift>
                  <span className="ml-3 mb-8">
                    <h3 className="h4 !text-white">
                      Bonus, který vám pomůže na vaší cestě
                    </h3>
                    <p>
                      Celý kurz je rozložený do 5 modulů a 10 videí, které mají
                      dohromady 50 minut. Rozložení jednotlivých modulů je
                      složené tak, aby vám všechny informace dávaly smysl.
                    </p>
                  </span>
                </li>
              </ol>
              <div
                className="locked-video-wrapper flex sm:p-12 lg:p-20 justify-center items-center bg-slate-300 rounded-lg bg-cover"
                style={{ backgroundImage: `url(${VideoPlayer})` }}
              >
                <div className="card px-8 pt-16 pb-8 flex flex-col items-center w-full max-w-[420px] lg:max-w-[480px] bg-white rounded-lg">
                  <RiLockLine className="text-tertiary" size={48}></RiLockLine>
                  <h3 className="h4 mt-4 text-center">Lorem ipsum dolor</h3>
                  <p className="text-center">
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet.
                  </p>
                  <hr className="my-6 h-[1px] opacity-60 w-full bg-gray-200 border-0" />
                  <ul className="pl-0">
                    <li className="flex items-center py-2">
                      <TbCheck className="self-start text-green-600 flex-shrink-0"></TbCheck>
                      <span className="ml-4">
                        Srozumitelný jazyk a zjednodušování témat
                      </span>
                    </li>
                    <li className="flex items-center py-2">
                      <TbCheck className="self-start text-green-600 flex-shrink-0"></TbCheck>
                      <span className="ml-4">
                        Jasná vize a další kroky po dokončení kurzu
                      </span>
                    </li>
                    <li className="flex items-center py-2">
                      <TbCheck className="self-start text-green-600 flex-shrink-0"></TbCheck>
                      <span className="ml-4">
                        Data od dlouhodobých úspěšných klientů
                      </span>
                    </li>
                  </ul>
                  <p className="!font-light h5 mb-0 mt-16 line-through !text-gray-300">
                    3 499 Kč
                  </p>
                  <p className="font-bold h3">2 499 Kč</p>
                  <p className="text-center">
                    <Button type="primary">Chci přístup do kurzu</Button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="lg:text-center">Co by vás mohlo ještě zajímat</h2>
          <p className="subtitle lg:text-center">FAQ SEKCE #TODO</p>
          <div className="flex flex-wrap mt-16">
            <div className="faq-item w-full md:w-1/2 py-4 lg:pr-6 mb-4">
              <h3 className="faq-question h5">
                Je to vhodně pro podnikatele, kteri uz mají svůj e-shop?
              </h3>
              <p className="faq-answer">
                Celý kurz je rozložený do 5 modulů a 10 videí, které mají
                dohromady 50 minut. Rozložení jednotlivých modulů je složené
                tak, aby vám všechny informace dávaly smysl.
              </p>
            </div>
            <div className="faq-item w-full md:w-1/2 py-4 lg:pl-6 mb-4">
              <h3 className="faq-question h5">
                Je to vhodně pro podnikatele, kteri uz mají svůj e-shop?
              </h3>
              <p className="faq-answer">
                Celý kurz je rozložený do 5 modulů a 10 videí, které mají
                dohromady 50 minut. Rozložení jednotlivých modulů je složené
                tak, aby vám všechny informace dávaly smysl.
              </p>
            </div>
            <div className="faq-item w-full md:w-1/2 py-4 lg:pr-6 mb-4">
              <h3 className="faq-question h5">
                Je to vhodně pro podnikatele, kteri uz mají svůj e-shop?
              </h3>
              <p className="faq-answer">
                Celý kurz je rozložený do 5 modulů a 10 videí, které mají
                dohromady 50 minut. Rozložení jednotlivých modulů je složené
                tak, aby vám všechny informace dávaly smysl.
              </p>
            </div>
            <div className="faq-item w-full md:w-1/2 py-4 lg:pl-6 mb-4">
              <h3 className="faq-question h5">
                Je to vhodně pro podnikatele, kteri uz mají svůj e-shop?
              </h3>
              <p className="faq-answer">
                Celý kurz je rozložený do 5 modulů a 10 videí, které mají
                dohromady 50 minut. Rozložení jednotlivých modulů je složené
                tak, aby vám všechny informace dávaly smysl.
              </p>
            </div>
            <div className="faq-item w-full md:w-1/2 py-4 lg:pr-6 mb-4">
              <h3 className="faq-question h5">
                Je to vhodně pro podnikatele, kteri uz mají svůj e-shop?
              </h3>
              <p className="faq-answer">
                Celý kurz je rozložený do 5 modulů a 10 videí, které mají
                dohromady 50 minut. Rozložení jednotlivých modulů je složené
                tak, aby vám všechny informace dávaly smysl.
              </p>
            </div>
            <div className="faq-item w-full md:w-1/2 py-4 lg:pl-6 mb-4">
              <h3 className="faq-question h5">
                Je to vhodně pro podnikatele, kteri uz mají svůj e-shop?
              </h3>
              <p className="faq-answer">
                Celý kurz je rozložený do 5 modulů a 10 videí, které mají
                dohromady 50 minut. Rozložení jednotlivých modulů je složené
                tak, aby vám všechny informace dávaly smysl.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col lg:flex-row px-4 py-8 mb-4 rounded-lg bg-blue-50 mt-2"
            role="alert"
          >
            <TbInfoCircle
              size={32}
              className="lg:mr-4 lg:ml-2 mb-4 lg:mb-0"
            ></TbInfoCircle>
            <span className="sr-only">Info</span>
            <div>
              <h3 className="h5 !mb-1">Potřebujete vědět něco dalšího?</h3>
              Kontaktujte mě <strong>na telefonní číslo 731 326 653.</strong>
            </div>
          </div>
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
export const Head = () => <Seo title="Home" bodyClass="type-index" />

export default IndexPage
