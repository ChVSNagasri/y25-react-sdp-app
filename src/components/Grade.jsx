import React from 'react'
import './cgpa.css'
export default function Grade() {
  return (
    <div>
        <h1>2500030484 - Grade Evaluation</h1>
        <hr></hr>
        <p><str>Registered credits:32;Awarded credits:16; Awaiting Credits:16;Total Credits:151.5</str></p>
        <div className='cgpa' bgcolor='white'>
          <h1>CGPA:9.57</h1>
        </div>
        <hr></hr>
        <table border={5} bgcolor='white'>
          <tr>
            <th>Course code</th>
            <th>Course Title</th>
            <th>Grade</th>
            <th>Grade points</th>
            <th>Credits</th>
            <th>Reg sem</th>
            <th>Reg Academic year</th>
            <th>Score</th>
          </tr>
          <tr>
            <td>25MT1002E</td>
            <td>Discreet Mathematics</td>
            <td>O</td>
            <td>10</td>
             <td>4</td>
            <td>ODD sem</td>
            <td>2025-2026</td>
            <td>98</td>
          </tr>
          <tr>
            <td>25SC1105E</td>
            <td>Problem solving through Java</td>
            <td>A+</td>
            <td>9</td>
               <td>4.5</td>
            <td>ODD sem</td>
            <td>2025-2026</td>
            <td>89</td>
          </tr>
          <tr>
            <td>25UC1102E</td>
            <td>Language Skills for engineer's</td>
            <td>A+</td>
            <td>9</td>
               <td>2</td>
            <td>ODD sem</td>
            <td>2025-2026</td>
            <td>88</td>
          </tr>
          <tr>
            <td>25UC1203E</td>
            <td>Design thinking through innovation</td>
            <td>A+</td>
            <td>9</td>
               <td>2</td>
            <td>ODD sem</td>
            <td>2025-2026</td>
            <td>89</td>
          </tr>
          <tr>
            <td>25sc1104E</td>
            <td>Fundamentals of web development</td>
            <td>O</td>
            <td>10</td>
               <td>3.5</td>
            <td>ODD sem</td>
            <td>2025-2026</td>
            <td>95</td>
          </tr>
        </table>
    </div>
  )
}
