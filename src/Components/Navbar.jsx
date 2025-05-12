import { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import {
  FaHome, FaUser, FaBuilding, FaGraduationCap, FaBook,
  FaDollarSign, FaCalendarAlt, FaCaretDown, FaSignOutAlt
} from 'react-icons/fa';
import { GiProgression } from "react-icons/gi";

import './Navbar.css';
import Home from './Home';
import Attendance from './Attendance';
import Evaluation from './Evaluation';
import FacultyReports from './Reports';
import FacultyStudentInfo from './StudentInfo';
import FacultyTimeTable from './FacultyTimetable';
import FacultyProfile from './FacultyProfile';
import FacultyLogin from './FacultyLogin';
import { useAuth } from '../contextapi/AuthContext';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
const { setIsFacultyLoggedIn } = useAuth();
  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleLogout = () => {
    // Clear any authentication state if needed
    setIsFacultyLoggedIn(false);

    navigate("/");
  };

  return (
    <div>
      <div className='bgimage'></div>
      <div className='Faculty-Dashboard'>
        <nav className='Faculty-nav'>
          <ul className='Facultymenubar'>
            <div className='heading'><GiProgression /> Progress path</div>
            <li><Link to="/faculty/home" className='Faculty-link'><FaHome /> Home </Link></li>

            {/* Attendance Dropdown */}
            <li className="dropdown-container">
              <div className='Faculty-link dropdown-toggle' onClick={() => toggleDropdown('attendance')}>
                <FaUser /> Attendance <FaCaretDown />
              </div>
              {activeDropdown === 'attendance' && (
                <ul className="dropdown-menu">
                  <li><Link to="/faculty/Attendance" className='dropdown-item'>Mark Attendance</Link></li>
                </ul>
              )}
            </li>

            {/* Evaluation Dropdown */}
            <li className="dropdown-container">
              <div className='Faculty-link dropdown-toggle' onClick={() => toggleDropdown('evaluation')}>
                <FaBuilding /> Evaluation <FaCaretDown />
              </div>
              {activeDropdown === 'evaluation' && (
                <ul className="dropdown-menu">
                  <li><Link to="/faculty/Evaluation" className='dropdown-item'>Grade Reports</Link></li>
                </ul>
              )}
            </li>

            <li><Link to="/faculty/StudentInfo" className='Faculty-link'><FaBook /> Student Info</Link></li>
            <li><Link to="/faculty/Profile" className='Faculty-link'><FaDollarSign /> Profile</Link></li>
            <li><Link to="/faculty/TimeTable" className='Faculty-link'><FaCalendarAlt /> FacultyTimetable</Link></li>
            <li><Link to="/faculty/Reports" className='Faculty-link'><FaGraduationCap /> Reports</Link></li>

            {/*  Logout Button */}
            <li>
              <button className="Faculty-link logout-button" onClick={handleLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </li>
          </ul>
        </nav>

        <div className='Faculty-data'>
          <Routes>
            <Route path="/faculty/home" element={<Home />} />
            <Route path="/faculty/Attendance" element={<Attendance />} />
            <Route path="/faculty/Evaluation" element={<Evaluation />} />
            <Route path="/faculty/Reports" element={<FacultyReports />} />
            <Route path="/faculty/StudentInfo" element={<FacultyStudentInfo />} />
            <Route path="/faculty/FacultyTimeTable" element={<FacultyTimeTable />} />
            <Route path="/faculty/Profile" element={<FacultyProfile />} />
            <Route path="/faculty/Facultylogin" element={<FacultyLogin />} />
            <Route path="*" element={<div style={{ padding: 20, textAlign: 'center' }}>Page Not Found</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
