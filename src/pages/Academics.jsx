import React from 'react';
import '../App.css';

const Academics = () => {
  const levels = [
    { title: "Level 3", desc: "Foundational technical skills and core theory." },
    { title: "Level 4", desc: "Advanced practical training and specialized modules." },
    { title: "Level 5", desc: "Professional mastery and National Examination preparation." }
  ];

  return (
    <div className="academics-page">
      {/* Hero Header */}
      <header className="academics-hero">
        <h1>Academic Excellence</h1>
        <p>Providing quality TVET education following the Rwanda National Qualification Framework.</p>
      </header>

      <div className="academics-content">
        {/* TVET Levels Section */}
        <section className="academic-section">
          <h2>Our Academic Path</h2>
          <div className="levels-container">
            {levels.map((level, index) => (
              <div key={index} className="level-box">
                <div className="level-number">{level.title}</div>
                <p>{level.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Calendar & Assessment Section */}
        <section className="academic-grid">
          <div className="info-card">
            <h3>📅 Academic Calendar</h3>
            <ul>
              <li><strong>Term 1:</strong> Jan — April</li>
              <li><strong>Term 2:</strong> May — July</li>
              <li><strong>Term 3:</strong> Sept — Nov</li>
              <li><em>Note: Industrial Attachment takes place during holidays for Level 4 & 5.</em></li>
            </ul>
          </div>

          <div className="info-card">
            <h3>📝 Assessment Mode</h3>
            <p>We use Competence-Based Assessment (CBA) which includes:</p>
            <ul>
              <li>Formative Assessments (Daily practicals)</li>
              <li>Integrated Assessments (End of Module)</li>
              <li>National Practical Exams (NESA)</li>
            </ul>
          </div>
        </section>

        {/* Industrial Attachment Section */}
        <section className="attachment-section">
          <div className="attachment-overlay">
            <h2>Industrial Attachment (WBL)</h2>
            <p>
              Every student at Kabutare TSS undergoes "Work-Based Learning." 
              We partner with local industries to ensure our students get real-world 
              experience before graduation.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Academics;