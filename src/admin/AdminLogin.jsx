import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';
import { useAuth } from '../contextapi/AuthContext';

export default function AdminLogin() {
  const [formData, setFormData] = useState({ username: '', password: '', captchaInput: '' });
  const [captcha, setCaptcha] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const { setIsAdminLoggedIn } = useAuth();
  const navigate = useNavigate();

  const dummyAdmin = { username: 'admin', password: 'admin123' };

  // Function to generate a random 5-character captcha
  const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  // Generate new captcha on mount
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
      setError('CAPTCHA does not match. Please try again.');
      setCaptcha(generateCaptcha()); // regenerate on fail
      return;
    }

    if (
      formData.username === dummyAdmin.username &&
      formData.password === dummyAdmin.password
    ) {
      setMessage('Login successful!');
      setIsAdminLoggedIn(true);
      navigate('/adminmenu');
    } else {
      setError('Invalid username or password.');
      setCaptcha(generateCaptcha()); // regenerate on fail
    }
  };

  return (
    <div className="login-container">
      <h3 className="login-title">Admin Login</h3>
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
      </form>
    </div>
  );
}
