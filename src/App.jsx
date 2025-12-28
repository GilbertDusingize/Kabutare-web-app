
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from "./components/Header.jsx";
import TradeCard from './components/TradeCard.jsx';
import trades from "./components/Trades.js";
import Note from "./components/Note.jsx";
import Footer from "./components/Footer.jsx";
import notes from "./components/notes.js";
import Hero from './components/Hero.jsx';
import Labs from './components/Labs.jsx';
import workshops from "./components/Workshops.js";
import Stakeholders from './components/Stakeholders.jsx';
import parteners from './components/Partener.js';
import Contacts from './pages/Contacts.jsx'; 
import About from './pages/About.jsx';
import Academics from './pages/Academics.jsx';
import Announcements from './pages/Announcements.jsx';
import Online from './pages/Online.jsx';  
function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />

        <Routes>
          {/* HOME PAGE ROUTE */}
          <Route path="/" element={
            <main>
              <section id="hero"><Hero /></section>

              <section id="trades-list">
                <h2 className="section-title">Explore Our Trades</h2>
                <dl className="dictionary">
                  {trades.map((trade) => (
                    <TradeCard
                      key={trade.id}
                      emoji={trade.emoji}
                      name={trade.name}
                      title={trade.title}
                      description={trade.description}
                    />
                  ))}
                </dl>
              </section>

              <section id="workshops">
                <h2 className="section-title">Explore our workshops</h2>
                <div className="notes-container">
                  {workshops.map((workshop) => (
                    <Labs key={workshop.id} title={workshop.title} description={workshop.description} />
                  ))}
                </div>
              </section>

              <section id="stakeholders">
                <h2 className="section-title">Our Stakeholders</h2>
                <div className="stakeholders-container">
                  {parteners.map((partener) => (
                    <Stakeholders key={partener.id} title={partener.title} description={partener.description} />
                  ))}
                </div>
              </section>
            </main>
          } />
          {/* Online Applications PAGE ROUTE */}
          <Route path="/online" element={<Online />} />
          {/* ANNOUNCEMENTS PAGE ROUTE */}
          <Route path="/announcements" element={<Announcements />} />
           {/* Academics PAGE ROUTE */}
          <Route path="/academics" element={<Academics />} />
             {/* About PAGE ROUTE */}
          <Route path="/about" element={<About />} />
          {/* CONTACT PAGE ROUTE */}
          <Route path="/contact" element={<Contacts />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
