import React from "react";
import { Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.component";

const PrivateRoute = ({ element }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return isLoggedIn ? (
    <>
      <Navbar />
      {element}
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
