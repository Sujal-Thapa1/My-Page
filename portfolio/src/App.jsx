import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';


import Contact from './sections/Contact';
import Footer from './components/Footer';
import FadeIn from './components/FadeIn';

function App() {
  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
        <Skills />
      </FadeIn>
      <FadeIn>
        <Projects />
      </FadeIn>
      <FadeIn>
        <Education />
      </FadeIn>


      <FadeIn>
        <Contact />
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;