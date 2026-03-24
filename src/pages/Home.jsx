import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../constants/content';
import './Home.css';

const Home = ({ onPrayerClick }) => {
  const { hero, times, welcome } = content.home;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div
      className="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <motion.div className="hero-content" variants={itemVariants}>
          <span className="hero-motto">{hero.motto}</span>
          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-verse">{hero.verse}</p>
          <p className="hero-reference">{hero.reference}</p>
          <div className="hero-buttons">
            <button className="hero-btn primary">
              {hero.primaryButton}
            </button>
            <button className="hero-btn secondary" onClick={onPrayerClick}>
              {hero.secondaryButton}
            </button>
          </div>
        </motion.div>
        <div className="hero-scroll">
          <span>{hero.scrollText}</span>
          <motion.div
            className="scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </div>
      </section>

      {/* Culto Times */}
      <section className="times-section">
        <motion.div className="section-content" variants={itemVariants}>
          <h2 className="section-title">{times.title}</h2>
          <div className="times-grid">
            {times.cards.map((card, index) => (
              <motion.div 
                key={index} 
                className={`time-card ${card.featured ? 'featured' : ''}`} 
                variants={itemVariants} 
                whileHover={{ scale: 1.05 }}
              >
                <span className="time-icon">{card.icon}</span>
                <h3>{card.title}</h3>
                <p className="time-day">{card.day}</p>
                <p className="time-hour">{card.hour}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <motion.div className="section-content" variants={itemVariants}>
          <h2 className="section-title">{welcome.title}</h2>
          <div className="welcome-content">
            <div className="welcome-text">
              {welcome.paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
              <div className="welcome-cta">
                <a href="/sobre" className="learn-more">{welcome.link}</a>
              </div>
            </div>
            <motion.div
              className="welcome-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="image-placeholder">
                <span>📷</span>
                <p>Nossa Igreja</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
