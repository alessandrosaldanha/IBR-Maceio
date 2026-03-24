import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../constants/content';
import './About.css';

const About = () => {
  const { hero, history, cincoSolas, confession, beliefs } = content.about;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      className="about"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero */}
      <section className="about-hero">
        <motion.h1 variants={itemVariants}>{hero.title}</motion.h1>
        <motion.p variants={itemVariants}>{hero.subtitle}</motion.p>
      </section>

      {/* Historia */}
      <section className="history-section">
        <motion.div className="section-content" variants={itemVariants}>
          <h2 className="section-title">{history.title}</h2>
          <div className="history-content">
            {history.paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Cinco Solas */}
      <section className="solas-section">
        <motion.div className="section-content" variants={itemVariants}>
          <h2 className="section-title">{cincoSolas.title}</h2>
          <p className="solas-intro">{cincoSolas.intro}</p>
          <div className="solas-grid">
            {cincoSolas.solas.map((sola, index) => (
              <motion.div
                key={sola.latin}
                className="sola-card"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <span className="sola-number">{index + 1}</span>
                <h3 className="sola-latin">{sola.latin}</h3>
                <h4 className="sola-title">{sola.title}</h4>
                <p className="sola-description">{sola.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Confessionalidade */}
      <section className="confession-section">
        <motion.div className="section-content" variants={itemVariants}>
          <h2 className="section-title">{confession.title}</h2>
          <div className="confession-content">
            <div className="confession-icon">{confession.icon}</div>
            <div className="confession-text">
              <h3>{confession.subtitle}</h3>
              {confession.paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
              <blockquote className="confession-quote">{confession.quote}</blockquote>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Crencas */}
      <section className="beliefs-section">
        <motion.div className="section-content" variants={itemVariants}>
          <h2 className="section-title">{beliefs.title}</h2>
          <div className="beliefs-grid">
            {beliefs.items.map((item, index) => (
              <motion.div key={index} className="belief-item" variants={itemVariants}>
                <span className="belief-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About;
