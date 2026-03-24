import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { content } from '../constants/content';
import './Escala.css';

const Escala = () => {
  const { hero, info, months, tableHeaders, diaconos, diaconoTitle, legendTitle, legend } = content.escala;
  const [selectedMonth, setSelectedMonth] = useState(months[2]);

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

  // Dados simulados (em produção viriam de uma API)
  const escalas = [
    { data: '01/03 - Domingo', culto: 'Culto das 9h', diacono: 'João Silva', recepcao: 'Maria Santos, Pedro Costa', som: 'Carlos Oliveira', louvor: 'Ana Lima, Paulo Souza' },
    { data: '05/03 - Quarta', culto: 'Culto de Oração', diacono: 'Roberto Alves', recepcao: 'José Mendes', som: 'Marcos Pereira', louvor: 'Fernanda Rocha' },
    { data: '07/03 - Sábado', culto: 'EBD', diacono: 'Roberto Alves', recepcao: 'Professores', som: 'André Nunes', louvor: 'Equipe EBD' },
    { data: '08/03 - Domingo', culto: 'Culto das 9h', diacono: 'Paulo Ferreira', recepcao: 'Lucas Gomes, Juliana Lopes', som: 'Rafael Martins', louvor: 'Camila Silva, Diego Ramos' },
    { data: '08/03 - Domingo', culto: 'Culto das 18h', diacono: 'Tiago Barbosa', recepcao: 'Beatriz Costa, Felipe Rocha', som: 'Leonardo Ferreira', louvor: 'Priscila Alves, Ricardo Nunes' },
    { data: '12/03 - Quarta', culto: 'Culto de Oração', diacono: 'João Silva', recepcao: 'Maria Santos', som: 'Carlos Oliveira', louvor: 'Sandra Lima' },
    { data: '14/03 - Sábado', culto: 'EBD', diacono: 'João Silva', recepcao: 'Professores', som: 'Marcos Pereira', louvor: 'Equipe EBD' },
    { data: '15/03 - Domingo', culto: 'Culto das 9h', diacono: 'Roberto Alves', recepcao: 'Ana Lima, Thiago Gomes', som: 'André Nunes', louvor: 'Juliana Lopes, Bruno Costa' },
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
        <motion.h1 variants={itemVariants}>{hero.title}</motion.h1>
        <motion.p variants={itemVariants}>{hero.subtitle}</motion.p>
      </section>

      {/* Info */}
      <section className="info-section">
        <motion.div className="section-content" variants={itemVariants}>
          <div className="info-card">
            <span className="info-icon">📋</span>
            <div className="info-text">
              <h3>{info.title}</h3>
              <p>{info.description}</p>
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
              {months.map((mes) => (
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
                  {tableHeaders.map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
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
          <h2 className="section-title">{diaconoTitle}</h2>
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
          <h2 className="section-title">{legendTitle}</h2>
          <div className="legenda-grid">
            {legend.map((item, index) => (
              <div key={index} className="legenda-item">
                <span className="legenda-icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Escala;
