function StudentCard({ name, department, semester, section }) {
  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p>Department: {department}</p>
      <p>Semester: {semester}</p>
      <p>Section: {section}</p>
    </div>
  );
}

export default StudentCard;