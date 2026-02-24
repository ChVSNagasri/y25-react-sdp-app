import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Nav from './components/Nav';
import Timetable from './components/Timetable';
import Attendence from './components/Attendence';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/nav/*" element={<Nav/>} />
        <Route path="/timetable" element={<Timetable/>}/>
        <Route path="/attendence" element={<Attendence/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
