import * as React from 'react';

import Seo from '../components/Seo/Seo';
import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import videoBanner from '../assets/videos/free-analysis-v2.mp4';
import VideoBackground from '../components/VideoBackground/VideoBackground';
import Footer from '../components/Footer/Footer';
import { useState, useRef } from 'react';

const PageAnalys = () => {
  const [email, setEmail] = useState('');
  const form = useRef(null);

  return (
    <div className='w-full overflow-hidden'>
      <Section className='relative z-10 flex min-h-[600px] w-screen items-center justify-center lg:mt-[-120px] lg:h-screen lg:min-h-[630px]'>
        <Container className='z-10'>
          <h1 className='h2 text-center !text-white'>
            Získejte více objednávek s <br className='hidden lg:block' />
            bezplatným auditem e&#8209;shopu
          </h1>
          <ul className='mx-auto mt-8 w-fit lg:flex lg:flex-row'>
            <li className='flex px-4 py-1'>
              <BsFillCheckCircleFill className='fill-green-400'></BsFillCheckCircleFill>
              <span className='pl-3 font-medium text-white-v2'>Video-audit a průchod nákupní cestou</span>
            </li>
            <li className='flex px-4 py-1'>
              <BsFillCheckCircleFill className='fill-green-400'></BsFillCheckCircleFill>
              <span className='pl-3 font-medium text-white-v2'>Nejslabší a nejsilnější místa na e-shopu</span>
            </li>
            <li className='flex px-4 py-1'>
              <BsFillCheckCircleFill className='fill-green-400'></BsFillCheckCircleFill>
              <span className='pl-3 font-medium text-white-v2'>Akční plán, který vás provede dalšími kroky</span>
            </li>
          </ul>
          <div className='mx-auto max-w-2xl'>
            <form
              action='https://jaknaeshop.ecomailapp.cz/public/subscribe/1/43c2cd496486bcc27217c3e790fb4088?source=audit
                '
              method='POST'
              ref={form}
              className='order-1'
            >
              <div className='relative mt-6 lg:mt-10'>
                <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4'>
                  <svg aria-hidden='true' className='top-px h-5 w-5 text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
                  </svg>
                </div>
                <input type='hidden' name='_subject' value='Nový kontakt na zákazníka | Jaknaeshop.com' />
                <input
                  type='text'
                  name='email'
                  className='block h-[80px] w-full rounded-lg border border-gray-100 bg-gray-100 py-5 pl-11 pr-2.5 text-gray-800 placeholder-gray-300 focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary'
                  placeholder='váš@email.cz'
                  required='required'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <button className='btn btn-primary !mt-4 block h-[70px] w-full'>Chci video-audit zdarma</button>
            </form>
          </div>
        </Container>
        <div className='absolute left-0 top-0 h-full brightness-[.15]'>
          <VideoBackground videoObj={videoBanner}></VideoBackground>
        </div>
      </Section>
      <Footer className='relative z-10 pb-4'></Footer>
    </div>
  );
};

export const Head = () => <Seo title='Analýza e-shopu zdarma' />;

export default PageAnalys;
