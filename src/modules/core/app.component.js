import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home.component";

import { Login, UpdateProfile } from "../profile";
import { BloodRequest } from "../request";
import { AboutUs, ContactUs } from "../platform";
import { FeatureUs } from "../feature";
import { DonorRegistration } from "../donation";
import { AvailableBloodGroups } from "../blood_group";
import PrivateRoute from "./private-route.component";

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      setUser(localStorage.getItem("email"));
    }
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<PrivateRoute element={<Home user={user} />} />}
        />
        <Route
          path="/requests"
          element={<PrivateRoute element={<BloodRequest />} />}
        />
        <Route path="/about" element={<PrivateRoute element={<AboutUs />} />} />
        <Route
          path="/contact-us"
          element={<PrivateRoute element={<ContactUs />} />}
        />
        <Route
          path="/features"
          element={<PrivateRoute element={<FeatureUs />} />}
        />
        <Route
          path="/view-donations"
          element={<PrivateRoute element={<DonorRegistration />} />}
        />
        <Route
          path="/check-availability"
          element={<PrivateRoute element={<AvailableBloodGroups />} />}
        />
        <Route
          path="/update-profile"
          element={<PrivateRoute element={<UpdateProfile />} />}
        />
        <Route
          path="/features"
          element={<PrivateRoute element={<FeatureUs />} />}
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
