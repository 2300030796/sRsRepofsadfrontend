import React, { useState } from 'react';
import './newfac.css'; // This CSS contains the .faculty-box and related classes

const Evaluation = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    section: '',
    subject: '',
    examType: '',
    marksObtained: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setFormData({
      studentName: '',
      section: '',
      subject: '',
      examType: '',
      marksObtained: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const percentage = ((parseFloat(formData.marksObtained) / 100) * 100).toFixed(2);

    const result = {
      ...formData,
      percentage: percentage + '%',
    };

    console.log('Evaluation Submitted:', result);
    alert(`Evaluation Submitted Successfully!\nPercentage: ${result.percentage}`);
  };

  return (
    <div className="faculty-box">
      <h2 className="form-title">Submit Student Evaluation</h2>
      <form onSubmit={handleSubmit} className="form-fields">

        <div className="form-row">
          <label htmlFor="studentName">Student Name:</label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="section">Section:</label>
          <input
            type="text"
            id="section"
            name="section"
            value={formData.section}
            onChange={handleChange}
            placeholder="Enter section"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="subject">Subject:</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="">Select Subject</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Computer Science">Computer Science</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="examType">Exam Type:</label>
          <select
            id="examType"
            name="examType"
            value={formData.examType}
            onChange={handleChange}
            required
          >
            <option value="">Select Exam</option>
            <option value="Quiz">Quiz</option>
            <option value="Midterm">Midterm</option>
            <option value="Final">Final</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="marksObtained">Marks Obtained:</label>
          <input
            type="number"
            id="marksObtained"
            name="marksObtained"
            value={formData.marksObtained}
            onChange={handleChange}
            placeholder="0-100"
            min="0"
            max="100"
            required
          />
        </div>

        <div className="button-group">
          <button type="submit" className="faculty-button">Submit</button>
          <button type="button" className="reset-button" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default Evaluation;
