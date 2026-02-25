import React, { useEffect, useState } from "react";
import "./table2.css";

export default function Attendance() {
  const [courseAttendance, setCourseAttendance] = useState([]);
  const [codeChefAttendance, setCodeChefAttendance] = useState([]);

  useEffect(() => {
    // Initial data
    const courses = [
      { code: "25SC1204E", name: "Data Structure and Algorithms", component: "Lab", percentage: "100%" },
      { code: "25SC1204E", name: "Data Structure and Algorithms", component: "Skill", percentage: "100%" },
      { code: "25SC1204E", name: "Data Structure and Algorithms", component: "Practical", percentage: "90%" },
      { code: "25SC1204E", name: "Data Structure and Algorithms", component: "Lecture", percentage: "95%" },
      { code: "25CS1204E", name: "Frontend Development Frameworks and UI Engineering", component: "Practical", percentage: "100%" },
      { code: "25MT1205E", name: "Mathematics for AI", component: "Lecture", percentage: "80%" },
      { code: "25EC1204E", name: "Digital Design and Computer Architecture", component: "Skill", percentage: "80%" },
      { code: "25UC1204E", name: "Communication Skills for Engineers", component: "Lab", percentage: "100%" },
    ];

    const codechef = [
      { date: "3-1-2026", status: "Present" },
      { date: "4-1-2026", status: "Present" },
      { date: "11-1-2026", status: "Present" },
      { date: "12-2-2026", status: "Present" },
      { date: "28-1-2026", status: "Absent" },
      { date: "29-1-2026", status: "Present" },
      { date: "5-2-2026", status: "Present" },
      { date: "6-2-2026", status: "Present" },
    ];

    // Save to localStorage only once
    if (!localStorage.getItem("courseAttendance")) {
      localStorage.setItem("courseAttendance", JSON.stringify(courses));
    }

    if (!localStorage.getItem("codeChefAttendance")) {
      localStorage.setItem("codeChefAttendance", JSON.stringify(codechef));
    }

    // Read from localStorage
    setCourseAttendance(JSON.parse(localStorage.getItem("courseAttendance")));
    setCodeChefAttendance(JSON.parse(localStorage.getItem("codeChefAttendance")));
  }, []);

  return (
    <div className="attendance-container">
      <h1>Attendance Register</h1>
      <hr />

      <h2 style={{ color: "#9ACD32" }}>Course Attendance</h2>
      <table className="attendance-table" border={5} bgcolor="white">
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Component</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {courseAttendance.map((item, index) => (
            <tr key={index}>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.component}</td>
              <td>{item.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      <h2 style={{ color: "#9ACD32" }}>CodeChef Classes</h2>
      <table className="attendance-table" border={5} bgcolor="white">
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {codeChefAttendance.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td style={{ color: item.status === "Absent" ? "red" : "black" }}>
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}