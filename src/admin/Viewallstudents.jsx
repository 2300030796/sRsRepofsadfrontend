import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Viewallstudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2005/viewallstudents") // Update the port if needed
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error("Error fetching students:", error);
      });
  }, []);

  return (
    <div>
      <h2>All Students</h2>
      <table border="1" cellPadding="10" cellSpacing="0" style={{marginLeft:"250px"}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Contact No</th>
            <th>Branch</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.username}</td>
                <td>{student.name}</td>
                <td>{student.gender}</td>
                <td>{student.contactno}</td>
                <td>{student.branch}</td>
                <td>{student.dept}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No students found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
