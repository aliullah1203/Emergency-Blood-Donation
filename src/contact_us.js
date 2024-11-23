import React, { Component } from "react";

function ContactUs() {
    return (
        <div className="container mt-5">
        <h1 className="text-center mb-4 text-danger">Contact Us</h1>
        <div className="row">
            <div className="col-md-12">
            <p className="lead">
                Whether you have questions about blood donation, need assistance, or would like to learn more about our platform, we're here to help. Please reach out to us using the form below, or through the contact details listed.
            </p>

            <h4>Contact Information</h4>
            <p>
                <strong>Email:</strong> aliullah0301@gmail.com
            </p>
            <p>
                <strong>Phone:</strong> (+800) 1648881803
            </p>
            <p>
                <strong>Address:</strong> Holding 153, South Nayanagar, Vatara, Dhaka-1212, Bangladesh
            </p>

            <div style={{ display: "flex", gap: "10px" }}>
                <a
                    href="https://www.facebook.com/muhammadali.ullah.944"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-square-facebook" style={{ fontSize: "2rem" }}></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/muhammad-ali-ullah/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-linkedin-in" style={{ fontSize: "2rem" }}></i>
                </a>
                <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-twitter" style={{ fontSize: "2rem" }}></i>
                </a>
            </div>

            <hr />

            <h4>Get In Touch</h4>
            <form>
                <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                />
                </div>
                <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email Address
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                />
                </div>
                <div className="mb-3">
                <label htmlFor="message" className="form-label">
                    Message
                </label>
                <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Your Message"
                ></textarea>
                </div>
                <button type="submit" className="btn btn-danger w-100">
                Send Message
                </button>
            </form>
            </div>
        </div>
        </div>
    );
}

export default ContactUs;
