import React from 'react';
import { Link } from 'react-router-dom';
import mediafreezone from 'C:/Tushar/Printest clone/frontend/src/assets/mediafreezonelogo.png';

function Navbar({ user }) {
  return (
    <div className="bg-gradient-to-r from-violet-600 to-pink-600 shadow-md border-b-4 border-pink-400">
      <div className="mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center mr-5">
          <img src={mediafreezone} alt="mediafreezone" className="h-12" />
        </Link>
        <div className="flex items-center space-x-6">
          <Link 
            to="/" 
            className="text-white text-lg font-semibold hover:text-pink-300 transition duration-200">
            Home
          </Link>
          <Link 
            to="/create" 
            className="text-white text-lg font-semibold hover:text-pink-300 transition duration-200">
            Create
          </Link>
          <Link 
            to="/account" 
            className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-xl text-violet-600 bg-white hover:bg-pink-300 transition duration-200">
            {user.name.slice(0, 1)}
          </Link>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Navbar;
