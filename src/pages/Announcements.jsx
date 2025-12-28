import React from 'react';
import '../App.css';

const Announcements = () => {
  // Mock data - in a real app, this might come from a database or JS file
  const news = [
    {
      id: 1,
      date: "Oct 15, 2025",
      title: "New Intake Applications Open",
      category: "Admission",
      content: "We are now accepting applications for the 2026 academic year. Interested students should visit the campus with their previous academic transcripts."
    },
    {
      id: 2,
      date: "Oct 10, 2025",
      title: "End of Term 3 Exams",
      category: "Exams",
      content: "Final examinations for Level 3 and Level 4 will begin on November 3rd. Please ensure all library books are returned before this date."
    },
    {
      id: 3,
      date: "Sept 28, 2025",
      title: "Sports Week 2025",
      category: "Events",
      content: "Kabutare TSS will host the inter-school football competition this Friday. Come support our team, the Kabutare Warriors!"
    }
  ];

  return (
    <div className="announcement-page">
      <section className="announcement-header">
        <h1>School Announcements</h1>
        <p>Stay updated with the latest news and notices from Kabutare TSS.</p>
      </section>

      <div className="announcement-container">
        <aside className="announcement-sidebar">
          <h3>Filter by Category</h3>
          <ul>
            <li>All Notices</li>
            <li>Admissions</li>
            <li>Academic Calendar</li>
            <li>Exam Timetables</li>
            <li>General News</li>
          </ul>
        </aside>

        <main className="announcement-list">
          {news.map((item) => (
            <div key={item.id} className="news-card">
              <div className="news-meta">
                <span className="news-category">{item.category}</span>
                <span className="news-date">{item.date}</span>
              </div>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              <button className="read-more">Read Full Notice →</button>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Announcements;