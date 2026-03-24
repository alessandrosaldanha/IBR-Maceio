import React from 'react';
import { motion } from 'framer-motion';
import './Transparencia.css';

const Transparencia = () => {
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

  // Dados simulados
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
        <motion.h1 variants={itemVariants}>Transparência Financeira</motion.h1>
        <motion.p variants={itemVariants}>
          Compromisso com a transparência e o bom uso dos recursos
        </motion.p>
      </section>

      {/* Resumo */}
      <section className="resumo-section">
        <motion.div className="section-content" variants={itemVariants}>
          <h2 className="section-title">Resumo Financeiro</h2>
          <div className="resumo-grid">
            <motion.div className="resumo-card entrada" variants={itemVariants}>
              <span className="resumo-icon">📈</span>
              <div className="resumo-info">
                <span className="resumo-label">Total de Entradas</span>
                <span className="resumo-value">R$ 300.000,00</span>
                <span className="resumo-period">Últimos 6 meses</span>
              </div>
            </motion.div>
            <motion.div className="resumo-card saida" variants={itemVariants}>
              <span className="resumo-icon">📉</span>
              <div className="resumo-info">
                <span className="resumo-label">Total de Saídas</span>
                <span className="resumo-value">R$ 212.000,00</span>
                <span className="resumo-period">Últimos 6 meses</span>
              </div>
            </motion.div>
            <motion.div className="resumo-card saldo" variants={itemVariants}>
              <span className="resumo-icon">💰</span>
              <div className="resumo-info">
                <span className="resumo-label">Saldo Atual</span>
                <span className="resumo-value">R$ 88.000,00</span>
                <span className="resumo-period">Disponível em caixa</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Gráfico */}
      <section className="grafico-section">
        <motion.div className="section-content" variants={itemVariants}>
          <h2 className="section-title">Entradas vs Saídas</h2>
          <div className="grafico-container">
            <div className="grafico-legends">
              <span className="legend-item"><span className="dot entrada"></span> Entradas</span>
              <span className="legend-item"><span className="dot saida"></span> Saídas</span>
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
          <h2 className="section-title">Detalhamento de Despesas</h2>
          <div className="despesas-grid">
            <motion.div className="despesa-item" variants={itemVariants}>
              <div className="despesa-header">
                <span className="despesa-icon">🏛️</span>
                <span className="despesa-nome">Templo e Manutenção</span>
              </div>
              <div className="despesa-bar-container">
                <motion.div
                  className="despesa-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: '40%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <span className="despesa-valor">R$ 84.800,00</span>
            </motion.div>
            <motion.div className="despesa-item" variants={itemVariants}>
              <div className="despesa-header">
                <span className="despesa-icon">🎓</span>
                <span className="despesa-nome">Ministerio e EBD</span>
              </div>
              <div className="despesa-bar-container">
                <motion.div
                  className="despesa-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: '25%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <span className="despesa-valor">R$ 53.000,00</span>
            </motion.div>
            <motion.div className="despesa-item" variants={itemVariants}>
              <div className="despesa-header">
                <span className="despesa-icon">🌍</span>
                <span className="despesa-nome">Missões e Oferta</span>
              </div>
              <div className="despesa-bar-container">
                <motion.div
                  className="despesa-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: '20%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <span className="despesa-valor">R$ 42.400,00</span>
            </motion.div>
            <motion.div className="despesa-item" variants={itemVariants}>
              <div className="despesa-header">
                <span className="despesa-icon">💡</span>
                <span className="despesa-nome">Utilidades e Admin</span>
              </div>
              <div className="despesa-bar-container">
                <motion.div
                  className="despesa-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: '15%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <span className="despesa-valor">R$ 31.800,00</span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Doacoes */}
      <section className="doacoes-section">
        <motion.div className="section-content" variants={itemVariants}>
          <h2 className="section-title">Como Contribuir</h2>
          <div className="doacoes-grid">
            <motion.div className="doacao-card" variants={itemVariants}>
              <span className="doacao-icon">💳</span>
              <h3>Dízimos e Ofertas</h3>
              <p>
                "Trazei todos os dízimos à casa do depósito, para que haja mantimento
                na minha casa, e provai-me nisto, diz o Senhor dos Exércitos, se eu
                não vos abrir as janelas do céu e não derramar sobre vós bênção sem
                medida."<br />
                <strong>Malaquias 3:10</strong>
              </p>
            </motion.div>

            <motion.div className="doacao-card pix" variants={itemVariants}>
              <span className="doacao-icon">📱</span>
              <h3>Chave Pix</h3>
              <div className="pix-info">
                <p className="pix-chave">ibr@igreja.com.br</p>
                <button className="copy-btn">Copiar Chave</button>
              </div>
            </motion.div>

            <motion.div className="doacao-card" variants={itemVariants}>
              <span className="doacao-icon">🏦</span>
              <h3>Transferência Bancária</h3>
              <div className="banco-info">
                <p><strong>Banco:</strong> 000 - Banco Exemplo</p>
                <p><strong>Agência:</strong> 1234-5</p>
                <p><strong>Conta:</strong> 67890-1</p>
                <p><strong>CNPJ:</strong> 00.000.000/0001-00</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Relatorio */}
      <section className="relatorio-section">
        <motion.div className="section-content" variants={itemVariants}>
          <div className="relatorio-card">
            <span className="relatorio-icon">📊</span>
            <div className="relatorio-text">
              <h3>Prestação de Contas</h3>
              <p>
                A prestação de contas completa está disponível para todos os membros
                da igreja. Solicite junto à tesouraria ou aguarde a divulgação no
                final de cada trimestre.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Transparencia;
