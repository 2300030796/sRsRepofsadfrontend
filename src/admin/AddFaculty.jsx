import { useState } from 'react';
import './faculty.css';
import axios from 'axios'; 

export default function AddFaculty() {

  const [facultyData, setFacultyData] = useState({
    facultyName: "",
    username: "",
    coursesAssigned: "",
    department: "",
    gender: "",
    contact: "",
    dob: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "department") {
      setFacultyData((prevData) => ({
        ...prevData,
        department: value,
        coursesAssigned: ""
      }));
    } else {
      setFacultyData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const coursesByBranch = {
    CSE: ["Data Structures", "Operating Systems", "Computer Networks", "Software Engineering", "Web Technologies"],
    ECE: ["Digital Electronics", "VLSI Design", "Analog Circuits", "Communication Systems", "Control Systems"],
    AIDS: ["Machine Learning", "Deep Learning", "NLP", "Big Data Analytics", "Data Visualization"],
    IOT: ["Embedded Systems", "IOT Architecture", "Wireless Sensor Networks", "Cloud Computing", "Smart Devices Programming"]
  };

  const addFaculty = (e) => {
    e.preventDefault();

    const { facultyName, username, coursesAssigned, department, gender, contact, dob, password } = facultyData;

    if (
      !facultyName ||
      !username ||
      !coursesAssigned ||
      !department ||
      !gender ||
      !contact ||
      !dob ||
      !password
    ) {
      alert("Please fill all the fields!");
      return;
    }
    const faculty = {
      username,
      password,
      name: facultyName,
      gender,
      dob,
      contactno: contact,
      branch: department,
      dept: department,
      assigncourse: coursesAssigned
    };
    axios.post('http://localhost:2005/addfaculty', faculty)
      .then((response) => {
        alert(`Faculty added successfully: ${response.data}`);
        setFacultyData({
          facultyName: "",
          username: "",
          coursesAssigned: "",
          department: "",
          gender: "",
          contact: "",
          dob: "",
          password: ""
        });
      })
      .catch((error) => {
        console.error("There was an error adding the faculty:", error);
        alert("There was an error adding the faculty.");
      });
  };

  return (
    <div className='faculty-box'>
      <h2 style={{ textAlign: 'center', fontFamily: 'Montserrat, sans-serif', color: 'black', marginBottom: '30px', textShadow: '0 0 2px white, 0 0 4px rgba(255,255,255,0.5)' }}>
        Add New Faculty
      </h2>
      <form className="form-fields" onSubmit={addFaculty}>

        <div className="form-row">
          <label className='label'>Faculty Name</label>
          <input type="text" name="facultyName" value={facultyData.facultyName} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Username</label>
          <input type="text" name="username" value={facultyData.username} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Department</label>
          <select name="department" value={facultyData.department} onChange={handleChange}>
            <option value="">Select Department</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="AIDS">AIDS</option>
            <option value="IOT">IOT</option>
          </select>
        </div>

        <div className="form-row">
          <label>Course Assigned</label>
          <select
            name="coursesAssigned"
            value={facultyData.coursesAssigned}
            onChange={handleChange}
            disabled={!facultyData.department}
          >
            <option value="">Select Course</option>
            {facultyData.department &&
              coursesByBranch[facultyData.department].map((course, index) => (
                <option key={index} value={course}>{course}</option>
              ))}
          </select>
        </div>

        <div className="form-row">
          <label>Gender</label>
          <select name="gender" value={facultyData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-row">
          <label>Contact</label>
          <input type="text" name="contact" value={facultyData.contact} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Date of Birth</label>
          <input type="date" name="dob" value={facultyData.dob} onChange={handleChange} />
        </div>

        <div className="form-row">
          <label>Password</label>
          <input type="password" name="password" value={facultyData.password} onChange={handleChange} />
        </div>

        <button type="submit" className='faculty-button'>Add Faculty</button>
      </form>
    </div>
  );
}
