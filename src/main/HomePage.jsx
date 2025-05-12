import { useNavigate } from 'react-router-dom';
import './main.css';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className='homepage-container'>
      <div className="project-title">Progress Path</div>
      <div className="homepage-container">
        <h1>Welcome to the Home Page </h1>
        <div className="button-row">
          <button className="image-button" onClick={()=>{
            navigate("/faclogin")
          }}>
            <img src="/faculty.jpg" alt="Faculty" />
          </button>
          <button className="image-button" onClick={()=>{
            navigate("/student/login")
          }}>
            <img src="/Student.jpg" alt="Student" />
          </button>
          <button className="image-button" onClick={() => navigate('/adminlogin')}>
            <img src="/admin.jpg" alt="Admin" />
          </button>
        </div >
      </div>
    </div>
  );
}
