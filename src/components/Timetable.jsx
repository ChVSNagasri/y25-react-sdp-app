import React, { useEffect } from 'react'
import './table.css'

export default function Timetable() {

  useEffect(() => {
    // Save timetable content once
    localStorage.setItem("academicTimetableLoaded", "true")
  }, [])

  return (
    <div>
        <h1>Academic Timetable</h1>
        <hr></hr>

        <table border={10} bgcolor='white'>
            <tr>
                <th>WEEKDAY</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
            </tr>

            <tr>
                <td>Monday</td>
                <td>25MT1205E<br/>L-S-1<br/>Room No:C008</td>
                <td>25MT1205E<br/>L-S-1<br/>Room No:C008</td>
                <td>25SC1204E<br/>P-S-1<br/>Room No:C008</td>
                <td>25SC1204E<br/>P-S-1<br/>Room No:C008</td>
                <td>25CS1204E<br/>S-S-1<br/>Room No:C008</td>
                <td>25CS1204E<br/>S-S-1<br/>Room No:C008</td>
                <td>-</td>
                <td>-</td>
            </tr>

            <tr>
                <td>Tuesday</td>
                <td>25EC2101E<br/>L-S-1<br/>Room No:C008</td>
                <td>25EC2101E<br/>L-S-1<br/>Room No:C008</td>
                <td>25SC1204E<br/>P-S-1<br/>Room No:C008</td>
                <td>25SC1204E<br/>P-S-1<br/>Room No:C008</td>
                <td>25CS1204E<br/>S-S-1<br/>Room No:C008</td>
                <td>25CS1204E<br/>S-S-1<br/>Room No:C008</td>
                <td>-</td>
                <td>-</td>
            </tr>

            <tr>
                <td>Wednesday</td>
                <td>25EC2101E<br/>L-S-1<br/>Room No:C008</td>
                <td>25EC2101E<br/>L-S-1<br/>Room No:C008</td>
                <td>25SC1204E<br/>L-S-1<br/>Room No:C008</td>
                <td>25SC1204E<br/>L-S-1<br/>Room No:C008</td>
                <td>25CS1204E<br/>S-S-1<br/>Room No:C008</td>
                <td>25CS1204E<br/>S-S-1<br/>Room No:C008</td>
                <td>-</td>
                <td>-</td>
            </tr>

            <tr>
                <td>Thursday</td>
                <td>25EC2101E<br/>L-S-1<br/>Room No:C008</td>
                <td>25EC2101E<br/>L-S-1<br/>Room No:C008</td>
                <td>25SC1204E<br/>P-S-1<br/>Room No:C008</td>
                <td>25SC1204E<br/>P-S-1<br/>Room No:C008</td>
                <td>25CS1204E<br/>P-S-1<br/>Room No:C008</td>
                <td>25CS1204E<br/>P-S-1<br/>Room No:C008</td>
                <td>-</td>
                <td>-</td>
            </tr>

            <tr>
                <td>Friday</td>
                <td>25EC2101E<br/>L-S-1<br/>Room No:C008</td>
                <td>25EC2101E<br/>L-S-1<br/>Room No:C008</td>
                <td>25SC1204E<br/>S-S-1<br/>Room No:C008</td>
                <td>25SC1204E<br/>S-S-1<br/>Room No:C008</td>
                <td>25CS1204E<br/>P-S-1<br/>Room No:C008</td>
                <td>25CS1204E<br/>P-S-1<br/>Room No:C008</td>
                <td>-</td>
                <td>-</td>
            </tr>

            <tr>
                <td>Saturday</td>
                <td>25EC2101E<br/>L-S-1<br/>Room No:C008</td>
                <td>25EC2101E<br/>L-S-1<br/>Room No:C008</td>
                <td>25SC1204E<br/>S-S-1<br/>Room No:C008</td>
                <td>25SC1204E<br/>S-S-1<br/>Room No:C008</td>
                <td>25CS1204E<br/>P-S-1<br/>Room No:C008</td>
                <td>25CS1204E<br/>P-S-1<br/>Room No:C008</td>
                <td>-</td>
                <td>-</td>
            </tr>

        </table>

        <hr></hr>
        <h1>------- No other Timetables found --------</h1>
    </div>
  )
}