import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Video, 
  Image as ImageIcon, 
  Flag, 
  PenTool, 
  Gift, 
  Brush, 
  CreditCard, 
  FileText,
  Heart
} from 'lucide-react';

const servicesList = [
  { id: 1, slug: 'social-media-design', title: 'सोशल मीडिया डिझाईन', en: 'Social Media Design', icon: <Smartphone size={32} color="#00f0ff" /> },
  { id: 2, slug: 'cinematic-design', title: 'सिनेमॅटिक डिझाईन', en: 'Cinematic Design', icon: <Video size={32} color="#ff007f" /> },
  { id: 3, slug: 'wedding-card-design', title: 'लग्नपत्रिका डिझाईन', en: 'Wedding Card Design', icon: <Heart size={32} color="#00f0ff" /> },
  { id: 4, slug: 'wedding-banner-design', title: 'लग्न बॅनर डिझाईन', en: 'Wedding Banner Design', icon: <ImageIcon size={32} color="#ff007f" /> },
  { id: 5, slug: 'political-design', title: 'पॉलिटिकल डिझाईन', en: 'Political Design', icon: <Flag size={32} color="#00f0ff" />, image: '/political-banner.jpg' },
  { id: 6, slug: 'logo-design', title: 'लोगो डिझाईन', en: 'Logo Design', icon: <PenTool size={32} color="#ff007f" /> },
  { id: 7, slug: 'birthday-design', title: 'बर्थडे डिझाईन', en: 'Birthday Design', icon: <Gift size={32} color="#00f0ff" /> },
  { id: 8, slug: 'oilpaint-design', title: 'ऑइलपेंट डिझाईन', en: 'Oilpaint Design', icon: <Brush size={32} color="#ff007f" /> },
  { id: 9, slug: 'visiting-card', title: 'व्हीझिटिंग कार्ड', en: 'Visiting Card', icon: <CreditCard size={32} color="#00f0ff" /> },
  { id: 10, slug: 'pamphlet-design', title: 'पॅम्प्लेट डिझाईन', en: 'Pamphlet Design', icon: <FileText size={32} color="#ff007f" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Services = () => {
  return (
    <section id="services" style={{
      minHeight: '100vh',
      padding: '6rem 2rem',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="glow-text-cyan" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>
            Our Services
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
            Transforming ideas into digital masterpieces
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}
        >
          {servicesList.map((service) => (
            <Link key={service.id} to={`/service/${service.slug}`} style={{ textDecoration: 'none' }}>
              <motion.div
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 10, 
                  rotateX: -5,
                  boxShadow: '0 15px 35px rgba(0, 240, 255, 0.2)' 
                }}
                className="glass-panel"
                style={{
                  padding: '2rem',
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'border 0.3s ease',
                  height: '100%',
                  ...(service.image ? {
                    backgroundImage: `linear-gradient(rgba(5, 5, 16, 0.85), rgba(5, 5, 16, 0.95)), url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  } : {})
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = '1px solid var(--neon-cyan)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.05)';
                }}
              >
                <div style={{ marginBottom: '1.5rem', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))' }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontFamily: 'var(--font-body)' }}>
                  {service.en}
                </p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
