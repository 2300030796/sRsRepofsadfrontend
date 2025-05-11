import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import About from './Aboutus';
import Contact from './Contact';


export default function MainNavBar() 
{
  return (
    <div>
   <nav className="navbar">
  <div className="navbar-left">
    <div className="logo"></div>
  </div>
  <ul className="nav-links">
 <li><Link to="/about">About</Link></li> 
  <li><Link to="/contactus">ContactUs</Link></li> 
      </ul>
</nav> 


   
      <Routes>
      <Route path="/" element={<HomePage />} exact />
      <Route path="/about" element={<About />} exact />
     <Route path="/contactus" element={<Contact />} exact />
        </Routes>

    </div>
  );
}