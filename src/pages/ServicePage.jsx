import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const serviceData = {
  'social-media-design': { title: 'सोशल मीडिया डिझाईन', en: 'Social Media Design' },
  'cinematic-design': { title: 'सिनेमॅटिक डिझाईन', en: 'Cinematic Design' },
  'wedding-card-design': { title: 'लग्नपत्रिका डिझाईन', en: 'Wedding Card Design' },
  'wedding-banner-design': { title: 'लग्न बॅनर डिझाईन', en: 'Wedding Banner Design' },
  'political-design': { title: 'पॉलिटिकल डिझाईन', en: 'Political Design' },
  'logo-design': { title: 'लोगो डिझाईन', en: 'Logo Design' },
  'birthday-design': { title: 'बर्थडे डिझाईन', en: 'Birthday Design' },
  'oilpaint-design': { title: 'ऑइलपेंट डिझाईन', en: 'Oilpaint Design' },
  'visiting-card': { title: 'व्हीझिटिंग कार्ड', en: 'Visiting Card' },
  'pamphlet-design': { title: 'पॅम्प्लेट डिझाईन', en: 'Pamphlet Design' }
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ color: 'white' }}>Service not found</h2>
      </div>
    );
  }

  // Generate some placeholder images for the gallery, except for Political Design which uses a specific image
  const galleryImages = serviceId === 'political-design'
    ? ['/political-banner.jpg']
    : Array.from({ length: 6 }).map((_, i) => 
        `https://picsum.photos/seed/${serviceId}-${i}/800/${i % 2 === 0 ? 1000 : 800}`
      );

  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '6rem 2rem', 
      position: 'relative', 
      zIndex: 10,
      background: 'linear-gradient(to bottom, rgba(5,5,16,0.8) 0%, rgba(5,5,16,0.4) 100%)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ marginBottom: '3rem' }}
        >
          <Link to="/" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            color: 'var(--neon-cyan)',
            textDecoration: 'none',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            background: 'rgba(0, 240, 255, 0.1)',
            padding: '0.5rem 1.5rem',
            borderRadius: '50px',
            border: '1px solid rgba(0, 240, 255, 0.3)'
          }}>
            <ArrowLeft size={20} /> Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h1 className="glow-text-pink" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '0.5rem' }}>
            {service.title}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>
            {service.en} Portfolio
          </p>
        </motion.div>

        {/* Masonry Image Gallery */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={
            serviceId === 'political-design'
              ? { display: 'flex', justifyContent: 'center', width: '100%' }
              : { columns: '1 300px', gap: '2rem', width: '100%' }
          }
        >
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              style={{
                marginBottom: serviceId === 'political-design' ? '0' : '2rem',
                breakInside: 'avoid',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(0,0,0,0.8)',
                border: '1px solid rgba(255,255,255,0.1)',
                width: serviceId === 'political-design' ? '100%' : 'auto',
                maxWidth: serviceId === 'political-design' ? '1000px' : 'none'
              }}
            >
              <img 
                src={src} 
                alt={`${service.en} example ${index + 1}`} 
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default ServicePage;
