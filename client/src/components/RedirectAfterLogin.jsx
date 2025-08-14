import React, { useEffect } from 'react'
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
const RedirectAfterLogin = () => {
    const { user, isSignedIn } = useUser();
    const navigate = useNavigate();
    useEffect(() => {
    if (!isSignedIn) {
      navigate("/userlogin");
    } else if (user?.publicMetadata?.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/profile");
    }
  }, [isSignedIn, user, navigate]);
  return null;
}

export default RedirectAfterLogin
