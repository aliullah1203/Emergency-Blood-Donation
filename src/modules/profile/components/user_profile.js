import React from "react";
import { Link } from "react-router-dom";

function UserProfile() {
  return (
    <div className="col-md-4">
      <div className="card shadow-sm">
        <img
          src="https://cdn-icons-png.flaticon.com/512/10165/10165948.png"
          className="card-img-top"
          alt="My Requests"
          style={{ height: "200px", objectFit: "cover", width: "100%" }}
        />
        <div className="card-body">
          <h5 className="card-title text-danger">Profile</h5>
          <p className="card-text">
            Update your personal details and contact information.
          </p>
          <Link to="/update-profile" className="btn btn-danger w-100">
            Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
