import React, { useState, useEffect } from "react";
import "../cssfiles/Tutorial.css";
import datastruct from "../images/datastruct.jpg";
import frontend from "../images/frontend.jpg";
import Communicatiion from "../images/Communicatiion.webp";
import digital from "../images/digital.jpg";
import maths from "../images/maths.jpg";

export default function Tutorial() {

  const defaultTutorials = [
    {
      img: datastruct,
      courseCode: "25SC1204E",
      course: "Data Structures and Algorithms",
      completion: 75,
    },
    {
      img: frontend,
      courseCode: "25CS1204E",
      course: "Frontend Development",
      completion: 90,
    },
    {
      img: Communicatiion,
      courseCode: "25UC1204E",
      course: "Communication Skills",
      completion: 90,
    },
    {
      img: digital,
      courseCode: "25EC1204E",
      course: "Digital Design",
      completion: 55,
    },
    {
      img: maths,
      courseCode: "25MT1205E",
      course: "Mathematics for AI",
      completion: 80,
    },
  ];

  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    const storedTutorials = localStorage.getItem("tutorials");

    if (storedTutorials) {
      setTutorials(JSON.parse(storedTutorials));
    } else {
      localStorage.setItem("tutorials", JSON.stringify(defaultTutorials));
      setTutorials(defaultTutorials);
    }
  }, []);

  return (
    <div>
      <h1>Student Tutorials</h1>
      <hr />

      <div className="card-container">
        {tutorials.map((item, index) => (
          <div className="student-card" key={index}>
            <img src={item.img} alt={item.course} className="student-image"/>

            <p>
              <strong>Course Code:</strong> {item.courseCode}
            </p>
            <p>
              <strong>Course:</strong> {item.course}
            </p>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${item.completion}%` }} ></div>
            </div>

            <p>{item.completion}% completed</p>
          </div>
        ))}
      </div>
    </div>
  );
}