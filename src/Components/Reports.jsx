import { useEffect, useState } from "react";
import axios from "axios";

const FacultyReports = ({ facultyId }) => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/faculty/${facultyId}/reports`); // ✅ use full URL
        setReports(response.data);
      } catch (err) {
        setError("Failed to fetch reports.");
      } finally {
        setLoading(false);
      }
    };

    if (facultyId) {
      fetchReports();
    }
  }, [facultyId]);

  if (loading) return <p>Loading reports...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="report-container">
      <h2 className="report-title">Student Reports</h2>
      <table className="report-table" border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Internal</th>
            <th>External</th>
            <th>Attendance (%)</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {reports.length > 0 ? (
            reports.map((report, index) => (
              <tr key={index}>
                <td>{report.student_id}</td>
                <td>{report.name}</td>
                <td>{report.subject}</td>
                <td>{report.internal_marks}</td>
                <td>{report.external_marks}</td>
                <td>{report.attendance}</td>
                <td>{report.remarks}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No reports found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FacultyReports;
