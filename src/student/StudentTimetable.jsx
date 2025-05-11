import React, { useEffect, useState } from 'react';
import './style.css';
import './student.css';

export default function StudentTimeTable() {
  const [subjects, setSubjects] = useState([]);
  const [semester, setSemester] = useState('Odd'); 

  useEffect(() => {
    const oddSemesterSubjects = [
      'Full Stack Application Development',
      'Network Protocols And Security',
      'Advanced Objective Oriented Language',
      'Java',
      'Computer Language',
      'Python',
      'Data Base Management Systems',
      'Operating Systems',
    ];

    const evenSemesterSubjects = [
      'Artificial Intelligence',
      'Machine Learning',
      'Data Structures',
      'Algorithms',
      'Discrete Mathematics',
      'Computer Networks',
      'Operating System Concepts',
      'Computer Graphics',
    ];
    const selectedSubjects = semester === 'Odd' ? oddSemesterSubjects : evenSemesterSubjects;
    setSubjects(selectedSubjects);
  }, [semester]); 

  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']; // Saturday off
  const timeSlots = ['9:20 - 11:00', '11:10 - 12:50', '2:00 - 3:30', '3:40 - 5:30'];

  const getRandomRoom = () => {
    const blocks = ['C', 'M', 'E', 'L', 'R'];
    const block = blocks[Math.floor(Math.random() * blocks.length)];
    const roomNumber = Math.floor(Math.random() * 25) + 101;
    return `${block}-${roomNumber}`;
  };

  const generateTimeTable = () => {
    return weekDays.map((day) => {
      const shuffledSubjects = [...subjects].sort(() => 0.5 - Math.random()).slice(0, timeSlots.length);
      const slots = shuffledSubjects.map((subject) => ({
        subject,
        room: getRandomRoom(),
      }));
      return {
        day,
        slots,
      };
    });
  };

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
  };

  const timetable = generateTimeTable();

  return (
    <div className="timetable-container">
      <h2
        style={{
          textAlign: 'center',
          fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', sans-serif",
          color: 'white',
          marginBottom: '30px',
        }}
      >
        Weekly Time Table - {semester} Semester
      </h2>

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

      <table className="timetable-table">
        <thead>
          <tr>
            <th>Day / Time</th>
            {timeSlots.map((slot, index) => (
              <th key={index}>{slot}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timetable.map((row, idx) => (
            <tr key={idx}>
              <td>{row.day}</td>
              {row.slots.map((slot, i) => (
                <td key={i}>
                  <strong>{slot.subject}</strong><br />
                  <span style={{ fontSize: '12px', color: '#ccc' }}>{slot.room}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
