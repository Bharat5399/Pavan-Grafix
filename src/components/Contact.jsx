import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Camera } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" style={{
      padding: '6rem 2rem 4rem',
      position: 'relative',
      zIndex: 10,
      background: 'linear-gradient(to top, rgba(5,5,16,1) 0%, rgba(5,5,16,0) 100%)'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel"
          style={{
            padding: '3rem 2rem',
            borderRadius: '30px',
            border: '1px solid var(--neon-pink)',
            boxShadow: '0 0 30px rgba(255, 0, 127, 0.2)'
          }}
        >
          <div style={{
            background: 'var(--neon-pink)',
            color: 'var(--space-black)',
            padding: '0.5rem 1.5rem',
            borderRadius: '20px',
            display: 'inline-block',
            fontWeight: 'bold',
            marginBottom: '2rem',
            fontFamily: 'var(--font-heading)'
          }}>
            * मंथली पॅकेज उपलब्ध *
          </div>

          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            पवन भैया राठोड
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem' }}>
            Ready to bring your vision to life? Let's connect!
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem'
          }}>
            <motion.a 
              href="tel:+919322457088"
              whileHover={{ scale: 1.1, y: -5 }}
              className="glass-panel"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                borderRadius: '50px',
                color: 'var(--neon-cyan)',
                border: '1px solid var(--neon-cyan)'
              }}
            >
              <Phone size={20} />
              <span style={{ fontWeight: 'bold' }}>+91 93224 57088</span>
            </motion.a>

            <motion.a 
              href="https://wa.me/919322457088"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="glass-panel"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                borderRadius: '50px',
                color: '#25D366',
                border: '1px solid #25D366'
              }}
            >
              <MessageCircle size={20} />
              <span style={{ fontWeight: 'bold' }}>WhatsApp</span>
            </motion.a>

            <motion.a 
              href="https://instagram.com/x_pawnya_2663"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="glass-panel"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                borderRadius: '50px',
                color: 'var(--neon-pink)',
                border: '1px solid var(--neon-pink)'
              }}
            >
              <Camera size={20} />
              <span style={{ fontWeight: 'bold' }}>@x_pawnya_2663</span>
            </motion.a>
          </div>
        </motion.div>

        <p style={{ marginTop: '4rem', color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Pavan Graphics. All rights reserved. <br/>
          Built with React & Three.js
        </p>
      </div>
    </section>
  );
};

export default Contact;
