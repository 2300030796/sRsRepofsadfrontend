import React, { useState, useEffect } from 'react';


export default function FacultyStudentInfo() {
  const [academicYear, setAcademicYear] = useState('3rd Year');
  const [branch, setBranch] = useState('CSE');
  const [section, setSection] = useState('A');
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Simulate fetching student data
    const allStudents = {
      '3rd Year': {
        CSE: {
          A: [
            { Id: 1, Name: 'K,Vasantha Lahari', Roll: '2300032726', Email: 'lahari@klu.edu.in' },
            { Id: 2, Name: 'K.Akila', Roll: '2300030108', Email: 'akila@klu.edu.in' }
          ],
          B: [
            { id: 3, name: 'P.Manaswini', roll: '2300032143', email: 'manu@klu.edu.in' },
          ],
        },
        ECE: {
          A: [
            { id: 4, name: 'Sneha Reddy', roll: '21ECE101', email: 'sneha@klu.edu.in' },
          ],
          B: [
            { id: 5, name: 'K.Ram', roll: '2300030143', email: 'ram@klu.edu.in' },
          ],
          
        },
      },
      '4th Year': {
        CSE: {
          A: [
            { id: 6, name: 'K.Venkatesh', roll: '2300032726', email: 'venky@klu.edu.in' },
            { id: 7, name: 'K.Sai', roll: '2300030108', email: 'sai@klu.edu.in' }
          ],
          B: [
            { id: 8, name: 'P.Sai', roll: '2300032143', email: 'sai123@klu.edu.in' },
          ],
        },
      },
    };

    const data =
      allStudents?.[academicYear]?.[branch]?.[section] || [];
    setStudents(data);
  }, [academicYear, branch, section]);

  return (
    <div className="timetable-container">
      <h2 style={{ textAlign: 'center', color: 'white' }}>
        Faculty Access - Student Information
      </h2>

      <div className="filters">
        <label>
          Academic Year:&nbsp;
          <select value={academicYear} onChange={(e) => setAcademicYear(e.target.value)}>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
          </select>
        </label>

        <label>
          Branch:&nbsp;
          <select value={branch} onChange={(e) => setBranch(e.target.value)}>
            <option>CSE</option>
            <option>ECE</option>
            <option>EEE</option>
            <option>ME</option>
          </select>
        </label>

        <label>
          Section:&nbsp;
          <select value={section} onChange={(e) => setSection(e.target.value)}>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </label>
      </div>

      {students.length === 0 ? (
        <p style={{ color: 'white', textAlign: 'center' }}>
          No student data available for selected group.
        </p>
      ) : (
        <table className="timetable-table">
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.roll}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
