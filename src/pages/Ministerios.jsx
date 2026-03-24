import React from 'react';
import { motion } from 'framer-motion';
import './Ministerios.css';

const Ministerios = () => {
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

  const ministerios = [
    {
      id: 1,
      icon: '📚',
      title: 'Escola Bíblica Dominical',
      description: 'Ensino sistemático das Escrituras para todas as idades. Classes para crianças, jovens e adultos, com materiais atualizados e professores dedicados.',
      activities: ['Aulas para crianças', 'Estudo para jovens', 'Discipulado para adultos', 'Grupos de discussão'],
      schedule: 'Sábado - 18h00'
    },
    {
      id: 2,
      icon: '❤️',
      title: 'Ação Social',
      description: 'Expressando o amor de Cristo através de obras práticas na comunidade. Visamos atender necessidades físicas e espirituais dos menos favorecidos.',
      activities: ['Distribuição de alimentos', 'Visitas a asilos', 'Acompanhamento familiar', 'Assistência material'],
      schedule: 'Variável'
    },
    {
      id: 3,
      icon: '🌍',
      title: 'Missões',
      description: 'Comprometidos com a Grande Comissão de pregar o Evangelho a todas as nações. Apoiamos missionários no Brasil e no exterior.',
      activities: ['Apoio a missionários', 'Evangelismo local', 'Projetos internacionais', 'Oração missionária'],
      schedule: 'Reuniões mensais'
    },
    {
      id: 4,
      icon: '🎵',
      title: 'Louvor e Adoração',
      description: 'Guia nossa congregação em momentos de adoração fiel e reverente, utilizando músicas teologicamente ricas e adequadas ao culto.',
      activities: ['Grupo de louvor', 'Orquestra', 'Coral', 'Preparação musical'],
      schedule: 'Ensaio: Quinta - 19h'
    },
    {
      id: 5,
      icon: '👨‍👩‍👧‍👦',
      title: 'Ministerio de Família',
      description: 'Cuidando das famílias da igreja através de aconselhamento, casaisBible study, e eventos que fortalecem os laços familiares.',
      activities: ['Encontro de casais', 'Estudo para pais', 'Retiros familiares', 'Aconselhamento'],
      schedule: 'Sábados alternados'
    },
    {
      id: 6,
      icon: '🎒',
      title: 'Ministerio de Jovens',
      description: 'Discipulando jovens para uma vida de fé autêntica, com atividades que combinam ensino bíblico profundo e comunhão genuína.',
      activities: ['Estudos bíblicos', 'Eventos sociais', 'Acampamentos', 'Viagens missionárias'],
      schedule: 'Sexta - 19h30'
    }
  ];

  const projetos = [
    {
      title: 'Banco de Alimentos',
      description: 'Coleta e distribuição de alimentos para famílias necesitadas da comunidade.',
      impact: '50+ famílias atendidas mensalmente'
    },
    {
      title: 'Escola Dominical Online',
      description: 'Aulas e materiais disponíveis digitalmente paraSupplement o ensino presencial.',
      impact: '200+ alunos cadastrados'
    },
    {
      title: 'Grupo de Oração',
      description: 'Intercessão constante pelas necessidades da igreja e do mundo.',
      impact: 'Encontros diários'
    }
  ];

  return (
    <motion.div
      className="ministerios"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero */}
      <section className="ministerios-hero">
        <motion.h1 variants={itemVariants}>Ministérios e Projetos</motion.h1>
        <motion.p variants={itemVariants}>
          Servindo a Deus e ao próximo com dedicação
        </motion.p>
      </section>

      {/* Ministerios */}
      <section className="ministerios-section">
        <motion.div className="section-content" variants={itemVariants}>
          <h2 className="section-title">Nossos Ministérios</h2>
          <div className="ministerios-grid">
            {ministerios.map((ministerio) => (
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
          <h2 className="section-title">Projetos Especiais</h2>
          <div className="projetos-grid">
            {projetos.map((projeto, index) => (
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
            <h2>Quer Participar?</h2>
            <p>
              Entre em contato conosco para saber como você pode contribuir
              com nossos ministérios e projetos. Há lugar para todos!
            </p>
            <button className="participe-btn">Fale Conosco</button>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Ministerios;
