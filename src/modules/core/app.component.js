import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home.component";
import Navbar from "./components/Navbar.component";

import { Login, UpdateProfile } from "../profile";
import { BloodRequest } from "../request";
import { AboutUs, ContactUs } from "../platform";
import { FeatureUs } from "../feature";
import { DonorRegistration } from "../donation";
import { AvailableBloodGroups } from "../blood_group";

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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/requests" element={<BloodRequest />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/features" element={<FeatureUs />} />
        <Route path="/view-donations" element={<DonorRegistration />} />
        <Route path="/check-availability" element={<AvailableBloodGroups />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
