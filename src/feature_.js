import React, { Component } from "react";

class Feature extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="card shadow-sm">
            <img 
            src="https://www.shutterstock.com/image-photo/word-feature-on-red-puzzle-260nw-2302768249.jpg" 
            className="card-img-top" 
            alt="My Requests" 
            style={{ height: '200px', objectFit: 'cover', width: '100%' }} 
            />
        <div className="card-body">
          <h5 className="card-title text-danger">Other Features</h5>
          <p className="card-text">
            Explore other functionalities of this platform.
          </p> <br/>
          <a href="#" className="btn btn-danger w-100">
            Explore
          </a>
        </div>
      </div>
    </div>
    );
  }
}

export default Feature;
