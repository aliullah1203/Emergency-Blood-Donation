import React from "react";

function AboutUs() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-danger">About Us</h1>
      <div className="row">
        <div className="col-md-12">
          <h3 className="mb-4">Our Mission:</h3>
          <p className="lead">
            Welcome to the Emergency Blood Donation System, where we aim to
            connect people in need of blood with willing donors, ensuring that
            lives are saved when every second counts. Our platform was built
            with the mission of making blood donation more accessible,
            transparent, and efficient during emergencies.
          </p>

          <h3 className="mb-4">Why Choose Us?</h3>
          <ul>
            <li>
              <strong>Real-time Request System:</strong> Blood donation requests
              are made in real-time, so donors can be alerted to emergency
              situations right away.
            </li>
            <li>
              <strong>Wide Network of Donors:</strong> We have a growing network
              of volunteers who are ready to donate at a moment's notice.
            </li>
            <li>
              <strong>Blood Type Matching:</strong> Our platform simplifies
              finding the right blood type, reducing the time it takes to find a
              match.
            </li>
            <li>
              <strong>Trusted and Secure:</strong> All your information, whether
              you're a donor or recipient, is kept private and secure. We make
              sure that the process is reliable and safe for everyone.
            </li>
          </ul>

          <h3 className="mb-4">How It Works</h3>
          <ol>
            <li>
              <strong>For Donors:</strong> Simply sign up and create a profile
              with your blood type. You'll receive notifications when there is a
              need for your specific blood type in your area.
            </li>
            <li>
              <strong>For Recipients:</strong> If you're in need of a blood
              donation, you can post a request. Our system will alert registered
              donors who are available to donate.
            </li>
            <li>
              <strong>Seamless Process:</strong> Once a donor is identified, the
              platform ensures that both parties can communicate and coordinate
              logistics easily and safely.
            </li>
          </ol>

          <h3 className="mb-4">Join Us Today</h3>
          <p className="lead text-center">
            Whether you're looking to donate blood or need a donation, our
            platform is here to help. Together, we can ensure that no one has to
            face an emergency without the necessary support.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
