import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

export default function StudentExamSchedule() {
  const [examList, setExamList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5173/examschedule')
      .then((response) => {
        const data = response.data;
        setExamList(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.error("API error. Using fallback data:", error);

        setExamList([
          {
            exam_name: 'Midterm',
            subject_name: 'Mathematics',
            year_of_study: '2nd year',
            exam_date: '2025-05-15',
            exam_start_time: '10:00',
            exam_end_time: '12:00'
          },
          {
            exam_name: 'Finals',
            subject_name: 'Physics',
            year_of_study: '3rd year',
            exam_date: '2025-06-01',
            exam_start_time: '09:00',
            exam_end_time: '11:00'
          }
        ]);
      });
  }, []);

  return (
    <div className="student-schedule-box">
      <h2
        style={{
          textAlign: 'center',
          fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', sans-serif",
          color: 'white',
          marginBottom: '30px'
        }}
      >
        Upcoming Exams
      </h2>

      {Array.isArray(examList) && examList.length > 0 ? (
        <table className="exam-table">
          <thead>
            <tr>
              <th>Exam Name</th>
              <th>Subject</th>
              <th>Year</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
            </tr>
          </thead>
          <tbody>
            {examList.map((exam, index) => (
              <tr key={index}>
                <td>{exam.exam_name}</td>
                <td>{exam.subject_name}</td>
                <td>{exam.year_of_study}</td>
                <td>{exam.exam_date}</td>
                <td>{exam.exam_start_time}</td>
                <td>{exam.exam_end_time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: 'center', color: 'white' }}>No exams scheduled.</p>
      )}
    </div>
  );
}
