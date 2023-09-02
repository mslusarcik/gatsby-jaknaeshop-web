import React from 'react';
import { TbCopyright } from 'react-icons/tb';
import jaknaeshopLogo from '../../images/jaknaeshopLogo.png';
import { Image } from 'react-bootstrap';

const Footer = ({ className }) => {
  return (
    <footer className={className || ''}>
      <span className='md:text-md text-center text-sm'>
        <Image src={jaknaeshopLogo} className='mx-auto max-w-[110px] pb-4 pt-6' />
        <TbCopyright className='relative bottom-[2px] mr-1 inline-block'></TbCopyright> 2023 | Made by Miroslav Slusarčík
        <br />
        <span className='mt-2 block text-[12px]'>
          Odesláním formuláře souhlasíte s{' '}
          <a href='/podminky/ochrana-udaju' className='text-white'>
            podmínkami pro&nbsp;ochranu osobních údajů
          </a>
          .
        </span>
      </span>
    </footer>
  );
};

export default Footer;
