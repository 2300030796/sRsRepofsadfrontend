import { useState } from 'react';
import axios from 'axios';
import './faculty.css';

export default function ScheduleExams() {
  const [examData, setExamData] = useState({
    exam_name: '',
    subject_name: '',
    year_of_study: '',
    exam_start_time: '',
    exam_end_time: '',
    exam_date: ''
  });

  const handleChange = (e) => {
    setExamData({ ...examData, [e.target.id]: e.target.value });
  };

  const handleReset = () => {
    setExamData({
      exam_name: '',
      subject_name: '',
      year_of_study: '',
      exam_start_time: '',
      exam_end_time: '',
      exam_date: ''
    });
  };

  const scheduleExam = async (data) => {
    try {
      // Mapping keys to backend expected format
      const formattedData = {
        examName: data.exam_name,
        subject: data.subject_name,
        yearOfStudy: data.year_of_study,
        startTime: data.exam_start_time,
        endTime: data.exam_end_time,
        date: data.exam_date
      };

      const response = await axios.post("http://localhost:2005/exam/add", formattedData);
      alert("Exam scheduled successfully!");
      handleReset(); // clear form after success
      return response.data;
    } catch (error) {
      console.error("Error scheduling exam:", error);
      alert("Failed to schedule exam.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    scheduleExam(examData);
  };

  return (
    <div className="faculty-box">
      <h2 style={{ textAlign: 'center', fontFamily: 'Montserrat, sans-serif', color: 'black', marginBottom: '30px', textShadow: '0 0 2px white, 0 0 4px rgba(255,255,255,0.5)' }}>Schedule New Exam</h2>
      <form onSubmit={handleSubmit} className="form-fields">
        <div className='form-row'>
          <label className='label'>Exam Name</label>
          <input type="text" id="exam_name" value={examData.exam_name} onChange={handleChange} required />
        </div>

        <div className='form-row'>
          <label>Subject Name *</label>
          <select id="subject_name" value={examData.subject_name} onChange={handleChange} required>
            <option value="">Please Select</option>
            <option value="subject1">Subject1</option>
            <option value="subject2">Subject2</option>
            <option value="subject3">Subject3</option>
          </select>
        </div>

        <div className='form-row'>
          <label>Year of study *</label>
          <select id="year_of_study" value={examData.year_of_study} onChange={handleChange} required>
            <option value="">Please Select</option>
            <option value="1st year">1st year</option>
            <option value="2nd year">2nd year</option>
            <option value="3rd year">3rd year</option>
            <option value="4th year">4th year</option>
          </select>
        </div>

        <div className='form-row'>
          <label>Select Start Time</label>
          <input type="time" id="exam_start_time" value={examData.exam_start_time} onChange={handleChange} />
        </div>

        <div className='form-row'>
          <label>Select End Time</label>
          <input type="time" id="exam_end_time" value={examData.exam_end_time} onChange={handleChange} />
        </div>

        <div className='form-row'>
          <label>Select Date</label>
          <input type="date" id="exam_date" value={examData.exam_date} onChange={handleChange} />
        </div>

        <div className="button-group">
          <button type="submit" className="faculty-button">Save</button>
          <button type="button" onClick={handleReset} className="reset-button">Reset</button>
        </div>
      </form>
    </div>
  );
}
