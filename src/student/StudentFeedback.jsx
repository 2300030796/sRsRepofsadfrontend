import React, { useState, useEffect } from 'react';
import './student.css';
import './style.css';

export default function FeedbackForm() {
  const [semester, setSemester] = useState('Odd');
  const [subjects, setSubjects] = useState([]);
  const [academicYear, setAcademicYear] = useState('2024-2025');
  const [department, setDepartment] = useState('CSE');
  const [feedback, setFeedback] = useState('');

  const subjectsBySemester = {
    Odd: [
      'Full Stack Application Development',
      'Network Protocols And Security',
      'Advanced Objective Oriented Language',
      'Java',
      'Computer Language',
      'Python',
      'Data Base Management Systems',
      'Operating Systems',
    ],
    Even: [
      'Artificial Intelligence',
      'Machine Learning',
      'Data Structures',
      'Algorithms',
      'Discrete Mathematics',
      'Computer Networks',
      'Operating System Concepts',
      'Computer Graphics',
    ],
  };

  useEffect(() => {
    setSubjects(subjectsBySemester[semester]);
  }, [semester]);

  return (
    <div className="feedback-form-container">
      <h2 style={{ fontFamily: 'Poppins, sans-serif', color: '#fff' }}>Submit Feedback</h2>

      <div className="form-group">
        <label>Academic Year:</label>
        <select value={academicYear} onChange={(e) => setAcademicYear(e.target.value)}>
          <option value="2024-2025">2024-2025</option>
          <option value="2023-2024">2023-2024</option>
          <option value="2022-2023">2022-2023</option>
        </select>
      </div>

      <div className="form-group">
        <label>Department:</label>
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option value="CSE">CSE</option>
          <option value="AIDS">AIDS</option>
          <option value="ECE">ECE</option>
          <option value="ME">ME</option>
          <option value="CSIT">CSIT</option>
          <option value="CE">CE</option>
        </select>
      </div>

      <div className="form-group">
        <label>Semester:</label>
        <select value={semester} onChange={(e) => setSemester(e.target.value)}>
          <option value="Odd">Odd</option>
          <option value="Even">Even</option>
        </select>
      </div>

      <div className="form-group">
        <label>Subject:</label>
        <select>
          {subjects.map((subject, index) => (
            <option key={index} value={subject}>{subject}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Feedback:</label>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Write your feedback here..."
        ></textarea>
      </div>

      <button className="submit-button">Submit Feedback</button>
    </div>
  );
}
