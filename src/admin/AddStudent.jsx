import React, { useState } from 'react';
import axios from 'axios';
import './Faculty.css'; // Using same CSS as AddFaculty

export default function AddStudent() {
  const [studentData, setStudentData] = useState({
    username: '',
    password: '',
    name: '',
    gender: '',
    contactno: '',
    branch: '',
    dept: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      username, password, name, gender,
      contactno, branch, dept
    } = studentData;

    if (!username || !password || !name || !gender || !contactno || !branch || !dept) {
      alert('Please fill all fields');
      return;
    }

    axios.post('http://localhost:2005/student/add', studentData)
      .then((response) => {
        alert(response.data);
        setStudentData({
          username: '',
          password: '',
          name: '',
          gender: '',
          contactno: '',
          branch: '',
          dept: ''
        });
      })
      .catch((error) => {
        console.error('Error adding student:', error);
        alert('Failed to add student');
      });
  };

  return (
    <div className='faculty-box'>
      <h2 style={{ textAlign: 'center', fontFamily: 'Montserrat, sans-serif', color: 'black', marginBottom: '30px', textShadow: '0 0 2px white, 0 0 4px rgba(255,255,255,0.5)' }}>
        Add New Student
      </h2>
      <form className="form-fields" onSubmit={handleSubmit}>

        <div className="form-row">
          <label className='label'>Username</label>
          <input type="text" name="username" value={studentData.username} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Password</label>
          <input type="password" name="password" value={studentData.password} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Name</label>
          <input type="text" name="name" value={studentData.name} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Gender</label>
          <select name="gender" value={studentData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-row">
          <label>Contact Number</label>
          <input type="text" name="contactno" value={studentData.contactno} onChange={handleChange} />
        </div>

        <div className="form-row">
  <label>Branch</label>
  <select name="branch" value={studentData.branch} onChange={handleChange}>
    <option value="">Select Branch</option>
    <option value="CSE">CSE</option>
    <option value="ECE">ECE</option>
    <option value="EEE">EEE</option>
    <option value="MECH">MECH</option>
    <option value="CIVIL">CIVIL</option>
    <option value="IT">IT</option>
  </select>
</div>

<div className="form-row">
  <label>Department</label>
  <select name="dept" value={studentData.dept} onChange={handleChange}>
    <option value="">Select Department</option>
    <option value="Computer Science">Computer Science</option>
    <option value="Electronics">Electronics</option>
    <option value="Electrical">Electrical</option>
    <option value="Mechanical">Mechanical</option>
    <option value="Civil">Civil</option>
    <option value="Information Technology">Information Technology</option>
  </select>
</div>


        <button type="submit" className='faculty-button'>Add Student</button>
      </form>
    </div>
  );
}
