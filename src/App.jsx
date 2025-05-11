// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from "./contextapi/AuthContext";

import AdminLogin from './admin/AdminLogin';
import MainNavBar from './main/MainNavbar';
import Navbar from './Components/Navbar';
import AdminMenuBar from './admin/AdminMenuBar';
import FacultyLogin from './Components/FacultyLogin';
import StudentNavBar from './student/StudentNavBar';
import StudentLogin from './student/StudentLogin';



function AppContent() {
  const { isAdminLoggedIn, isStudentLoggedIn, isFacultyLoggedIn } = useAuth();
  
  // Conditionally render navigation based on login state
  const renderNavBar = () => {
    if (isAdminLoggedIn) return <AdminMenuBar />;
    if (isStudentLoggedIn) return <StudentNavBar />;
    if (isFacultyLoggedIn) return <Navbar />;
    return <MainNavBar />;
  };

  return (
    <>
      {renderNavBar()}
      <Routes>
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/faclogin" element={<FacultyLogin />} />
        <Route path="/studentlogin" element={<StudentLogin />} />

        
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
