import { useState, useEffect } from 'react';

export default function StudentHome() {
  const [student, setStudent] = useState("");

  useEffect(() => {
    const storedStudent = sessionStorage.getItem('student');
    if (storedStudent) {
      setStudent(JSON.parse(storedStudent));
    }
  }, []);
  
  return (
    <div>
      <h3 style={{ fontSize: '3rem' }}>Welcome {student.name}</h3>
    </div>
  );
}
