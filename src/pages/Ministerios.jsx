import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../constants/content';
import './Ministerios.css';

const Ministerios = () => {
  const { hero, title, ministries, projectsTitle, projects, participate } = content.ministerios;

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
      className="ministerios"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero */}
      <section className="ministerios-hero">
        <motion.h1 variants={itemVariants}>{hero.title}</motion.h1>
        <motion.p variants={itemVariants}>{hero.subtitle}</motion.p>
      </section>

      {/* Ministerios */}
      <section className="ministerios-section">
        <motion.div className="section-content" variants={itemVariants}>
          <h2 className="section-title">{title}</h2>
          <div className="ministerios-grid">
            {ministries.map((ministerio) => (
              <motion.div
                key={ministerio.id}
                className="ministerio-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="card-icon">{ministerio.icon}</div>
                <h3>{ministerio.title}</h3>
                <p className="card-description">{ministerio.description}</p>
                <div className="card-activities">
                  <h4>Atividades:</h4>
                  <ul>
                    {ministerio.activities.map((activity, idx) => (
                      <li key={idx}>{activity}</li>
                    ))}
                  </ul>
                </div>
                <p className="card-schedule">
                  <span className="schedule-icon">🕐</span> {ministerio.schedule}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projetos */}
      <section className="projetos-section">
        <motion.div className="section-content" variants={itemVariants}>
          <h2 className="section-title">{projectsTitle}</h2>
          <div className="projetos-grid">
            {projects.map((projeto, index) => (
              <motion.div
                key={index}
                className="projeto-card"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="projeto-badge">Projeto</div>
                <h3>{projeto.title}</h3>
                <p>{projeto.description}</p>
                <div className="projeto-impact">
                  <span className="impact-icon">📊</span>
                  {projeto.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Participe */}
      <section className="participe-section">
        <motion.div className="section-content" variants={itemVariants}>
          <div className="participe-card">
            <h2>{participate.title}</h2>
            <p>{participate.description}</p>
            <button className="participe-btn">{participate.button}</button>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Ministerios;
