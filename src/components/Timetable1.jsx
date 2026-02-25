import React, { useState, useEffect } from "react";
import "./time1.css";
import { useNavigate } from "react-router-dom";

export default function Timetable1() {
  const navigate = useNavigate();

  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");

  // Load from localStorage on page load
  useEffect(() => {
    const storedYear = localStorage.getItem("academicYear");
    const storedSemester = localStorage.getItem("semester");

    if (storedYear) setYear(storedYear);
    if (storedSemester) setSemester(storedSemester);
  }, []);

  const handleChange = () => {
    if (!year || !semester) {
      alert("Please select both Academic Year and Semester");
      return;
    }

    // Save to localStorage
    localStorage.setItem("academicYear", year);
    localStorage.setItem("semester", semester);

    navigate("/timetable", { state: { year, semester } });
  };

  return (
    <div>
      <h1>Student Timetable</h1>
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