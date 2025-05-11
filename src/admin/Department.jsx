import React, { useState } from 'react';

export default function Department() {
  const [faculty, setFaculty] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Faculty:", faculty);
    console.log("Department:", department);
  };

  return (
    <div className="form-container">
      <h2>Add New Department</h2>
      <form onSubmit={handleSubmit}>
        <label>Faculty</label>
        <select value={faculty} onChange={(e) => setFaculty(e.target.value)} required>
          <option value="">--Select Faculty--</option>
          <option value="Science">Science</option>
          <option value="Engineering">Engineering</option>
          <option value="Arts">Arts</option>
        </select>

        <label>Department</label>
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          placeholder="Department"
          required
        />

        <button type="submit">Add Department</button>
      </form>
    </div>
  );
}
