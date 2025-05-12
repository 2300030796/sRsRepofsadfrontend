import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './studentlgn.css'; // Reuse same CSS
import { useAuth } from '../contextapi/AuthContext';

export default function StudentLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    captchaInput: ''
  });
  const [captcha, setCaptcha] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showForgot, setShowForgot] = useState(false);
  const [forgotUsername, setForgotUsername] = useState('');
  const { setIsStudentLoggedIn } = useAuth();
  const navigate = useNavigate();

  const dummyStudent = { username: 'student1', password: 'pass123' };

  const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (formData.captchaInput !== captcha) {
      setError('CAPTCHA does not match. Please try again.');
      setCaptcha(generateCaptcha());
      return;
    }

    if (formData.username === dummyStudent.username && formData.password === dummyStudent.password) {
      localStorage.setItem("isStudentLoggedIn", "true");
      localStorage.setItem("studentId", "10");
      localStorage.setItem("studentName", "Manu");
      localStorage.setItem("studentUsername", "manu");

      setMessage("Login successful!");
      setIsStudentLoggedIn(true);
      navigate("/student/home");
    } else {
      setError("Invalid username or password.");
      setCaptcha(generateCaptcha());
    }
  };

  const handleForgotPassword = () => {
    if (forgotUsername === dummyStudent.username) {
      setMessage('Your password hint: It is "pass123"');
      setError('');
    } else {
      setError('Username not found.');
      setMessage('');
    }
  };

  return (
    <div className="login-container">
      <h3 className="login-title">Student Login</h3>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
      
      {showForgot ? (
        <>
          <div className="form-group">
            <label>Enter your username</label>
            <input
              type="text"
              value={forgotUsername}
              onChange={(e) => setForgotUsername(e.target.value)}
              className="form-input"
              placeholder="Username"
              required
            />
          </div>
          <button onClick={handleForgotPassword} className="button">Get Password Hint</button>
          <p style={{ textAlign: 'center', marginTop: '10px' }}>
            <button onClick={() => setShowForgot(false)} className="button" style={{ background: '#ccc' }}>
              Back to Login
            </button>
          </p>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="form-input"
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
              className="form-input"
            />
          </div>

          <div className="form-group captcha-group">
            <label>CAPTCHA</label>
            <div className="captcha-box">
              <span className="captcha-text">{captcha}</span>
              <button
                type="button"
                onClick={() => setCaptcha(generateCaptcha())}
                className="refresh-captcha"
                title="Refresh Captcha"
              >
                🔄
              </button>
            </div>
            <input
              type="text"
              id="captchaInput"
              value={formData.captchaInput}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Enter CAPTCHA"
            />
          </div>

          <button type="submit" className="button">Login</button>
          <p style={{ textAlign: 'center', marginTop: '10px' }}>
            <button
              type="button"
              onClick={() => setShowForgot(true)}
              className="button"
              style={{ background: '#ddd' }}
            >
              Forgot Password?
            </button>
          </p>
        </form>
      )}
    </div>
  );
}
