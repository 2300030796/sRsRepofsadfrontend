import React from 'react';
import { Link, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import './style.css';
import {
  FaCalendarAlt, FaChartBar, FaUser, FaClipboardList,
  FaRegComments, FaTable, FaHome, FaRupeeSign, FaSignOutAlt
} from 'react-icons/fa';
import { GiProgression } from "react-icons/gi";

import StudentHome from './StudentHome';
import StudentAttendence from './StudentAttendence';
import StudentResult from './StudentResult';
import StudentTimetable from './StudentTimetable';
import StudentFeedback from './StudentFeedback';
import StudentExamSchedule from './StudentExamSchedule';
import StudentProfile from './StudentProfile';
import StudentFeePayment from './StudentFeePayment';
import StudentLogin from './StudentLogin';

import { useAuth } from '../contextapi/AuthContext';

export default function StudentNavBar() {
  const { setIsStudentLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isStudentLoggedIn");
    setIsStudentLoggedIn(false);
    navigate('/'); 
  };

  return (
    <div>
      <div className='bgimage'></div>
      <div className='student-dashboard'>
        <nav className='student-nav'>
          <ul className='studentnav'>
            <div className='heading'><GiProgression /> Progress Path</div>
            <li><Link to="/student/home" className='student-link'><FaHome /> Home</Link></li>
            <li><Link to="/student/attendance" className='student-link'><FaClipboardList /> Attendance</Link></li>
            <li><Link to="/student/results" className='student-link'><FaChartBar /> Results</Link></li>
            <li><Link to="/student/timetable" className='student-link'><FaTable /> Timetable</Link></li>
            <li><Link to="/student/feedback" className='student-link'><FaRegComments /> Feedback</Link></li>
            <li><Link to="/student/examschedule" className='student-link'><FaCalendarAlt /> Exam Schedule</Link></li>
            <li><Link to="/student/feepayments" className='student-link'><FaRupeeSign /> Fee Payments</Link></li>
            <li><Link to="/student/myprofile" className='student-link'><FaUser /> My Profile</Link></li>
          </ul>
          <button className="Faculty-link logout-button" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </nav>

        <div className='student-data'>
          <Routes>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="/student/home" element={<StudentHome />} />
            <Route path="/student/attendance" element={<StudentAttendence />} />
            <Route path="/student/results" element={<StudentResult />} />
            <Route path="/student/timetable" element={<StudentTimetable />} />
            <Route path="/student/feedback" element={<StudentFeedback />} />
            <Route path="/student/examschedule" element={<StudentExamSchedule />} />
            <Route path="/student/feepayments" element={<StudentFeePayment />} />
            <Route path="/student/myprofile" element={<StudentProfile />} />
            <Route path="/student/login" element={<StudentLogin />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
