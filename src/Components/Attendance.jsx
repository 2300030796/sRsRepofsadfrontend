import React, { useState } from 'react';


const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState({
    studentName: '',
    section: '',
    subject: '',
    date: '',
    status: 'present',
  });

  const handleChange = (e) => {
    setAttendanceData({
      ...attendanceData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Attendance submitted:', attendanceData);
  };

  return (
    <div className="attendance-container">
      <h2 className="form-title">Mark Attendance</h2>
      <form onSubmit={handleSubmit} className="attendance-form">
        <div className="form-group">
          <label>Student Name:</label>
          <input
            type="text"
            name="studentName"
            value={attendanceData.studentName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Section:</label>
          <input
            type="text"
            name="section"
            value={attendanceData.section}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={attendanceData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={attendanceData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Status:</label>
          <select
            name="status"
            value={attendanceData.status}
            onChange={handleChange}
          >
            <option value="present">Present</option>
            <option value="absent">Absent</option>
            <option value="late">Late</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Submit Attendance</button>
      </form>
    </div>
  );
};

export default Attendance;
