import React from 'react';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Footer from './components/layout/Footer';

/**
 * Main App Component
 * 
 * This is the root component of the portfolio application that:
 * - Manages the overall layout and structure
 * - Renders all main sections (Home, About, Skills, Projects, Contact)
 * - Provides smooth scrolling navigation between sections
 * 
 * @component
 * @returns {JSX.Element} The complete portfolio application
 */
function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header with navigation */}
      <Header />
      
      {/* Main content sections */}
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer with additional links and information */}
      <Footer />
    </div>
  );
}

export default App;