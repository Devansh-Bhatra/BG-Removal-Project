import React from 'react'
import { assets } from '../assets/assets'

const Result = () => {
  return (
    <div className="mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]">
      <div className="bg-white rounded-lg px-8 py-6 drop-shadow-sm">
        <div className="grid sm:grid-cols-2 gap-8">
          {/* Left Side: Original Image */}
          <div>
            <p className="font-semibold text-gray-600 mb-2">Original</p>
            <img 
              className="rounded-md border w-full h-auto object-contain" 
              src={assets.image_w_bg} 
              alt="Original" 
            />
          </div>

          {/* Right Side: Background Removed Image */}
          <div className="flex flex-col">
            <p className="font-semibold text-gray-600 mb-2">Background Removed</p>
            <div className="rounded-md border border-gray-300 bg-layer relative overflow-hidden h-full">
              <img 
                className="w-full h-auto object-contain" 
                src={assets.image_wo_bg} 
                alt="Background Removed" 
              />
              
              {/* 
              <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                <div className="border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin"></div>
              </div>
              Loading Indicator */}

            </div>
          </div>
        </div>
        <div className='flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6'>
          <button className='px-8 py-2.5 text-violet-600 text-sm border-violet-600 rounded-full hover:scale-105 transition-all duration-700'>Try another image</button>
          <a className='px-8 py-2.5 text-white text-sm bg-gradient-to-r from violet-600 to-fuchsia-500 rounded-full hover:scale-105 transition-all duration-700' href="">Download Image</a>
        </div>
      </div>
    </div>
  )
}

export default Result
