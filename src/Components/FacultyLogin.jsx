import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contextapi/AuthContext';
import './newfac.css';

export default function FacultyLogin() {
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

  const { setIsFacultyLoggedIn } = useAuth();
  const navigate = useNavigate();

  const dummyUsername = 'faculty1';
  const dummyPassword = 'pass123';

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
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
    setError('');
    setMessage('');

    if (formData.captchaInput !== captcha) {
      setError('CAPTCHA does not match.');
      setCaptcha(generateCaptcha());
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

  const handleForgotPassword = () => {
    if (forgotUsername === dummyUsername) {
      setMessage('Your password hint: It is "pass123"');
      setError('');
    } else {
      setError('Username not found.');
      setMessage('');
    }
  };

  return (
    <div className="login-container">
      <h3 className="login-title">Faculty Login</h3>

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
              className="form-input"
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
              className="form-input"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group captcha-group">
            <label htmlFor="captchaInput">CAPTCHA</label>
            <div className="captcha-box" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="captcha-text" style={{ fontSize: '18px', fontWeight: 'bold' }}>{captcha}</span>
              <button
                type="button"
                onClick={() => setCaptcha(generateCaptcha())}
                className="refresh-captcha"
                title="Refresh Captcha"
                style={{ fontSize: '18px', cursor: 'pointer', background: 'transparent', border: 'none' }}
              >
                🔄
              </button>
            </div>
            <input
              type="text"
              id="captchaInput"
              className="form-input"
              value={formData.captchaInput}
              onChange={handleChange}
              required
              placeholder="Enter CAPTCHA"
            />
          </div>

          <button type="submit" className="button">Login</button>
          <p style={{ textAlign: 'center', marginTop: '10px' }}>
            <button type="button" className="button" style={{ background: '#ccc' }} onClick={() => setShowForgot(true)}>
              Forgot Password?
            </button>
          </p>
        </form>
      )}
    </div>
  );
}
