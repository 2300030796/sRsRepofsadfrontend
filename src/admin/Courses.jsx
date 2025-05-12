import React, { useState } from 'react';
import axios from 'axios';
import './faculty.css'; 

export default function AddCourse() {
  const [courseData, setCourseData] = useState({
    name: "",
    username: "",
    password: "",
    gender: "",
    contactno: "",
    branch: "",
    dept: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addCourse = (e) => {
    e.preventDefault();

    const { name, username, password, gender, contactno, branch, dept } = courseData;

    if (!name || !username || !password || !gender || !contactno || !branch || !dept) {
      alert("Please fill all the fields!");
      return;
    }

    axios.post("http://localhost:2005/course/add", courseData)
      .then(res => {
        alert("Course added successfully: " + res.data);
        setCourseData({
          name: "",
          username: "",
          password: "",
          gender: "",
          contactno: "",
          branch: "",
          dept: ""
        });
      })
      .catch(err => {
        console.error("Error:", err);
        alert("Failed to add course");
      });
  };

  return (
    <div className="faculty-box">
      <h2 style={{ textAlign: 'center', fontFamily: 'Montserrat', marginBottom: '30px' }}>Add Course</h2>
      <form className="form-fields" onSubmit={addCourse}>

        <div className="form-row">
          <label>Name</label>
          <input type="text" name="name" value={courseData.name} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Username</label>
          <input type="text" name="username" value={courseData.username} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Password</label>
          <input type="password" name="password" value={courseData.password} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Gender</label>
          <select name="gender" value={courseData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="N/A">N/A</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-row">
          <label>Contact No</label>
          <input type="text" name="contactno" value={courseData.contactno} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Branch</label>
          <input type="text" name="branch" value={courseData.branch} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Department</label>
          <input type="text" name="dept" value={courseData.dept} onChange={handleChange} />
        </div>

        <button type="submit" className='faculty-button'>Add Course</button>
      </form>
    </div>
  );
}
