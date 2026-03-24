import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../constants/content';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';
import './Transparencia.css';

const TransParencia = () => {
  const { hero, summary, chart, despesasTitle, despesas, donations, relatorio } = content.transparencia;
  const { copied, copy } = useCopyToClipboard();

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

  // Dados simulados (em produção viriam de uma API)
  const dadosMensais = [
    { mes: 'Set', entradas: 45000, saidas: 32000 },
    { mes: 'Out', entradas: 52000, saidas: 35000 },
    { mes: 'Nov', entradas: 48000, saidas: 38000 },
    { mes: 'Dez', entradas: 65000, saidas: 42000 },
    { mes: 'Jan', entradas: 43000, saidas: 31000 },
    { mes: 'Fev', entradas: 47000, saidas: 34000 }
  ];

  const maxValor = Math.max(...dadosMensais.map(d => Math.max(d.entradas, d.saidas)));

  return (
    <motion.div
      className="transparencia"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero */}
      <section className="transparencia-hero">
        <motion.h1 variants={itemVariants}>{hero.title}</motion.h1>
        <motion.p variants={itemVariants}>{hero.subtitle}</motion.p>
      </section>

      {/* Resumo */}
      <section className="resumo-section">
        <motion.div className="section-content" variants={itemVariants}>
          <h2 className="section-title">{summary.title}</h2>
          <div className="resumo-grid">
            <motion.div className="resumo-card entrada" variants={itemVariants}>
              <span className="resumo-icon">📈</span>
              <div className="resumo-info">
                <span className="resumo-label">{summary.entradas.label}</span>
                <span className="resumo-value">{summary.entradas.value}</span>
                <span className="resumo-period">{summary.entradas.period}</span>
              </div>
            </motion.div>
            <motion.div className="resumo-card saida" variants={itemVariants}>
              <span className="resumo-icon">📉</span>
              <div className="resumo-info">
                <span className="resumo-label">{summary.saidas.label}</span>
                <span className="resumo-value">{summary.saidas.value}</span>
                <span className="resumo-period">{summary.saidas.period}</span>
              </div>
            </motion.div>
            <motion.div className="resumo-card saldo" variants={itemVariants}>
              <span className="resumo-icon">💰</span>
              <div className="resumo-info">
                <span className="resumo-label">{summary.saldo.label}</span>
                <span className="resumo-value">{summary.saldo.value}</span>
                <span className="resumo-period">{summary.saldo.period}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Gráfico */}
      <section className="grafico-section">
        <motion.div className="section-content" variants={itemVariants}>
          <h2 className="section-title">{chart.title}</h2>
          <div className="grafico-container">
            <div className="grafico-legends">
              <span className="legend-item"><span className="dot entrada"></span> {chart.entradas}</span>
              <span className="legend-item"><span className="dot saida"></span> {chart.saidas}</span>
            </div>
            <div className="grafico-barras">
              {dadosMensais.map((dado, index) => (
                <motion.div
                  key={dado.mes}
                  className="barra-group"
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="barras-vertical">
                    <motion.div
                      className="barra entrada"
                      initial={{ height: 0 }}
                      animate={{ height: `${(dado.entradas / maxValor) * 200}px` }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                    />
                    <motion.div
                      className="barra saida"
                      initial={{ height: 0 }}
                      animate={{ height: `${(dado.saidas / maxValor) * 200}px` }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    />
                  </div>
                  <span className="barra-label">{dado.mes}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Detalhamento */}
      <section className="detalhamento-section">
        <motion.div className="section-content" variants={itemVariants}>
          <h2 className="section-title">{despesasTitle}</h2>
          <div className="despesas-grid">
            {despesas.map((item, index) => (
              <motion.div key={index} className="despesa-item" variants={itemVariants}>
                <div className="despesa-header">
                  <span className="despesa-icon">{item.icon}</span>
                  <span className="despesa-nome">{item.name}</span>
                </div>
                <div className="despesa-bar-container">
                  <motion.div
                    className="despesa-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
                <span className="despesa-valor">{item.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Doacoes */}
      <section className="doacoes-section">
        <motion.div className="section-content" variants={itemVariants}>
          <h2 className="section-title">{donations.title}</h2>
          <div className="doacoes-grid">
            <motion.div className="doacao-card" variants={itemVariants}>
              <span className="doacao-icon">{donations.dizimos.icon}</span>
              <h3>{donations.dizimos.title}</h3>
              <p>
                {donations.dizimos.quote}<br />
                <strong>{donations.dizimos.reference}</strong>
              </p>
            </motion.div>

            <motion.div className="doacao-card pix" variants={itemVariants}>
              <span className="doacao-icon">{donations.pix.icon}</span>
              <h3>{donations.pix.title}</h3>
              <div className="pix-info">
                <p className="pix-chave">{donations.pix.chave}</p>
                <button 
                  className={`copy-btn ${copied ? 'copied' : ''}`}
                  onClick={() => copy(donations.pix.chave)}
                >
                  {copied ? '✓ Copiado!' : donations.pix.copyButton}
                </button>
              </div>
            </motion.div>

            <motion.div className="doacao-card" variants={itemVariants}>
              <span className="doacao-icon">{donations.banco.icon}</span>
              <h3>{donations.banco.title}</h3>
              <div className="banco-info">
                <p><strong>Banco:</strong> {donations.banco.banco}</p>
                <p><strong>Agência:</strong> {donations.banco.agencia}</p>
                <p><strong>Conta:</strong> {donations.banco.conta}</p>
                <p><strong>CNPJ:</strong> {donations.banco.cnpj}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Relatorio */}
      <section className="relatorio-section">
        <motion.div className="section-content" variants={itemVariants}>
          <div className="relatorio-card">
            <span className="relatorio-icon">{relatorio.icon}</span>
            <div className="relatorio-text">
              <h3>{relatorio.title}</h3>
              <p>{relatorio.description}</p>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Transparencia;
