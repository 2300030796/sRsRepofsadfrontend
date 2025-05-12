import { useState } from 'react';


export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with an axios POST request if backend is ready
    console.log("Contact Form Data:", formData);
    setFeedback("Thank you for contacting us. We'll get back to you soon!");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="login-container">
      <h3 className="login-title">Contact Us</h3>
      {feedback && <p className="success-message">{feedback}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-input"
            rows="4"
          />
        </div>
        <button type="submit" className="button">Send Message</button>
      </form>
    </div>
  );
}
