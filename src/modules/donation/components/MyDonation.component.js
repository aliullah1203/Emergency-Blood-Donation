import React, { Component } from "react";
import { Link } from "react-router-dom";

function MyDonation() {
  return (
    <div className="col-md-4">
      <div className="card shadow-sm">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/008/190/897/small_2x/human-blood-donate-on-white-background-free-vector.jpg"
          className="card-img-top"
          alt="My Donations"
          style={{ height: "200px", objectFit: "cover", width: "100%" }}
        />
        <div className="card-body">
          <h5 className="card-title text-danger">My Donations</h5>
          <p className="card-text">
            Check your blood donation history and upcoming appointments.
          </p>
          <Link to="/view-donations" className="btn btn-danger w-100">
            View Donations
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyDonation;
