import { useState, useEffect } from 'react';
import './faculty.css'; 

export default function AddResult() {
  const [studentId, setStudentId] = useState("");
  const [studentName, setStudentName] = useState("");
  const [courseId, setCourseId] = useState("");
  const [marks, setMarks] = useState("");
  const [semester, setSemester] = useState("Spring");
  const [examType, setExamType] = useState("Midterm");

  const studentsList = [
    { id: 1, name: "Student1" },
    { id: 2, name: "Student2" },
    { id: 3, name: "Student3" },
  ];

  const coursesList = [
    { id: 101, name: "course1" },
    { id: 102, name: "Course2" },
    { id: 103, name: "course3" },
  ];

  const semesters = ["odd", "even"];
  const examTypes = ["Midterm1", "Midterm2","Endsem","Supply"];

  useEffect(() => {
    const selectedStudent = studentsList.find(student => student.id === parseInt(studentId));
    if (selectedStudent) {
      setStudentName(selectedStudent.name);
    }
  }, [studentId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!studentId || !courseId || !marks || !semester || !examType) {
      alert("Please fill in all required fields.");
      return;
    }

    alert(`Result added successfully for ${studentName} in ${coursesList.find(c => c.id === parseInt(courseId))?.name} for ${semester} semester!`);

    setStudentId("");
    setStudentName("");
    setCourseId("");
    setMarks("");
    setSemester("Spring");
    setExamType("Midterm");
  };

  return (
    <div className="faculty-box">
      <h2 style={{ textAlign: 'center', fontFamily: 'Montserrat, sans-serif', color: 'black', marginBottom: '30px', textShadow: '0 0 2px white, 0 0 4px rgba(255,255,255,0.5)' }}>
        Add Student Result
      </h2>
      <form className="form-fields" onSubmit={handleSubmit}>

        <div className="form-row">
          <label className='label'>Student ID</label>
          <select value={studentId} onChange={(e) => setStudentId(e.target.value)} required>
            <option value="">Select Student</option>
            {studentsList.map((student) => (
              <option key={student.id} value={student.id}>
                {student.id} - {student.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <label className='label'>Student Name</label>
          <input type="text" value={studentName} disabled />
        </div>

        <div className="form-row">
          <label className='label'>Course</label>
          <select value={courseId} onChange={(e) => setCourseId(e.target.value)} required>
            <option value="">Select Course</option>
            {coursesList.map((course) => (
              <option key={course.id} value={course.id}>
                {course.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <label className='label'>Marks</label>
          <input
            type="number"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            required
            placeholder="Enter Marks"
          />
        </div>

        <div className="form-row">
          <label className='label'>Semester</label>
          <select value={semester} onChange={(e) => setSemester(e.target.value)} required>
            {semesters.map((sem) => (
              <option key={sem} value={sem}>{sem}</option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <label className='label'>Exam Type</label>
          <select value={examType} onChange={(e) => setExamType(e.target.value)} required>
            {examTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="faculty-button">Submit Result</button>
      </form>
    </div>
  );
}
