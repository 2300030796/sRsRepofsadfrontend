import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css'; // optional for custom styling

export default function ViewFaculty() {
  const [facultyList, setFacultyList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2005/viewallfaculty')
      .then(response => {
        setFacultyList(response.data);
      })
      .catch(error => {
        console.error("Error fetching faculty data:", error);
      });
  }, []);

  return (
    <div className="faculty-container">
      <h2>Faculty List</h2>
      <table className="faculty-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Name</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Contact No</th>
            <th>Branch</th>
            <th>Department</th>
            <th>Assigned Course</th>
          </tr>
        </thead>
        <tbody>
          {facultyList.map((faculty) => (
            <tr key={faculty.id}>
              <td>{faculty.id}</td>
              <td>{faculty.username}</td>
              <td>{faculty.name}</td>
              <td>{faculty.gender}</td>
              <td>{faculty.dob}</td>
              <td>{faculty.contactno}</td>
              <td>{faculty.branch}</td>
              <td>{faculty.dept}</td>
              <td>{faculty.assigncourse}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
