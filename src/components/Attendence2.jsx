import React, { useState } from "react";
import "./time1.css";
import { useNavigate } from "react-router-dom";

export default function Attendence2() {
  const navigate = useNavigate();

  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");

  const handleChange = () => {
    if (!year || !semester) {
      alert("Please select both Academic Year and Semester");
      return;
    }
    navigate("/attendence", { state: { year, semester } });
  };

  return (
    <div>
      <h1>Student Attendence Register</h1>
      <hr />
      <h5>Enter Academic Year</h5>
      <select value={year} onChange={(e) => setYear(e.target.value)}>
        <option value="">Select your Academic year</option>
        <option value="2025-2026">2025-2026</option>
        <option value="2024-2025">2024-2025</option>
        <option value="2023-2024">2023-2024</option>
      </select>

      <h5>Enter Registered Sem</h5>
      <select value={semester} onChange={(e) => setSemester(e.target.value)}>
        <option value="">Reg Sem</option>
        <option value="Odd">Odd</option>
        <option value="Even">Even</option>
        <option value="Summer">Summer</option>
      </select>
      <br />
      <button id="time" onClick={handleChange}>
        Search
      </button>
    </div>
  );
}