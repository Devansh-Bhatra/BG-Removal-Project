import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="flex items-center justify-between flex-wrap px-4 mt-10 lg:px-44 sm:mt-20">
      {/* Left Side */}
      <div className="max-w-xl">
        <h1 className="text-4xl xl:text-5xl font-bold text-neutral-800 leading-tight">
          Remove the <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">background</span> from images instantly
        </h1>

        {/* Short Paragraph */}
        <p className="mt-3 text-gray-600 text-lg">
          AI-powered tool to remove backgrounds in seconds. Just upload and download!
        </p>

        {/* Upload Button */}
        <div className="mt-5">
          <input type="file" id="upload1" hidden />
          <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to bg-fuchsia-500 m-auto hover:scale-105 transition-all duration-700' htmlFor="upload1">
            <img width={20}src={assets.upload_btn_icon} alt="" />
            <p className='text-white text-sm'>Upload Image</p>
          </label>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full max-w-md flex justify-center mt-6 sm:mt-0">
        <img className="rounded-lg shadow-lg" src={assets.header_img} alt="Header Visual" />
      </div>
    </div>
  );
};

export default Header;
