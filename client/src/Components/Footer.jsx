import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 px-4 py-3 lg:px-44'>
      <img width={150} src={assets.logo} alt="Logo" />
      
      <p className='flex-1  border-gray-400 pl-4 text-sm text-gray-500 hidden sm:block'>
        Copyright © bhatra.2514 | All rights reserved
      </p>
      
      <div className='flex gap-2'>
        <img width={40} src={assets.google_plus_icon} alt="Google Plus" />
        <img width={40} src={assets.twitter_icon} alt="Twitter" />
        <img width={40} src={assets.facebook_icon} alt="Facebook" />
      </div>
    </div>
  );
};

export default Footer;
