import StudentCard from './StudentCard.jsx';
import { useState } from 'react';

function App() {
    function handleClick() {
      alert('Button clicked!');
    }
    const students = [
      { id: 1, name: 'Ananya', department: 'CSE', semester: 5, section: 'A' },
      { id: 2, name: 'Rahul', department: 'ISE', semester: 5, section: 'B' },
      { id: 3, name: 'Priya', department: 'ECE', semester: 7, section: 'A' },
    ];
    const isEligible = true;
    const [count, setCount] = useState(0);
    let count_ = 0;
  return (
    <div>
      <h1>Student Directory</h1>
      <h1>CSE Students</h1>
      {students.map(student => (
        <StudentCard name = {student.name} department={student.department} semester={student.semester} section = {student.section}/>
      ))}
      <h1>Placement Portal</h1>
      <button onClick={handleClick}>Click Me</button>

      {isEligible ? (
        <p>You are eligible to apply.</p>
      ) : (
        <p>You are not eligible to apply.</p>
      )}

      {isEligible && <button>Apply Now</button>}
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(previous => previous + 1)}>
        Increase
      </button>
      <button onClick={() => setCount(previous => Math.max(0, previous - 1))}>
        Decrease
      </button>
      <button onClick={() => setCount(0)}>Reset</button>

      <p>{count % 2 === 0 ? 'Even' : 'Odd'}</p>
      {count >= 10 && <p>You reached 10!</p>}

      <h2>Count_: {count_}</h2>
      <button onClick={() => count_++}>Increase Count_</button>
      <button onClick={() => count_--}>Decrease Count_</button>
    </div>
  );
}
export default App;