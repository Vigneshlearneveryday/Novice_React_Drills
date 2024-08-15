import React, { useState } from "react";


function StudentRegistrationForm() {
  // Manage the inputs
  const [studentName, setStudentName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [consent, setConsent] = useState("");

  //Handle change
  const handleNameChange = (e) => {
    setStudentName(e.target.value);
    
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value)
  };
  const handleCourseChange = (e) => {
    setCourse(e.target.value)
  };
  const handleConsentChange = (e) => {
    setConsent(e.target.value)
  };

  //Handle submit
const handleSubmit = (e) =>{
    // Prevent browser data
    e.preventDefault()
    console.log({
        studentName,
        age,
        course,
        consent
    });
    
}
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h2>Student Registration Form</h2>
        <div className="form-group">
          <label>Name : </label>
          <input
            type="text"
            value={studentName}
            onChange={handleNameChange}
            className="form-input"
          />
        </div>
        <div>
          <label>Age : </label>
          <input
            type="number"
            value={age}
            onChange={handleAgeChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Course : </label>
          <select
            value={course}
            onChange={handleCourseChange}
            className="form-select"
          >
            <option value="Science">Science</option>
            <option value="Mathematics">Mathematics</option>
            <option value="ComputerScience">Computer Science</option>
            <option value="Biology">Biology</option>
          </select>
        </div>
        <div className="form-group">
          <label>Consent : </label>
          <input
            type="checkbox"
            checked={consent}
            onChange={handleConsentChange}
            className="form-checkbox"
          />
        </div>
        <button type="submit" 
        className="form-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default StudentRegistrationForm;
