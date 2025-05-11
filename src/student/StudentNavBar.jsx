// StudentNavBar.js
import React from 'react';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import './style.css';
import {
  FaCalendarAlt, FaChartBar, FaUser, FaClipboardList,
  FaRegComments, FaTable, FaHome, FaRupeeSign
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
import { useAuth } from '../contextapi/AuthContext';
import StudentLogin from './StudentLogin';
const { setIsFacultyLoggedIn } = useAuth();
export default function StudentNavBar() {
  const { setIsAdminLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsStudentLoggedIn(false);
    navigate('/'); // Redirect to main page
  };

  return (
    <div>
      
      <div className='bgimage'></div>
      <div className='student-dashboard'>
        <nav className='student-nav'>
          <ul className='studentnav'>
            <div className='heading'><GiProgression /> Progress Path</div>
            <li><Link to="/studentnav/home" className='student-link'><FaHome /> Home</Link></li>
            <li><Link to="/studentnav/attendance" className='student-link'><FaClipboardList /> Attendance</Link></li>
            <li><Link to="/studentnav/results" className='student-link'><FaChartBar /> Results</Link></li>
            <li><Link to="/studentnav/timetable" className='student-link'><FaTable /> Timetable</Link></li>
            <li><Link to="/studentnav/feedback" className='student-link'><FaRegComments /> Feedback</Link></li>
            <li><Link to="/studentnav/examschedule" className='student-link'><FaCalendarAlt /> Exam Schedule</Link></li>
            <li><Link to="/studentnav/feepayments" className='student-link'><FaRupeeSign /> Fee Payments</Link></li>
            <li><Link to="/studentnav/myprofile" className='student-link'><FaUser /> My Profile</Link></li>
          </ul>
          <button className="Faculty-link logout-button" onClick={handleLogout}>
                          <FaSignOutAlt /> Logout
                        </button>
        </nav>

        <div className='student-data'>
          <Routes>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<StudentHome />} />
            <Route path="attendance" element={<StudentAttendence />} />
            <Route path="results" element={<StudentResult />} />
            <Route path="timetable" element={<StudentTimetable />} />
            <Route path="feedback" element={<StudentFeedback />} />
            <Route path="examschedule" element={<StudentExamSchedule />} />
            <Route path="feepayments" element={<StudentFeePayment />} />
            <Route path="myprofile" element={<StudentProfile />} />
            <Route path="/login" element={<StudentLogin />} />

          </Routes>
        </div>
      </div>
    </div>
  );
}
