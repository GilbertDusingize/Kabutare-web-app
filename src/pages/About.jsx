import React from 'react';
import '../App.css'; // Importing our custom CSS file

const About = () => {
  const departments = [
    { name: "Computer Science", icon: "💻" },
    { name: "Electronics & Telecommunication", icon: "📡" },
    { name: "Masonry", icon: "🧱" },
    { name: "Welding", icon: "🛠️" },
    { name: "Culinary Arts", icon: "🍳" }
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Kabutare TSS</h1>
          <p className="hero-subtitle">"Excellence in Technical Education and Professional Skills."</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="content-wrapper">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              Kabutare Technical Secondary School (TSS) is dedicated to empowering 
              the youth with hands-on technical skills that meet the demands of 
              the modern labor market.
            </p>
            <p>
              Located in Huye, Southern Province, we focus on innovation, 
              discipline, and hard work to produce the next generation of 
              technicians and innovators in Rwanda.
            </p>
          </div>
          <div className="quick-facts">
            <h3>Quick Facts</h3>
            <ul>
              <li><strong>📍 Location:</strong> Huye, Rwanda</li>
              <li><strong>🎓 Accreditation:</strong> NESA / TVET Certified</li>
              <li><strong>🤝 Focus:</strong> Job Creation & Skill Mastery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="departments-section">
        <h2>Our Departments</h2>
        <div className="dept-grid">
          {departments.map((dept, index) => (
            <div key={index} className="dept-card">
              <span className="dept-icon">{dept.icon}</span>
              <h3>{dept.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;