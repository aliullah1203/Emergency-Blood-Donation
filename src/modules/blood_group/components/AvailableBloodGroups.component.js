import React, { useState } from "react";

function AvailableBloodGroups() {
  const [bloodGroups, setBloodGroups] = useState([
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-",
  ]);

  return (
    <div className="container mt-4">
      <h3 className="text-center text-danger">Available Blood Groups</h3>
      <ul className="list-group">
        {bloodGroups.map((group, index) => (
          <li key={index} className="list-group-item">
            {group}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AvailableBloodGroups;
