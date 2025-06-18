import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ImpactDesk from './pages/ImpactDesk';
import EWasteProtection from './pages/EWasteProtection';
import StartTechHub from './pages/StartTechHub';
import Insights from './pages/Insights';
import Donate from './pages/Donate';
import OurStory from './pages/OurStory';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/impact-desk" element={<ImpactDesk />} />
              <Route path="/e-waste-protection" element={<EWasteProtection />} />
              <Route path="/start-tech-hub" element={<StartTechHub />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/our-story" element={<OurStory />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;