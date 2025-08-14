import React from 'react'
import { SignIn } from '@clerk/clerk-react';
import { useAuth } from '@clerk/clerk-react';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {

    const { isSignedIn } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
    if (isSignedIn) {
      navigate("/"); 
    }
  }, [isSignedIn, navigate]);
  return (
    <div className='flex justify-center content-center my-20'>
<SignIn

  appearance={{
    variables: {
      colorPrimary: "#5044E5",
      colorPrimaryHover: "#4037c5",
    },
    elements: {
      card: "shadow-2xl rounded-xl p-6 bg-white",
      headerTitle: "text-2xl font-bold text-[#5044E5]",
      formButtonPrimary: "font-semibold rounded-lg py-2",
      formFieldActionLink:
        "text-[#5044E5] hover:text-[#4037c5] hover:bg-transparent",
    },
  }}
/>

    </div>
  )
}

export default UserLogin
