import React, { useState, useEffect } from 'react';
import './style.css';
import './student.css';

export default function Attendance() {
  const [attendanceData, setAttendanceData] = useState([]);
  const [semester, setSemester] = useState('Odd'); // Default to Odd semester

  useEffect(() => {
    const oddSemesterData = [
      {
        sno: 1,
        academicYear: '2024-2025',
        semester: 'Odd Sem',
        subject: 'Full Stack Application Development',
        percentage: '92%',
      },
      {
        sno: 2,
        academicYear: '2024-2025',
        semester: 'Odd Sem',
        subject: 'Network Protocols And Security',
        percentage: '88%',
      },
      {
        sno: 3,
        academicYear: '2024-2025',
        semester: 'Odd Sem',
        subject: 'Advanced Objective Oriented Language',
        percentage: '95%',
      },
      {
        sno: 4,
        academicYear: '2024-2025',
        semester: 'Odd Sem',
        subject: 'Java',
        percentage: '98%',
      },
      {
        sno: 5,
        academicYear: '2024-2025',
        semester: 'Odd Sem',
        subject: 'Computer Language',
        percentage: '98%',
      },
      {
        sno: 6,
        academicYear: '2024-2025',
        semester: 'Odd Sem',
        subject: 'Python',
        percentage: '98%',
      },
      {
        sno: 7,
        academicYear: '2024-2025',
        semester: 'Odd Sem',
        subject: 'Data Base Management Systems',
        percentage: '98%',
      },
      {
        sno: 8,
        academicYear: '2024-2025',
        semester: 'Odd Sem',
        subject: 'Operating Systems',
        percentage: '98%',
      },
    ];

    const evenSemesterData = [
      {
        sno: 1,
        academicYear: '2024-2025',
        semester: 'Even Sem',
        subject: 'Artificial Intelligence',
        percentage: '85%',
      },
      {
        sno: 2,
        academicYear: '2024-2025',
        semester: 'Even Sem',
        subject: 'Machine Learning',
        percentage: '91%',
      },
      {
        sno: 3,
        academicYear: '2024-2025',
        semester: 'Even Sem',
        subject: 'Data Structures',
        percentage: '89%',
      },
      {
        sno: 4,
        academicYear: '2024-2025',
        semester: 'Even Sem',
        subject: 'Algorithms',
        percentage: '93%',
      },
      {
        sno: 5,
        academicYear: '2024-2025',
        semester: 'Even Sem',
        subject: 'Discrete Mathematics',
        percentage: '78%',
      },
      {
        sno: 6,
        academicYear: '2024-2025',
        semester: 'Even Sem',
        subject: 'Computer Networks',
        percentage: '87%',
      },
      {
        sno: 7,
        academicYear: '2024-2025',
        semester: 'Even Sem',
        subject: 'Operating System Concepts',
        percentage: '92%',
      },
      {
        sno: 8,
        academicYear: '2024-2025',
        semester: 'Even Sem',
        subject: 'Computer Graphics',
        percentage: '84%',
      },
    ];

    
    const data = semester === 'Odd' ? oddSemesterData : evenSemesterData;
    setAttendanceData(data);
  }, [semester]); 
  const getPercentageClass = (percentage) => {
    const value = parseInt(percentage);
    if (value >= 90) return 'present';
    if (value >= 75) return 'late';
    return 'absent';
  };

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
  };

  return (
    <div className="attendance-container">
      <h2>My Attendance</h2>

      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <label htmlFor="semester" style={{ color: 'white', marginRight: '10px' }}>
          Select Semester:
        </label>
        <select
          id="semester"
          value={semester}
          onChange={handleSemesterChange}
          style={{
            padding: '8px',
            backgroundColor: '#2c3e50',
            color: 'white',
            border: '1px solid #ddd',
            borderRadius: '4px',
          }}
        >
          <option value="Odd">Odd</option>
          <option value="Even">Even</option>
        </select>
      </div>

      <table className="attendance-table large-format">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Academic Year</th>
            <th>Semester</th>
            <th>Subject</th>
            <th>Attendance %</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((record, index) => (
            <tr key={index}>
              <td>{record.sno}</td>
              <td>{record.academicYear}</td>
              <td>{record.semester}</td>
              <td>{record.subject}</td>
              <td className={getPercentageClass(record.percentage)}>
                {record.percentage}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
