import { BrowserRouter, Routes, Route} from 'react-router-dom';
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
        <Route path="/student/login" element={<StudentLogin />} />
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
