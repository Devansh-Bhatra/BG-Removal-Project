import React from 'react';
import { assets } from '../assets/assets';

const StepCard = ({ icon, title, description }) => (
  <div className="flex items-start gap-4 bg-white shadow-lg p-7 pb-10 rounded-xl hover:scale-105 transition-transform duration-300">
    <img className="w-10" src={icon} alt={title} />
    <div>
      <p className="text-xl font-medium">{title}</p>
      <p className="text-sm text-neutral-500 mt-1">{description}</p>
    </div>
  </div>
);

const Steps = () => {
  const stepsData = [
    { icon: assets.upload_icon, title: 'Upload Image', description: 'Select an image from your device and upload it.' },
    { icon: assets.remove_bg_icon, title: 'Remove Background', description: 'Our AI automatically removes the background in seconds.' },
    { icon: assets.download_icon, title: 'Download Image', description: 'Download the processed image with a transparent background.' },
  ];

  return (
    <div className="mx-4 lg:mx-44 py-20 xl:py-40">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Steps to Remove Background <br /> Image in Seconds
      </h1>
      <div className="flex justify-between items-center gap-6 mt-16 xl:mt-24 overflow-x-auto px-4">
        {stepsData.map((step, index) => (
          <StepCard key={index} {...step} />
        ))}
      </div>
    </div>
  );
};

export default Steps;
