import React from "react";
import { Link } from "react-router-dom";

function BloodType() {
  return (
    <div className="col-md-4">
      <div className="card shadow-sm">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXs3_8PjJN2aFVOZvIihRMroSNPHisOFWhhw&s"
          className="card-img-top"
          alt="My Requests"
          style={{ height: "200px", objectFit: "cover", width: "100%" }}
        />
        <div className="card-body">
          <h5 className="card-title text-danger">Available Blood Groups</h5>
          <p className="card-text">
            Check which blood groups are currently available in stock.
          </p>
          <Link to="/check-availability" className="btn btn-danger w-100">
            Check Availability
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BloodType;
