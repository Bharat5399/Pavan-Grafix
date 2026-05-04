import React from 'react';
import Background3D from './components/Background3D';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Background3D />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
    </>
  );
}

export default App;
