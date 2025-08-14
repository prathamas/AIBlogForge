import React from 'react';
import { assets } from '../assets/assets';
import logo from '../assets/logonn.png';
import { useAppContext } from '../context/AppContext';
import { useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { user, isSignedIn } = useUser();
  const isAdmin = user?.publicMetadata?.role === "admin";
  const { navigate } = useAppContext();

  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32">
      {/* Logo */}
      <img
        onClick={() => navigate('/')}
        src={logo}
        alt="logo"
        className="w-32 sm:w-44 cursor-pointer object-contain"
      />

      {/* Auth button */}
      {isSignedIn ? (
        isAdmin ? (
          <button
            onClick={() => navigate("/admin")}
            className="flex items-center gap-2 rounded-full text-sm bg-primary text-white px-10 py-2.5"
          >
            Dashboard
            <img src={assets.arrow} alt="arrow" className="w-3" />
          </button>
        ) : (
          <button
            onClick={() => navigate("/profile")}
            className="flex items-center gap-2 rounded-full text-sm bg-primary text-white px-10 py-2.5"
          >
            Profile
            <img src={assets.arrow} alt="arrow" className="w-3" />
          </button>
        )
      ) : (
        <button
          onClick={() => navigate("/userlogin")}
          className="flex items-center gap-2 rounded-full text-sm bg-primary text-white px-10 py-2.5"
        >
          Login
          <img src={assets.arrow} alt="arrow" className="w-3" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
