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
          //     Tou????te po <span className="">vlastn??m e&#8209;shopu</span>
          //     , <br />
          //     ale nev??te kde a jak za????t?
          //   </>
          // }
          title={
            <>
              Nastartujte kone??n?? <br className="hidden lg:block" />
              sv??j <span className="text-primary">vlastn?? e&#8209;shop</span>
            </>
          }
          subtitle={
            <span className="block max-w-[700px]">
              V p??r vide??ch spole??n??{" "}
              <strong>
                projdeme v??b??r platformy, nastaven?? e&#8209;shopu, z??sk??v??n??
                prvn??ch z??kazn??k?? a dal???? praktick?? tipy
              </strong>
              , kter?? v??m pomohou s??nej??ast??j????mi v??zvami p??i rozjezdu
              e&#8209;shopu.
            </span>
          }
          imageMdUp={HeroImageLg}
          image={HeroImageLg}
          primaryButtonType="primary"
          primaryButton="Chci koupit kurz"
          primaryButtonTarget="/"
          secondaryButtonType="default-outline"
          secondaryButton="Je??t?? se tu porozhl??dnu"
          secondaryButtonTarget="/"
        ></Hero>
      </Section>
      <Section>
        <Container>
          <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center justify-around">
            <div className="content-holder max-w-[640px] lg:max-w-[520px]">
              <h2>Polo??te v??echny sv?? obavy na lopatky</h2>
              <p>
                Zalo??en?? e&#8209;shopu je pln?? nejistot a ot??zek. My??lenky a
                obavy, kter?? se hon?? hlavou ka??d??mu, kdo se rozhodne pro
                podnik??n?? na vlastn?? p??st. Ur??it?? je zn??te...
              </p>
              <ul className="mt-4 mb-12">
                <li className="flex items-center">
                  <BiChevronRight className="fill-secondary self-start"></BiChevronRight>
                  <span className="ml-3">
                    D??s?? v??s p??edstava o tom, kolik pen??z budete muset do sv??ho
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
                    Nem??te jistotu, jestli zvl??dnete e&#8209;shop rozjet jako
                    vedlej????k p??i pr??ci.
                  </span>
                </li>
                <li className="flex items-center">
                  <BiChevronRight className="fill-secondary self-start"></BiChevronRight>
                  <span className="ml-3">
                    Nad??en?? zkou????te testovac?? verze e&#8209;shop??, ale c??t??te
                    se jako Alenka v ??????i div??.
                  </span>
                </li>
              </ul>
              <Button>S kurzem se neztrat??te</Button>
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
            Co m????ete od kurzu o??ek??vat?
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
              heading={<>Slova, kter??m rozum??te</>}
              content={
                <>
                  ????dn?? technick?? jazyk tady ne??ekejte.{" "}
                  <strong>
                    {" "}
                    Jedny z priorit, kter??ch se dr????m p??i vytv????en?? obsahu, je
                    srozumitelnost a hodnotn?? obsah{" "}
                  </strong>{" "}
                  . Ka??d?? t??ma je maxim??ln?? zjednodu??en??.
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
              heading={<>V??dy jasn?? dal???? krok</>}
              content={
                <>
                  Jestli m??m vybrat jednu v??c, kter?? se opakuje s ka??d??m
                  klientem, pak m??m jasno.
                  <strong>
                    {" "}
                    Maj?? toho tolik na pr??ci, ??e nev??, ????m za????t. Na konci kurzu
                    se dozv??te, jak??m sm??rem se d??l vydat, aby v??e ??lapalo jak
                    m??
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
              heading={<>Bez skryt??ch ??mysl??</>}
              content={
                <>
                  Kurz neslou???? k tomu, abych v??m prodal dal???? slu??bu.{" "}
                  <strong>
                    Dal jsem si sv??j neskromn?? c??l sn????it po??et e-shop??, kter??
                    po roce fungov??n?? zaniknou
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
            Kdo v??s cel??m kurzem provede?
          </h2>
          <p className="subtitle lg:text-center max-w-[480px] lg:max-w-none">
            Jsem M??ra Slusar????k, kod??r, kter?? pom??h?? tvo??it ??sp????n?? e-shopy.
            Tady jich p??r je:
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
                content="???skvel?? kounik??cia a n??pady. Rozumie nielen k??dovaniu, ale aj UX. Ve??mi cen??m proaktivitu a doladen?? detailov, ktor?? m??a nenapadli a aj n??sledn?? servis pri roz??rov??n?? ??prav???"
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
                content="???potrebovali sme pomoc vyslovene s nieko??k??mi bodmi, kde
                nesiahali na??e schopnosti. S Mirom sme si jasne stanovili
                potrebn?? pr??ce na na??ich str??nkach, aby sme dosiahli
                ??pravy, ktor?? sme potrebovali. V??born?? komunik??cia,
                dodr??anie term??nov, jasn?? podmienky???"
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
                content='???proaktivn?? p????stup k ??e??en?? zad??n??. Tzn. ne pouze
                odpov??di typu "jde/um??m" nebo "nejde/neum??m", ale
                "vymysl??me". F??rov?? p????stup = rada pokud jde danou v??c
                ??e??it nastaven??m v adminu???'
                author={
                  <>
                    Jarom??r,{" "}
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
                Je ??as p??ej??t{" "}
                <span className="text-primary">k tomu hlavn??mu</span>
              </h2>
              <p className="lg:text-center text-white lg:max-w-[60%] lg:mx-auto subtitle">
                Cel?? kurz je rozlo??en?? do 5 modul?? a 10 vide??, kter?? maj??
                dohromady 50 minut. Rozlo??en?? jednotliv??ch modul?? je slo??en??
                tak, aby v??m v??echny informace d??valy smysl:
              </p>
              <ol className="mt-12 flex flex-wrap text-white">
                <li className="flex flex-col items-start md:w-1/2 xl:w-1/3 md:p-4">
                  <TbSquareRoundedNumber1
                    className="self-start shrink-0 mb-4 text-primary"
                    size="48"
                  ></TbSquareRoundedNumber1>
                  <span className="mb-8">
                    <h3 className="h4 !text-white">
                      Teorie, kter?? za??ehn?? v??echny va??e nejistoty
                    </h3>
                    <p>
                      Cel?? kurz je rozlo??en?? do 5 modul?? a 10 vide??, kter?? maj??
                      dohromady 50 minut. Rozlo??en?? jednotliv??ch modul?? je
                      slo??en?? tak, aby v??m v??echny informace d??valy smysl.
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
                      Zalo??en?? e-shopu a pozn??v??n?? rozhran??
                    </h3>
                    <p>
                      Cel?? kurz je rozlo??en?? do 5 modul?? a 10 vide??, kter?? maj??
                      dohromady 50 minut. Rozlo??en?? jednotliv??ch modul?? je
                      slo??en?? tak, aby v??m v??echny informace d??valy smysl.
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
                      Nastaven?? v??ech kl????ov??ch sekc?? nov??ho e-shopu
                    </h3>
                    <p>
                      Cel?? kurz je rozlo??en?? do 5 modul?? a 10 vide??, kter?? maj??
                      dohromady 50 minut. Rozlo??en?? jednotliv??ch modul?? je
                      slo??en?? tak, aby v??m v??echny informace d??valy smysl.
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
                      Z??klady propagace a hled??n?? prvn??ch z??kazn??k??
                    </h3>
                    <p>
                      Cel?? kurz je rozlo??en?? do 5 modul?? a 10 vide??, kter?? maj??
                      dohromady 50 minut. Rozlo??en?? jednotliv??ch modul?? je
                      slo??en?? tak, aby v??m v??echny informace d??valy smysl.
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
                      Hotovo. M??te sv??j e-shop. Ale co te?? s n??m?
                    </h3>
                    <p>
                      Cel?? kurz je rozlo??en?? do 5 modul?? a 10 vide??, kter?? maj??
                      dohromady 50 minut. Rozlo??en?? jednotliv??ch modul?? je
                      slo??en?? tak, aby v??m v??echny informace d??valy smysl.
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
                      Bonus, kter?? v??m pom????e na va???? cest??
                    </h3>
                    <p>
                      Cel?? kurz je rozlo??en?? do 5 modul?? a 10 vide??, kter?? maj??
                      dohromady 50 minut. Rozlo??en?? jednotliv??ch modul?? je
                      slo??en?? tak, aby v??m v??echny informace d??valy smysl.
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
                        Srozumiteln?? jazyk a zjednodu??ov??n?? t??mat
                      </span>
                    </li>
                    <li className="flex items-center py-2">
                      <TbCheck className="self-start text-green-600 flex-shrink-0"></TbCheck>
                      <span className="ml-4">
                        Jasn?? vize a dal???? kroky po dokon??en?? kurzu
                      </span>
                    </li>
                    <li className="flex items-center py-2">
                      <TbCheck className="self-start text-green-600 flex-shrink-0"></TbCheck>
                      <span className="ml-4">
                        Data od dlouhodob??ch ??sp????n??ch klient??
                      </span>
                    </li>
                  </ul>
                  <p className="!font-light h5 mb-0 mt-16 line-through !text-gray-300">
                    3 499 K??
                  </p>
                  <p className="font-bold h3">2 499 K??</p>
                  <p className="text-center">
                    <Button type="primary">Chci p????stup do kurzu</Button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="lg:text-center">Co by v??s mohlo je??t?? zaj??mat</h2>
          <p className="subtitle lg:text-center">FAQ SEKCE #TODO</p>
          <div className="flex flex-wrap mt-16">
            <div className="faq-item w-full md:w-1/2 py-4 lg:pr-6 mb-4">
              <h3 className="faq-question h5">
                Je to vhodn?? pro podnikatele, kteri uz maj?? sv??j e-shop?
              </h3>
              <p className="faq-answer">
                Cel?? kurz je rozlo??en?? do 5 modul?? a 10 vide??, kter?? maj??
                dohromady 50 minut. Rozlo??en?? jednotliv??ch modul?? je slo??en??
                tak, aby v??m v??echny informace d??valy smysl.
              </p>
            </div>
            <div className="faq-item w-full md:w-1/2 py-4 lg:pl-6 mb-4">
              <h3 className="faq-question h5">
                Je to vhodn?? pro podnikatele, kteri uz maj?? sv??j e-shop?
              </h3>
              <p className="faq-answer">
                Cel?? kurz je rozlo??en?? do 5 modul?? a 10 vide??, kter?? maj??
                dohromady 50 minut. Rozlo??en?? jednotliv??ch modul?? je slo??en??
                tak, aby v??m v??echny informace d??valy smysl.
              </p>
            </div>
            <div className="faq-item w-full md:w-1/2 py-4 lg:pr-6 mb-4">
              <h3 className="faq-question h5">
                Je to vhodn?? pro podnikatele, kteri uz maj?? sv??j e-shop?
              </h3>
              <p className="faq-answer">
                Cel?? kurz je rozlo??en?? do 5 modul?? a 10 vide??, kter?? maj??
                dohromady 50 minut. Rozlo??en?? jednotliv??ch modul?? je slo??en??
                tak, aby v??m v??echny informace d??valy smysl.
              </p>
            </div>
            <div className="faq-item w-full md:w-1/2 py-4 lg:pl-6 mb-4">
              <h3 className="faq-question h5">
                Je to vhodn?? pro podnikatele, kteri uz maj?? sv??j e-shop?
              </h3>
              <p className="faq-answer">
                Cel?? kurz je rozlo??en?? do 5 modul?? a 10 vide??, kter?? maj??
                dohromady 50 minut. Rozlo??en?? jednotliv??ch modul?? je slo??en??
                tak, aby v??m v??echny informace d??valy smysl.
              </p>
            </div>
            <div className="faq-item w-full md:w-1/2 py-4 lg:pr-6 mb-4">
              <h3 className="faq-question h5">
                Je to vhodn?? pro podnikatele, kteri uz maj?? sv??j e-shop?
              </h3>
              <p className="faq-answer">
                Cel?? kurz je rozlo??en?? do 5 modul?? a 10 vide??, kter?? maj??
                dohromady 50 minut. Rozlo??en?? jednotliv??ch modul?? je slo??en??
                tak, aby v??m v??echny informace d??valy smysl.
              </p>
            </div>
            <div className="faq-item w-full md:w-1/2 py-4 lg:pl-6 mb-4">
              <h3 className="faq-question h5">
                Je to vhodn?? pro podnikatele, kteri uz maj?? sv??j e-shop?
              </h3>
              <p className="faq-answer">
                Cel?? kurz je rozlo??en?? do 5 modul?? a 10 vide??, kter?? maj??
                dohromady 50 minut. Rozlo??en?? jednotliv??ch modul?? je slo??en??
                tak, aby v??m v??echny informace d??valy smysl.
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
              <h3 className="h5 !mb-1">Pot??ebujete v??d??t n??co dal????ho?</h3>
              Kontaktujte m?? <strong>na telefonn?? ????slo 731 326 653.</strong>
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
