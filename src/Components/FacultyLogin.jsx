import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contextapi/AuthContext';

export default function FacultyLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    captchaInput: ''
  });
  const [captcha, setCaptcha] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const { setIsFacultyLoggedIn } = useAuth();
  const navigate = useNavigate();

  const dummyUsername = 'faculty1';
  const dummyPassword = 'pass123';

  // Function to generate a random 5-character CAPTCHA
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  // Generate CAPTCHA on load
  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (formData.captchaInput !== captcha) {
      setError('CAPTCHA does not match.');
      setCaptcha(generateCaptcha()); // Regenerate CAPTCHA on fail
      return;
    }

    if (formData.username === dummyUsername && formData.password === dummyPassword) {
      localStorage.setItem('isFacultyLoggedIn', 'true');
      localStorage.setItem('facultyId', '1');
      localStorage.setItem('facultyName', 'Dr. Dummy');
      localStorage.setItem('facultyUsername', dummyUsername);

      setMessage('Login successful!');
      setIsFacultyLoggedIn(true);
      navigate('/faculty');
    } else {
      setError('Invalid username or password.');
      setCaptcha(generateCaptcha());
    }
  };

  return (
    <div className="login-container">
      <h3 className="login-title">Faculty Login</h3>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}

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
            placeholder="Enter CAPTCHA"
          />
        </div>

        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}
