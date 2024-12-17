import React from "react";
import { Link } from "react-router-dom";

function MyRequest() {
  return (
    <div className="col-md-4">
      <div className="card shadow-sm">
        <img
          src="https://img.freepik.com/free-photo/help-bloody-text_1232-2039.jpg"
          className="card-img-top"
          alt="My Requests"
          style={{ height: "200px", objectFit: "cover", width: "100%" }}
        />
        <div className="card-body">
          <h5 className="card-title text-danger">My Requests</h5>
          <p className="card-text">
            View the blood donation requests you've made.
          </p>
          <br />
          <Link to="/requests" className="btn btn-danger w-100">
            View Requests
          </Link>
        </div>
      </div>
    </div>
  );
}
export default MyRequest;
