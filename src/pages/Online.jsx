import React, { useState } from 'react';
import '../App.css';

const Online = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    trade: '',
    course: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Data structure for the short courses
  const tradeData = {
    "Agriculture": ["Legumes Production", "Mushroom Growing"],
    "Veterinary": ["Forage Production", "Poultry Farming"],
    "Food Processing": ["Bread Making", "Juice Production", "Milk Processing"]
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application Submitted:", formData);
    setSubmitted(true);
    // Here you would normally send data to your database
  };

  return (
    <div className="application-page">
      <div className="form-container">
        <h1>Short Course Application</h1>
        <p>Enhance your skills with our professional TVET short courses.</p>

        {submitted ? (
          <div className="success-message">
            <h2>✅ Application Sent!</h2>
            <p>Thank you, {formData.fullName}. Our registrar will contact you soon via {formData.phone}.</p>
            <button onClick={() => setSubmitted(false)}>Submit Another</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="app-form">
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" name="fullName" required onChange={handleChange} placeholder="Enter your full name" />
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" required onChange={handleChange} placeholder="078... / 079..." />
            </div>

            <div className="input-group">
              <label>Select Trade</label>
              <select name="trade" required onChange={handleChange}>
                <option value="">-- Select a Trade --</option>
                {Object.keys(tradeData).map(trade => (
                  <option key={trade} value={trade}>{trade}</option>
                ))}
              </select>
            </div>

            {formData.trade && (
              <div className="input-group">
                <label>Select Specific Short Course</label>
                <select name="course" required onChange={handleChange}>
                  <option value="">-- Select Course --</option>
                  {tradeData[formData.trade].map(course => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
              </div>
            )}

            <button type="submit" className="submit-btn">Apply Now</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Online;