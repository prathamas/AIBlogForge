import React from "react";
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, isSignedIn } = useUser();
  const isAdmin = user?.publicMetadata?.role === "admin";

  if (!isSignedIn || !isAdmin) {
    return <Navigate to="/login-redirect" replace />; // redirect based on role
  }

  return children;
};

export default AdminRoute;
