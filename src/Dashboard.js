import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import required components
import 'bootstrap/dist/css/bootstrap.min.css'; 
import MyRequest from "./my_request";
import MyDonation from "./my_donations";
import BloodType from "./type_blood";
import UserProfile from "./user_profile";
import Feature from "./feature_";
import AboutUs from "./about_us";
import ContactUs from "./contact_us";  
import Featureus from "./feature_us";
import Home from "./home_page";


function Dashboard (props) {
  const { user } = props;
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFFo9ylsjwEXZcHVw0H7La8w2dk70068GvzS6fknk3BOK-jLBa40wp6CZWyaGf4KAJUC8&usqp=CAU"
              alt="Logo"
              style={{ width: '50px', height: '50px' }}
            />
            EB Donation
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/features">
                  Features
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <div className="container mt-5">
        <h1 className="text-center mb-4 text-danger">Welcome, {user}</h1>
        <div className="row g-4">
          <MyRequest />
          <MyDonation />
          <BloodType />
          <UserProfile />
          <Feature />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/Features" element={<Featureus />} /> 
      </Routes>
    </Router>
  );
}

export default Dashboard;
