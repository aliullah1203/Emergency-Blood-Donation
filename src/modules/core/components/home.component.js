import React from "react";

import { MyRequest } from "../../request";
import { MyDonation } from "../../donation";
import { BloodType } from "../../blood_group";
import { UserProfile } from "../../profile";
import { Feature } from "../../feature";

function Home({ user }) {
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-4 text-danger">Welcome, {user}</h1>
        <div className="row g-4">
          <MyRequest />
          <MyDonation />
          <BloodType />
          <UserProfile />
          <Feature />
        </div>
      </div>
    </>
  );
}

export default Home;
