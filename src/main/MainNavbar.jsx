import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import ContactUs from './Contact';
import AboutUs from './About';


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
  <li><Link to="/contact">ContactUs</Link></li> 
      </ul>
</nav> 


   
      <Routes>
      <Route path="/" element={<HomePage />} exact />
      <Route path="/about" element={<AboutUs />} exact />
     <Route path="/contact" element={<ContactUs />} exact />
        </Routes>

    </div>
  );
}