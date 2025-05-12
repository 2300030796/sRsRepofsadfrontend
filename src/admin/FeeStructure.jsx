import React, { useState, useEffect } from 'react';
import './FeeStructure.css'; 

export default function AdminFeeInfo() {
  const [academicYear, setAcademicYear] = useState('3rd Year');
  const [branch, setBranch] = useState('CSE');
  const [section, setSection] = useState('A');
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const allFeeData = {
      '3rd Year': {
        CSE: {
          A: [
            { id: 1, name: 'Lahari', roll: '2300032726', amount: 1200, status: 'Paid' },
            { id: 2, name: 'Akhila', roll: '2300030108', amount: 1200, status: 'Unpaid' }
          ],
          B: [
            { id: 3, name: 'Manaswini', roll: '2300032143', amount: 1200, status: 'Pending' }
          ],
        },
        ECE: {
          A: [
            { id: 4, name: 'Sneha Reddy', roll: '21ECE101', amount: 1100, status: 'Paid' }
          ],
        },
      },
      '4th Year': {
        CSE: {
          A: [
            { id: 5, name: 'Venkatesh', roll: '2300032726', amount: 1300, status: 'Paid' }
          ],
        }
      }
    };

    const data = allFeeData?.[academicYear]?.[branch]?.[section] || [];
    setStudents(data);
  }, [academicYear, branch, section]);

  return (
    <div className="fee-container">
      <h2 style={{ textAlign: 'center', color: 'white' }}>
        Admin Access - Fee Information
      </h2>

      <div className="search-row">
        <label>Academic Year:&nbsp;
          <select value={academicYear} onChange={(e) => setAcademicYear(e.target.value)}>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
          </select>
        </label>

        <label>Branch:&nbsp;
          <select value={branch} onChange={(e) => setBranch(e.target.value)}>
            <option>CSE</option>
            <option>ECE</option>
            <option>EEE</option>
            <option>ME</option>
          </select>
        </label>

        <label>Section:&nbsp;
          <select value={section} onChange={(e) => setSection(e.target.value)}>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </label>
      </div>

      {students.length === 0 ? (
        <p style={{ color: 'white', textAlign: 'center' }}>
          No fee records found for selected group.
        </p>
      ) : (
        <table className="fee-table">
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} style={{
                backgroundColor:
                  student.status === 'Unpaid' ? '' :
                  student.status === 'Pending' ? '' : 'transparent'
              }}>
                <td>{student.roll}</td>
                <td>{student.name}</td>
                <td>${student.amount}</td>
                <td>{student.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
