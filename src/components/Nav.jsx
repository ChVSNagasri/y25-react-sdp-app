import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Home from './Home';
import Profile from './Profile';
import Grade from './Grade';
import Hostel from './Hostel';
import Certificate from './Certificate';
import Transport from './Transport';
import Courses from './Courses';
import Fee from './Fee';
import Tutorial from './Tutorial';
import Attendence from "./Attendence";
import Internals from './Internals';
import Timetable from './Timetable';
import Notfound from './Notfound';
import '../cssfiles/nav.css'

export default function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("lastVisitedPath", location.pathname);
  }, [location.pathname]);

  
  useEffect(() => {
    const lastPath = localStorage.getItem("lastVisitedPath");
    if (lastPath && lastPath !== location.pathname) {
      navigate(lastPath);
    }
  }, []);

  return (
    <div className="nav-container">
      <nav className="nav">
        <button><Link to="/nav"><h3>🏠Home</h3></Link></button>
        <button><Link to="/nav/abt"><h3>🪪Profile</h3></Link></button>
        <button><Link to="/nav/grd"><h3>📜CGPA</h3></Link></button>
        <button><Link to="/nav/host"><h3>🏨Hostel</h3></Link></button>
        <button><Link to="/nav/cer"><h3>🏅Certificate</h3></Link></button>
        <button><Link to="/nav/tran"><h3>🚉Transport</h3></Link></button>
        <button><Link to="/nav/fac"><h3>📚Courses</h3></Link></button>
        <button><Link to="/nav/fee"><h3>💸Fee</h3></Link></button>
        <button><Link to="/nav/tut"><h3>📝Tutorials</h3></Link></button>
        <button><Link to="/nav/att"><h3>🗓️Attendance</h3></Link></button>
        <button><Link to="/nav/int"><h3>🔬Internals</h3></Link></button>
        <button><Link to="/nav/timt"><h3>🕗Timetable</h3></Link></button>
      </nav>

      <div className="content">
        <Routes>
          <Route index element={<Home />} />
          <Route path="abt" element={<Profile />} />
          <Route path="grd" element={<Grade />} />
          <Route path="host" element={<Hostel />} />
          <Route path="cer" element={<Certificate />} />
          <Route path="tran" element={<Transport />} />
          <Route path="fac" element={<Courses />} />
          <Route path="fee" element={<Fee />} />
          <Route path="tut" element={<Tutorial />} />
          <Route path="att" element={<Attendence />} />
          <Route path="int" element={<Internals/>} />
          <Route path="timt" element={<Timetable />} />
          <Route path="*" element={<Notfound/>} />
        </Routes>
      </div>
    </div>
  )
}