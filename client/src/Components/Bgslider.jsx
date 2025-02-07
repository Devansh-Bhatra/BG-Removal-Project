import React, { useState } from 'react';
import { assets } from '../assets/assets'; // Make sure the paths are correct

const Bgslider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(Number(e.target.value));  // Ensure the value is a number
  };

  return (

      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="relative w-full max-w-3xl p-4 bg-white rounded-xl shadow-lg overflow-hidden">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
          Remove Background with High <br />Quality and Accuracy
        </h1>
        <br />
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl">
          <img 
            src={assets.image_w_bg} 
            alt="With Background" 
            className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-300 ease-in-out rounded"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          />
          <img 
            src={assets.image_wo_bg} 
            alt="Without Background" 
            className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-300 ease-in-out"
            style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          />
          <input 
  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 z-10 slider" 
  type="range" 
  min={0} 
  max={100} 
  value={sliderPosition} 
  onChange={handleSliderChange}  
/>

        </div>
      </div>
    </div>
    
    
  );
};

export default Bgslider;
