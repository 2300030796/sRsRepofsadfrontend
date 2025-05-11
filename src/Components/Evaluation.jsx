import React, { useState } from 'react';


const Evaluation = () => {
  const [evaluationData, setEvaluationData] = useState({
    studentName: '',
    section: '',
    subject: '',
    examType: '',
    marksObtained: '',
  });

  const handleChange = (e) => {
    setEvaluationData({
      ...evaluationData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalMarks = 100; // Fixed total marks
    const percentage = ((parseFloat(evaluationData.marksObtained) / totalMarks) * 100).toFixed(2);

    const result = {
      ...evaluationData,
      percentage: percentage + '%',
    };

    console.log('Evaluation submitted:', result);
    alert(`Evaluation Submitted Successfully!\nPercentage: ${result.percentage}`);
  };

  return (
    <div className="evaluation-container">
      <h2 className="form-title">Student Evaluation</h2>
      <form onSubmit={handleSubmit} className="evaluation-form">
        <div className="form-group">
          <label>Student Name:</label>
          <input
            type="text"
            name="studentName"
            value={evaluationData.studentName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Section:</label>
          <input
            type="text"
            name="section"
            value={evaluationData.section}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Subject:</label>
          <select
            name="subject"
            value={evaluationData.subject}
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

        <div className="form-group">
          <label>Exam Type:</label>
          <select
            name="examType"
            value={evaluationData.examType}
            onChange={handleChange}
            required
          >
            <option value="">Select Exam Type</option>
            <option value="Quiz">Quiz</option>
            <option value="Midterm">Midterm</option>
            <option value="Final">Final</option>
          </select>
        </div>

        <div className="form-group">
          <label>Marks Obtained (out of 100):</label>
          <input
            type="number"
            name="marksObtained"
            value={evaluationData.marksObtained}
            onChange={handleChange}
            required
            min="0"
            max="100"
          />
        </div>

        <button type="submit" className="submit-btn">Submit Evaluation</button>
      </form>
    </div>
  );
};

export default Evaluation;
