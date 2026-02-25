import React, { useState, useEffect } from "react";
import "./Internals.css";

const Internals = () => {

  const defaultInternals = [
    { code: "25SC1203E", name: "Problem Solving through Java", assessment: "Midterm 1", marks: 24, total: 25, semester: "1" },
    { code: "25MT1002E", name: "Discrete Mathematics", assessment: "Quiz 1", marks: 18, total: 20, semester: "1" },
    { code: "25SC1204E", name: "Fundamentals of Web Development", assessment: "Assignment", marks: 9, total: 10, semester: "1" },
    { code: "25UC1203E", name: "Design Thinking through Innovation", assessment: "Project", marks: 24, total: 25, semester: "1" },
    { code: "25UC1002E", name: "Language Skills for Engineering", assessment: "Quiz", marks: 14, total: 15, semester: "1" },
    { code: "25SC1205E", name: "Data Structures and Algorithms", assessment: "Midterm 1", marks: 24, total: 25, semester: "2" },
    { code: "25CS1204E", name: "Frontend Development Frameworks and UI Engineering", assessment: "Assignment", marks: 8, total: 10, semester: "2" },
    { code: "25MT1102E", name: "Mathematics for AI", assessment: "Quiz 1", marks: 18, total: 20, semester: "2" },
    { code: "25EC1204E", name: "Digital Design and Computer Architecture", assessment: "Lab", marks: 15, total: 15, semester: "2" },
    { code: "25UC1204E", name: "Communication Skills for Engineers", assessment: "Project", marks: 24, total: 25, semester: "2" },
  ];

  const [internals, setInternals] = useState([]);

  useEffect(() => {
    const storedInternals = localStorage.getItem("internals");

    if (storedInternals) {
      setInternals(JSON.parse(storedInternals));
    } else {
      localStorage.setItem("internals", JSON.stringify(defaultInternals));
      setInternals(defaultInternals);
    }
  }, []);

  // Group by semester
  const semesters = {};
  internals.forEach((item) => {
    if (!semesters[item.semester]) semesters[item.semester] = [];
    semesters[item.semester].push(item);
  });

  return (
    <div className="internals-page">
      <h1 className="page-title">Internals</h1>

      {Object.keys(semesters).map((sem) => (
        <div key={sem} className="semester-section">
          <h2 className="semester-title">Semester {sem}</h2>

          <table className="internals-table">
            <thead>
              <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Assessment</th>
                <th>Marks Obtained</th>
                <th>Total Marks</th>
              </tr>
            </thead>

            <tbody>
              {semesters[sem].map((item, index) => (
                <tr key={index}>
                  <td>{item.code}</td>
                  <td>{item.name}</td>
                  <td>{item.assessment}</td>
                  <td>{item.marks}</td>
                  <td>{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Internals;