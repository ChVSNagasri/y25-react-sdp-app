import React from "react";
import "./table2.css";

export default function Attendence() {
  return (
    <div className="attendance-container">
      <h1>Attendance Register</h1>
      <hr />

      <h2 style={{color:"#9ACD32"}} className='sri'>Course Attendance</h2>

      <table className="attendance-table" border={5} bgcolor='white'>
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Component</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>25SC1204E</td>
            <td>Data Structure and Algorithms</td>
            <td>Lab</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>25SC1204E</td>
            <td>Data Structure and Algorithms</td>
            <td>Skill</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>25SC1204E</td>
            <td>Data Structure and Algorithms</td>
            <td>Practical</td>
            <td>90%</td>
          </tr>
          <tr>
            <td>25SC1204E</td>
            <td>Data Structure and Algorithms</td>
            <td>Lecture</td>
            <td>95%</td>
          </tr>
          <tr>
            <td>25CS1204E</td>
            <td>Frontend Development Frameworks and UI Engineering</td>
            <td>Practical</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>25MT1205E</td>
            <td>Mathematics for AI</td>
            <td>Lecture</td>
            <td>80%</td>
          </tr>
          <tr>
            <td>25EC1204E</td>
            <td>Digital Design and Computer Architecture</td>
            <td>Skill</td>
            <td>80%</td>
          </tr>
          <tr>
            <td>25UC1204E</td>
            <td>Communication Skills for Engineers</td>
            <td>Lab</td>
            <td>100%</td>
          </tr>
        </tbody>
      </table>

      <hr />
      <h2 style={{color:"#9ACD32"}}>CodeChef Classes</h2>

      <table className="attendance-table" border={5} bgcolor='white'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>3-1-2026</td><td>Present</td></tr>
          <tr><td>4-1-2026</td><td>Present</td></tr>
          <tr><td>11-1-2026</td><td>Present</td></tr>
          <tr><td>12-2-2026</td><td>Present</td></tr>
          <tr><td>28-1-2026</td><td style={{color:"red"}}>Absent</td></tr>
          <tr><td>29-1-2026</td><td>Present</td></tr>
          <tr><td>5-2-2026</td><td>Present</td></tr>
          <tr><td>6-2-2026</td><td>Present</td></tr>
        </tbody>
      </table>
    </div>
  );
}