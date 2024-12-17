import axios from "axios";
import React, { useState } from "react";

function BloodRequest() {
  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "A+",
    contactNumber: "",
    urgencyLevel: "Low",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5001/api/donors/add-request",
        {
          patientName: formData.name,
          bloodGroup: formData.bloodGroup,
          contactNumber: formData.contactNumber,
          urgencyLevel: formData.urgencyLevel,
        }
      );
      console.log("Response:", response.data);
      alert("Blood Request Submitted Successfully!");
    } catch (error) {
      console.error("Error submitting the request:", error);
      alert("Failed to submit the blood request. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-danger">Blood Request Form</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Blood Group</label>
          <select
            className="form-select"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
          >
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Contact Number</label>
          <input
            type="text"
            className="form-control"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Urgency Level</label>
          <select
            className="form-select"
            name="urgencyLevel"
            value={formData.urgencyLevel}
            onChange={handleChange}
            required
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <button type="submit" className="btn btn-danger">
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default BloodRequest;
