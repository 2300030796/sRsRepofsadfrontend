import React, { useState, useEffect } from 'react';
import './student.css'; 

export default function StudentFeePayment() {
  const [feeData, setFeeData] = useState([]);

  useEffect(() => {
    // Simulate API or DB call
    const studentFeeDetails = [
      {
        id: 1,
        academicYear: '2021-22',
        semester: 'Odd Sem',
        semFee: 120000,
        feePaid: 100000,
        concession: 10000,
        feeDue: 10000,
      },
      {
        id: 2,
        academicYear: '2021-22',
        semester: 'Even Sem',
        semFee: 130000,
        feePaid: 130000,
        concession: 0,
        feeDue: 0,
      },
      {
        id: 3,
        academicYear: '2022-23',
        semester: 'Odd Sem',
        semFee: 125000,
        feePaid: 120000,
        concession: 5000,
        feeDue: 5000,
      },
      {
        id: 4,
        academicYear: '2022-23',
        semester: 'Even Sem',
        semFee: 140000,
        feePaid: 140000,
        concession: 0,
        feeDue: 0,
      },
      {
        id: 5,
        academicYear: '2024-25',
        semester: 'Odd Sem',
        semFee: 110000,
        feePaid: 95000,
        concession: 5000,
        feeDue: 10000,
      },
      {
        id: 6,
        academicYear: '2024-25',
        semester: 'Even Sem',
        semFee: 150000,
        feePaid: 150000,
        concession: 0,
        feeDue: 0,
      },
      {
        id: 7,
        academicYear: '2025-26',
        semester: 'Odd Sem',
        semFee: 115000,
        feePaid: 100000,
        concession: 10000,
        feeDue: 5000,
      },
      {
        id: 8,
        academicYear: '2025-26',
        semester: 'Even Sem',
        semFee: 135000,
        feePaid: 135000,
        concession: 0,
        feeDue: 0,
      },
    ];
    setFeeData(studentFeeDetails);
  }, []);

  return (
    <div className="fee-container">
      <h2 style={{ textAlign: 'center', color: 'white' }}>
        Student Fee Payment Details
      </h2>

      {feeData.length === 0 ? (
        <p style={{ color: 'white', textAlign: 'center' }}>No fee records found.</p>
      ) : (
        <table className="fee-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Academic Year</th>
              <th>Semester</th>
              <th>Semester Fee</th>
              <th>Fee Paid</th>
              <th>Concession</th>
              <th>Fee Due</th>
            </tr>
          </thead>
          <tbody>
            {feeData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.academicYear}</td>
                <td>{item.semester}</td>
                <td>₹{item.semFee}</td>
                <td>₹{item.feePaid}</td>
                <td>₹{item.concession}</td>
                <td style={{ color: item.feeDue > 0 ? 'red' : 'green' }}>
                  ₹{item.feeDue}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
