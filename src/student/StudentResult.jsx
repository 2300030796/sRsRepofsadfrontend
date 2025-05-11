import React, { useState, useEffect } from 'react';
import './style.css';
import './student.css'; 

export default function StudentResult() {
  const [semester, setSemester] = useState('Odd');
  const [resultData, setResultData] = useState([]);

  const oddResults = [
    { sno: 1, academicYear: '2024-2025', semester: 'Odd Sem', subject: 'Java', grade: 'O' },
    { sno: 2, academicYear: '2024-2025', semester: 'Odd Sem', subject: 'Python', grade: 'A+' },
    { sno: 3, academicYear: '2024-2025', semester: 'Odd Sem', subject: 'DBMS', grade: 'A' },
    { sno: 4, academicYear: '2024-2025', semester: 'Odd Sem', subject: 'Operating Systems', grade: 'B' },
    { sno: 5, academicYear: '2024-2025', semester: 'Odd Sem', subject: 'Cloud Computing', grade: 'C' },
    { sno: 6, academicYear: '2024-2025', semester: 'Odd Sem', subject: 'Computer Networks', grade: 'P' },
    { sno: 7, academicYear: '2024-2025', semester: 'Odd Sem', subject: 'OOPS', grade: 'F' },
  ];

  const evenResults = [
    { sno: 1, academicYear: '2024-2025', semester: 'Even Sem', subject: 'AI', grade: 'A+' },
    { sno: 2, academicYear: '2024-2025', semester: 'Even Sem', subject: 'ML', grade: 'O' },
    { sno: 3, academicYear: '2024-2025', semester: 'Even Sem', subject: 'Discrete Math', grade: 'B' },
    { sno: 4, academicYear: '2024-2025', semester: 'Even Sem', subject: 'Data Structures', grade: 'A' },
    { sno: 5, academicYear: '2024-2025', semester: 'Even Sem', subject: 'Computer Graphics', grade: 'P' },
    { sno: 6, academicYear: '2024-2025', semester: 'Even Sem', subject: 'System Design', grade: 'F' },
  ];

  const getGradePoint = (grade) => {
    switch (grade) {
      case 'O': return 10;
      case 'A+': return 9;
      case 'A': return 8;
      case 'B': return 7;
      case 'C': return 6;
      case 'P': return null;
      case 'F': return null;
      default: return '-';
    }
  };

  useEffect(() => {
    setResultData(semester === 'Odd' ? oddResults : evenResults);
  }, [semester]);

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
  };

  return (
    <div className="result-container">
      <h2>My Results</h2>

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

      <table className="result-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Academic Year</th>
            <th>Semester</th>
            <th>Subject</th>
            <th>Grade</th>
            <th>Grade Point</th>
          </tr>
        </thead>
        <tbody>
          {resultData.map((res, index) => (
            <tr key={index}>
              <td>{res.sno}</td>
              <td>{res.academicYear}</td>
              <td>{res.semester}</td>
              <td>{res.subject}</td>
              <td>{res.grade}</td>
              <td>{getGradePoint(res.grade) ?? '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
