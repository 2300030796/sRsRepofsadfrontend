import { useState, useEffect } from 'react';

export default function FacultyProfile() 
{
  const [Faculty, setFaculty] = useState("");
     
  useEffect(() => {
    const storedFaculty = sessionStorage.getItem('Faculty');
    if (storedFaculty) {
      setFaculty(JSON.parse(storedFaculty));
    }
  }, []);

  if (!Faculty) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        Loading profile...
      </div>
    );
    
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ fontSize: '26px', color: '#333', marginBottom: '20px' }}>
        Faculty Profile
      </h2>

      <div
        style={{
          backgroundColor: 'light grey',
          border: '1px solid black',
          borderRadius: '10px',
          padding: '20px',
          width: '350px',
        }}
      >
        <p><strong>Name:</strong> {Faculty.name}</p>
        <p><strong>Gender:</strong> {Faculty.gender}</p>
        <p><strong>Date of Birth:</strong> {Faculty.dob}</p>
        <p><strong>Email:</strong> {Faculty.email}</p>
        <p><strong>EmployeeID:</strong> {Faculty.employeeID}</p>
        <p><strong>Mobile No:</strong> {Faculty.mobileno}</p>
        <p><strong>Department:</strong> {Faculty.department}</p>
      </div>
    </div>
  );
}