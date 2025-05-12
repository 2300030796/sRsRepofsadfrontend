import { useEffect, useState, useMemo } from 'react';

export default function FacultyTimeTable() {
  const [subjects, setSubjects] = useState([]);
  const [semester, setSemester] = useState('Odd');
  const [session, setSession] = useState('2024-2025');
  const [academicYear, setAcademicYear] = useState('3rd Year');
  const [selectedDate, setSelectedDate] = useState('');

  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = ['9:20 - 11:00', '11:10 - 12:50', '2:00 - 3:30', '3:40 - 5:30'];

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

  const timetable = useMemo(() => generateTimeTable(), [subjects]);

  const getWeekdayFromDate = (dateStr) => {
    if (!dateStr) return null;
    return new Date(dateStr).toLocaleDateString('en-US', { weekday: 'long' });
  };

  const selectedDay = getWeekdayFromDate(selectedDate);

  return (
    <div
      style={{
        backgroundColor: '#1e1e1e',
        color: 'white',
        padding: '20px',
        fontFamily: 'Arial',
        minHeight: '100vh',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Faculty Time Table - {academicYear} ({session}) - {semester} Semester
      </h2>

      <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <label>
          Session:&nbsp;
          <input
            type="text"
            value={session}
            onChange={(e) => setSession(e.target.value)}
            placeholder="2024-2025"
            style={{ padding: '5px' }}
          />
        </label>

        <label>
          Academic Year:&nbsp;
          <select value={academicYear} onChange={(e) => setAcademicYear(e.target.value)} style={{ padding: '5px' }}>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
          </select>
        </label>

        <label>
          Semester:&nbsp;
          <select value={semester} onChange={(e) => setSemester(e.target.value)} style={{ padding: '5px' }}>
            <option value="Odd">Odd</option>
            <option value="Even">Even</option>
          </select>
        </label>

        <label>
          Date:&nbsp;
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            style={{ padding: '5px' }}
          />
        </label>
      </div>

      {timetable.filter((row) => !selectedDay || row.day === selectedDay).length === 0 ? (
        <p style={{ color: 'white', textAlign: 'center' }}>
          No timetable available for the selected date.
        </p>
      ) : (
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            backgroundColor: '#2c2c2c',
          }}
        >
          <thead>
            <tr>
              <th style={{ border: '1px solid #444', padding: '10px' }}>Day / Time</th>
              {timeSlots.map((slot, index) => (
                <th key={index} style={{ border: '1px solid #444', padding: '10px' }}>
                  {slot}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timetable
              .filter((row) => !selectedDay || row.day === selectedDay)
              .map((row, idx) => (
                <tr key={idx}>
                  <td style={{ border: '1px solid #444', padding: '10px' }}>{row.day}</td>
                  {row.slots.map((slot, i) => (
                    <td key={i} style={{ border: '1px solid #444', padding: '10px' }}>
                      <strong>{slot.subject}</strong>
                      <br />
                      <span style={{ fontSize: '12px', color: '#ccc' }}>{slot.room}</span>
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
