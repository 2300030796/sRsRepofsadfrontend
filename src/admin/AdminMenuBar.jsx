import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { useAuth } from '../contextapi/AuthContext';

import { GiProgression } from 'react-icons/gi';
import { FaHome, FaUser, FaGraduationCap, FaBook, FaDollarSign, FaCalendarAlt, FaChartBar } from 'react-icons/fa';

import Home from './Home';
import AddFaculty from './AddFaculty';
import ViewFaculty from './ViewFaculty';
import Department from './Department';
import AddCourse from './Courses';
import AdminFeeInfo from './FeeStructure';
import ScheduleExams from './ScheduleExams';
import AddResult from './Results';
import AddStudent from './AddStudent'; // ✅ You were missing this
import AdminLogin from './AdminLogin';
import Viewallstudents from './Viewallstudents';

export default function AdminMenuBar() {
  const { setIsAdminLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    navigate('/'); // Redirect to main page
  };

  return (
    <div>
      <div className='bgimage'></div>
      <div className='admin-dashboard'>
        <nav className='admin-nav'>
          <ul className='adminmenubar'>
            <div className='heading'><GiProgression /> Progress Path</div>
            <li><Link to="/adminmenu/adminhome" className='admin-link'><FaHome /> Home</Link></li>
            <li><Link to="/adminmenu/addfaculty" className='admin-link'><FaUser /> Add Faculty</Link></li>
            <li><Link to="/adminmenu/viewallfaculty" className='admin-link'><FaUser /> View Faculty</Link></li>
            <li><Link to="/adminmenu/addstudent" className='admin-link'><FaGraduationCap /> Add Student</Link></li>
             <li><Link to="/adminmenu/viewstudents" className='admin-link'><FaGraduationCap /> View Students</Link></li>
            <li><Link to="/adminmenu/courses" className='admin-link'><FaBook /> Courses</Link></li>
            <li><Link to="/adminmenu/feestructure" className='admin-link'><FaDollarSign /> Fee Structure</Link></li>
            <li><Link to="/adminmenu/scheduleexams" className='admin-link'><FaCalendarAlt /> Schedule Exams</Link></li>
            <li><Link to="/adminmenu/results" className='admin-link'><FaChartBar /> Results</Link></li>
            <button onClick={handleLogout}>Logout</button>
          </ul>
        </nav>
        <div className='admin-data'>
          <Routes>
            <Route path="adminmenu/adminhome" element={<Home />} />
            <Route path="adminmenu/addfaculty" element={<AddFaculty />} />
            <Route path="adminmenu/viewallfaculty" element={<ViewFaculty />} />
            <Route path="adminmenu/department" element={<Department />} />
            <Route path="adminmenu/addstudent" element={<AddStudent />} />
            <Route path="adminmenu/courses" element={<AddCourse />} />
            <Route path="adminmenu/viewstudents" element={<Viewallstudents/>}/>
            <Route path="adminmenu/feestructure" element={<AdminFeeInfo />} />
            <Route path="adminmenu/scheduleexams" element={<ScheduleExams />} />
            <Route path="adminmenu/results" element={<AddResult />} />
            <Route path="/login" element={<AdminLogin />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
