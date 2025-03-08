import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    async function fetchStudent() {
      try {
        const response = await axios.get(
            "https://tv3xdvjrdxkqaowvbhhb5257ze0vvuek.lambda-url.us-east-1.on.aws/"
        );
        setStudent(response.data);
      } catch (error) {
        console.error("Error fetching student:", error);
      }
    }
    fetchStudent();
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          <h1>Cloud Computing Course</h1>
          {student ? (
              <div>
                <h2>Student Information:</h2>
                <p>
                  {student.name}, {student.age} years old,<br />
                  studying {student.course} at {student.university}
                </p>
              </div>
          ) : (
              <p>Loading student data...</p>
          )}
        </header>
      </div>
  );
}

export default App;