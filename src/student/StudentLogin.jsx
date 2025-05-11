import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contextapi/AuthContext';

export default function StudentLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { setIsStudentLoggedIn } = useAuth();  // Assumes AuthContext provides this

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy login credentials
    const dummyUsername = 'student1';
    const dummyPassword = 'pass123';

    if (formData.username === dummyUsername && formData.password === dummyPassword) {
      localStorage.setItem("isStudentLoggedIn", "true");
      localStorage.setItem("studentId", "101"); // Dummy student ID
      localStorage.setItem("studentName", "John Doe");
      localStorage.setItem("studentUsername", dummyUsername);

      setMessage("Login successful!");
      setIsStudentLoggedIn(true);
      navigate("/student");  // Adjust to your route
    } else {
      setMessage('');
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="login-container">
      <h3 className="login-title">Student Login</h3>
      {
        message ? 
          <p className="success-message">{message}</p> : 
          <p className="error-message">{error}</p>
      }
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}
