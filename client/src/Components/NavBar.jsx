import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const NavBar = () => {
  const {openSignIn}=useClerk()
  const {isSignedIn,user}=useUser
  return (
    <div className="w-full flex items-center justify-between px-4 py-3 lg:px-44">
      {/* Logo */}
      <Link to="/">
        <img className="w-32 sm:w-44" src={assets.logo} alt="Logo" />
      </Link>
      {
        isSignedIn?<div>
          <UserButton></UserButton>
        </div>:      <button onClick={()=>openSignIn({})} className="bg-zinc-800 text-white flex items-center gap-2 px-5 py-2 rounded-full sm:px-8 sm:py-3 text-sm shadow-md hover:scale-105 transition duration-200">
        Get Started
        <img className="w-4" src={assets.arrow_icon} alt="Arrow Icon" />
      </button>
      }

      {/* Get Started Button */}
      
    </div>
  );
};

export default NavBar;
