import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Escala.css';

const Escala = () => {
  const [selectedMonth, setSelectedMonth] = useState('Março 2026');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const meses = [
    'Janeiro 2026',
    'Fevereiro 2026',
    'Março 2026',
    'Abril 2026',
    'Maio 2026',
    'Junho 2026'
  ];

  const escalas = [
    {
      data: '01/03 - Domingo',
      culto: 'Culto das 9h',
      diacono: 'João Silva',
      recepcao: 'Maria Santos, Pedro Costa',
      som: 'Carlos Oliveira',
      louvor: 'Ana Lima, Paulo Souza'
    },
    {
      data: '05/03 - Quarta',
      culto: 'Culto de Oração',
      diacono: 'Roberto Alves',
      recepcao: 'José Mendes',
      som: 'Marcos Pereira',
      louvor: 'Fernanda Rocha'
    },
    {
      data: '07/03 - Sábado',
      culto: 'EBD',
      diacono: 'Roberto Alves',
      recepcao: 'Professores',
      som: 'André Nunes',
      louvor: 'Equipe EBD'
    },
    {
      data: '08/03 - Domingo',
      culto: 'Culto das 9h',
      diacono: 'Paulo Ferreira',
      recepcao: 'Lucas Gomes, Juliana Lopes',
      som: 'Rafael Martins',
      louvor: 'Camila Silva, Diego Ramos'
    },
    {
      data: '08/03 - Domingo',
      culto: 'Culto das 18h',
      diacono: 'Tiago Barbosa',
      recepcao: 'Beatriz Costa, Felipe Rocha',
      som: 'Leonardo Ferreira',
      louvor: 'Priscila Alves, Ricardo Nunes'
    },
    {
      data: '12/03 - Quarta',
      culto: 'Culto de Oração',
      diacono: 'João Silva',
      recepcao: 'Maria Santos',
      som: 'Carlos Oliveira',
      louvor: 'Sandra Lima'
    },
    {
      data: '14/03 - Sábado',
      culto: 'EBD',
      diacono: 'João Silva',
      recepcao: 'Professores',
      som: 'Marcos Pereira',
      louvor: 'Equipe EBD'
    },
    {
      data: '15/03 - Domingo',
      culto: 'Culto das 9h',
      diacono: 'Roberto Alves',
      recepcao: 'Ana Lima, Thiago Gomes',
      som: 'André Nunes',
      louvor: 'Juliana Lopes, Bruno Costa'
    }
  ];

  const diaconos = [
    'João Silva',
    'Roberto Alves',
    'Paulo Ferreira',
    'Tiago Barbosa'
  ];

  return (
    <motion.div
      className="escala"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero */}
      <section className="escala-hero">
        <motion.h1 variants={itemVariants}>Escala de Serviço</motion.h1>
        <motion.p variants={itemVariants}>
          Organização dos irmão(a)s para os cultos
        </motion.p>
      </section>

      {/* Info */}
      <section className="info-section">
        <motion.div className="section-content" variants={itemVariants}>
          <div className="info-card">
            <span className="info-icon">📋</span>
            <div className="info-text">
              <h3>Como funciona?</h3>
              <p>
                A escala é organizada mensalmente pelos diáconos. Cada irmão(a) é lembrado(a)
                com antecedência sobre seu dia de serviço. Em caso de impossibilidade,
                por favor comunique com antecedência para que possamos remanejar.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Filtro */}
      <section className="filter-section">
        <motion.div className="section-content" variants={itemVariants}>
          <div className="filter-group">
            <label htmlFor="mes">Selecione o mês:</label>
            <select
              id="mes"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="month-select"
            >
              {meses.map((mes) => (
                <option key={mes} value={mes}>{mes}</option>
              ))}
            </select>
          </div>
        </motion.div>
      </section>

      {/* Tabela */}
      <section className="table-section">
        <motion.div className="section-content" variants={itemVariants}>
          <div className="table-wrapper">
            <table className="escala-table">
              <thead>
                <tr>
                  <th>Data / Culto</th>
                  <th>Diácono</th>
                  <th>Recepção</th>
                  <th>Som</th>
                  <th>Louvor</th>
                </tr>
              </thead>
              <tbody>
                {escalas.map((item, index) => (
                  <tr key={index}>
                    <td className="date-cell">
                      <span className="date">{item.data}</span>
                      <span className="culto">{item.culto}</span>
                    </td>
                    <td>{item.diacono}</td>
                    <td>{item.recepcao}</td>
                    <td>{item.som}</td>
                    <td>{item.louvor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Diaconos */}
      <section className="diaconos-section">
        <motion.div className="section-content" variants={itemVariants}>
          <h2 className="section-title">Nossos Diáconos</h2>
          <div className="diaconos-grid">
            {diaconos.map((nome, index) => (
              <motion.div
                key={index}
                className="diacono-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="diacono-avatar">
                  {nome.split(' ').map(n => n[0]).join('')}
                </div>
                <h3>{nome}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Legenda */}
      <section className="legenda-section">
        <motion.div className="section-content" variants={itemVariants}>
          <h2 className="section-title">Legenda de Funções</h2>
          <div className="legenda-grid">
            <div className="legenda-item">
              <span className="legenda-icon">👤</span>
              <h4>Diácono</h4>
              <p>Coordena o culto e auxilia na ministração</p>
            </div>
            <div className="legenda-item">
              <span className="legenda-icon">🤝</span>
              <h4>Recepção</h4>
              <p>acolhe os membros e visitantes</p>
            </div>
            <div className="legenda-item">
              <span className="legenda-icon">🎛️</span>
              <h4>Som</h4>
              <p>Opera o sistema de áudio do templo</p>
            </div>
            <div className="legenda-item">
              <span className="legenda-icon">🎵</span>
              <h4>Louvor</h4>
              <p>Dirige os cânticos da congregação</p>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Escala;
