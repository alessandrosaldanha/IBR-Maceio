import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = ({ onPrayerClick }) => {
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
          <span className="hero-motto">Soli Deo Gloria</span>
          <h1 className="hero-title">Igreja Batista Reformada</h1>
          <p className="hero-verse">
            "Porque dele, e por ele, e para ele são todas as coisas; glória, pois, a ele eternamente."
          </p>
          <p className="hero-reference">Romanos 11:36</p>
          <div className="hero-buttons">
            <button className="hero-btn primary">
              ▶️ Assista ao Vivo
            </button>
            <button className="hero-btn secondary" onClick={onPrayerClick}>
              🙏 Pedido de Oração
            </button>
          </div>
        </motion.div>
        <div className="hero-scroll">
          <span> role para baixo</span>
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
          <h2 className="section-title">Horários dos Cultos</h2>
          <div className="times-grid">
            <motion.div className="time-card" variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <span className="time-icon">📖</span>
              <h3>Escola Bíblica Dominical</h3>
              <p className="time-day">Sábado</p>
              <p className="time-hour">18h00</p>
            </motion.div>
            <motion.div className="time-card" variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <span className="time-icon">🕊️</span>
              <h3>Culto de Adoração</h3>
              <p className="time-day">Domingo</p>
              <p className="time-hour">9h00</p>
            </motion.div>
            <motion.div className="time-card featured" variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <span className="time-icon">✨</span>
              <h3>Culto de Celebração</h3>
              <p className="time-day">Domingo</p>
              <p className="time-hour">18h00</p>
            </motion.div>
            <motion.div className="time-card" variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <span className="time-icon">📿</span>
              <h3>Culto de Oração</h3>
              <p className="time-day">Quarta-feira</p>
              <p className="time-hour">19h30</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <motion.div className="section-content" variants={itemVariants}>
          <h2 className="section-title">Seja Bem-Vindo</h2>
          <div className="welcome-content">
            <div className="welcome-text">
              <p>
                Somos uma igreja que glorifica a Deus através da pregação fiel da Sua Palavra,
                da adoração sincera e do amor genuíno ao próximo.
              </p>
              <p>
                Cremos na soberania de Deus em todas as coisas e na autoridade das Escrituras
                como nossa única regra de fé e prática.
              </p>
              <div className="welcome-cta">
                <a href="/sobre" className="learn-more">Conheça nossa história →</a>
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
