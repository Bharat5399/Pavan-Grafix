import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background3D from './components/Background3D';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import ServicePage from './pages/ServicePage';

const Home = () => (
  <main>
    <Hero />
    <Services />
    <Contact />
  </main>
);

function App() {
  return (
    <Router>
      <Background3D />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:serviceId" element={<ServicePage />} />
      </Routes>
    </Router>
  );
}

export default App;
