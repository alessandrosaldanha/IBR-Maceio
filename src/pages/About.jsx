import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
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

  const cincoSolas = [
    {
      latin: 'Sola Fide',
      title: 'Fé Somente',
      description: 'A justificação é pela fé somente, sem as obras da lei.'
    },
    {
      latin: 'Sola Scriptura',
      title: 'Escritura Somente',
      description: 'A Bíblia é a única regra de fé e prática.'
    },
    {
      latin: 'Solus Christus',
      title: 'Cristo Somente',
      description: 'A salvação é somente através de Jesus Cristo.'
    },
    {
      latin: 'Sola Gratia',
      title: 'Graça Somente',
      description: 'A salvação é pela graça de Deus, não por nossos méritos.'
    },
    {
      latin: 'Soli Deo Gloria',
      title: 'Para a Glória de Deus Somente',
      description: 'A finalidade última de todas as coisas é a glória de Deus.'
    }
  ];

  return (
    <motion.div
      className="about"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero */}
      <section className="about-hero">
        <motion.h1 variants={itemVariants}>Sobre Nós</motion.h1>
        <motion.p variants={itemVariants}>
          Conhecendo a Igreja Batista Reformada
        </motion.p>
      </section>

      {/* Historia */}
      <section className="history-section">
        <motion.div className="section-content" variants={itemVariants}>
          <h2 className="section-title">Nossa História</h2>
          <div className="history-content">
            <p>
              A Igreja Batista Reformada nasceu do movimento reformado que teve início
              no século XVI com figuras como Martinho Lutero, João Calvino e Ulrich Zwingli.
              Os batistas reformados preservam as doutrinas da Reforma Protestante,
              combinando-as com a prática do batismo por imersão de crentes professos.
            </p>
            <p>
              Nossa igreja é parte da tradição batista reformada que valoriza a soberania
              de Deus, a autoridade das Escrituras e a glória de Deus em todas as coisas.
              Cremos que a teologia reformada é simplesmente o ensino bíblico aplicado
              de forma sistemática e consistente.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Cinco Solas */}
      <section className="solas-section">
        <motion.div className="section-content" variants={itemVariants}>
          <h2 className="section-title">As Cinco Solas</h2>
          <p className="solas-intro">
            As cinco solas são cinco frases latinas que resumem os pilares da Reforma Protestante
            e continuam sendo fundamentais para nossa fé e prática.
          </p>
          <div className="solas-grid">
            {cincoSolas.map((sola, index) => (
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
          <h2 className="section-title">Confessionalidade</h2>
          <div className="confession-content">
            <div className="confession-icon">📜</div>
            <div className="confession-text">
              <h3>Confissão de Fé de Londres de 1689</h3>
              <p>
                A Igreja Batista Reformada subscreve e se identifica com a Confissão de Fé
                de Londres de 1689, um documento histórico que articula a teologia reformada
                em linguagem clara e bíblica.
              </p>
              <p>
                Esta confissão aborda doutrinas fundamentais como a Trindade, a soberania
                de Deus na salvação, a depravação total do homem, a expiação limitada,
                a graça irresistível, a perseverança dos santos e a ordenança do batismo
                e ceia do Senhor.
              </p>
              <blockquote className="confession-quote">
                "Aglória seja dada a Deus. Todas as coisas são dele, e por ele, e para ele."
              </blockquote>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Crencas */}
      <section className="beliefs-section">
        <motion.div className="section-content" variants={itemVariants}>
          <h2 className="section-title">Nossas Crenças</h2>
          <div className="beliefs-grid">
            <motion.div className="belief-item" variants={itemVariants}>
              <span className="belief-icon">✝️</span>
              <h3>A Trindade</h3>
              <p>Um só Deus em três pessoas: Pai, Filho e Espírito Santo</p>
            </motion.div>
            <motion.div className="belief-item" variants={itemVariants}>
              <span className="belief-icon">📖</span>
              <h3>A Bíblia</h3>
              <p>A Palavra de Deus, inspirada, infalível e suficiente</p>
            </motion.div>
            <motion.div className="belief-item" variants={itemVariants}>
              <span className="belief-icon">👼</span>
              <h3>A Salvação</h3>
              <p>Pela graça, pela fé, em Cristo sozinho</p>
            </motion.div>
            <motion.div className="belief-item" variants={itemVariants}>
              <span className="belief-icon">✝️</span>
              <h3>O Batismo</h3>
              <p>Por imersão, após profissão de fé</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About;
