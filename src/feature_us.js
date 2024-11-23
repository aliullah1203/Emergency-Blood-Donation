import React, { Component } from "react";

class Featureus extends Component {
  render() {
    const features = [
      {
        title: "Find Blood Donors",
        description:
          "Easily locate donors based on your blood type and location with just a few clicks.",
        icon: "fa-solid fa-user-plus",
      },
      {
        title: "Track Your Requests",
        description:
          "Keep track of your blood donation requests and view their status in real-time.",
        icon: "fa-solid fa-tasks",
      },
      {
        title: "Learn About Blood Types",
        description:
          "Understand the importance of blood groups and compatibility with our resources.",
        icon: "fa-solid fa-book",
      },
      {
        title: "Connect with Community",
        description:
          "Join a growing community of donors and recipients to support and save lives.",
        icon: "fa-solid fa-users",
      },
    ];

    return (
      <div className="container mt-5" id="features">
        <h2 className="text-center text-danger mb-4">Features</h2>
        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="card shadow h-100">
                <div className="card-body text-center">
                  <i
                    className={`${feature.icon} fa-3x text-danger mb-3`}
                    aria-hidden="true"
                  ></i>
                  <h5 className="card-title text-danger">{feature.title}</h5>
                  <p className="card-text">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Featureus;
