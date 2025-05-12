import { useState } from 'react';
import './newfac.css';

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

  const handleReset = () => {
    setAttendanceData({
      studentName: '',
      section: '',
      subject: '',
      date: '',
      status: 'present',
    });
  };

  return (
    <div className="faculty-box">
      <h2 className="form-title">Mark Attendance</h2>
      <form onSubmit={handleSubmit} className="form-fields">

        <div className="form-row">
          <label htmlFor="studentName">Student Name</label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={attendanceData.studentName}
            onChange={handleChange}
            placeholder="Enter student name"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="section">Section</label>
          <input
            type="text"
            id="section"
            name="section"
            value={attendanceData.section}
            onChange={handleChange}
            placeholder="Enter section"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={attendanceData.subject}
            onChange={handleChange}
            placeholder="Enter subject"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={attendanceData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={attendanceData.status}
            onChange={handleChange}
          >
            <option value="present">Present</option>
            <option value="absent">Absent</option>
            <option value="late">Late</option>
          </select>
        </div>

        <div className="button-group">
          <button type="submit" className="faculty-button">Submit</button>
          <button type="button" className="reset-button" onClick={handleReset}>Reset</button>
        </div>

      </form>
    </div>
  );
};

export default Attendance;
