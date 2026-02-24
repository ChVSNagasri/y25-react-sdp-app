import React from "react";
import Nag from "./Nag.jpeg";
import "./profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="card">
        <img className="nag" src={Nag} alt="Profile" />

        <h1 className="name">CHINTALAPTI VENKATA SAI NAGASRI</h1>
        <h3 className="uid">University ID: 2500030484</h3>

        <hr />

        <div className="info">
          <p><strong>Admission Date:</strong> 11-06-2025</p>
          <p><strong>Program:</strong> UG</p>
          <p><strong>Major Degree:</strong> B-Tech CSE (PBL)</p>
          <p><strong>Date of Birth:</strong> 11-09-2008</p>
          <p><strong>Blood Group:</strong> O+ve</p>
          <p><strong>Email:</strong> chintalapatinagasrivs@gmail.com</p>
        </div>

        <hr />

        <div className="info">
          <p><strong>Father Name:</strong> Chintalapati Vani Prasad</p>
          <p><strong>Mother Name:</strong> Chintalapati Mahalakshmi</p>
          <p><strong>Mother Tongue:</strong> Telugu</p>
          <p><strong>Caste Category:</strong> OC</p>
        </div>
      </div>
    </div>
  );
}