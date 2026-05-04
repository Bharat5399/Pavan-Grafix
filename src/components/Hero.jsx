import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-section" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '2rem',
      position: 'relative',
      zIndex: 10
    }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="glow-text-cyan" style={{
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 900,
          marginBottom: '1rem',
          lineHeight: 1.1
        }}>
          PAVAN <span style={{ color: 'var(--neon-pink)' }} className="glow-text-pink">GRAPHICS</span>
        </h1>
        
        <p style={{
          fontSize: 'clamp(1.2rem, 3vw, 2rem)',
          color: 'var(--text-secondary)',
          maxWidth: '800px',
          margin: '0 auto 2rem auto',
          fontWeight: 300
        }}>
          Professional 3D & Cinematic Design <br/>
          <span style={{ fontSize: '1rem', marginTop: '0.5rem', display: 'block' }}>
            आकर्षक बॅनर व निमंत्रण पत्रिका तयार करून मिळतील.
          </span>
        </p>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 240, 255, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: 'transparent',
            color: 'var(--text-primary)',
            border: '2px solid var(--neon-cyan)',
            padding: '1rem 2.5rem',
            fontSize: '1.2rem',
            fontFamily: 'var(--font-heading)',
            cursor: 'pointer',
            borderRadius: '50px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            transition: 'all 0.3s ease'
          }}
          onClick={() => {
            document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Explore Services
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--text-secondary)'
        }}
      >
        <div style={{
          width: '30px',
          height: '50px',
          border: '2px solid var(--text-secondary)',
          borderRadius: '15px',
          display: 'flex',
          justifyContent: 'center',
          padding: '5px'
        }}>
          <div style={{
            width: '6px',
            height: '6px',
            background: 'var(--text-secondary)',
            borderRadius: '50%',
          }} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
