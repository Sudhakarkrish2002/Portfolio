import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Footer from './components/layout/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => { 
    setIsLoaded(true); 
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;