import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ModalOracao.css';

const ModalOracao = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nome: '',
    oracao: '',
    anonimo: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nome: '', oracao: '', anonimo: false });
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <button className="modal-close" onClick={onClose}>×</button>
            
            {submitted ? (
              <motion.div
                className="modal-success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <span className="success-icon">🙏</span>
                <h3>Seu pedido foi enviado!</h3>
                <p>Deus ouça nossas orações. Amém.</p>
              </motion.div>
            ) : (
              <>
                <div className="modal-header">
                  <span className="modal-icon">✝️</span>
                  <h2>Pedido de Oração</h2>
                  <p>Deixe seu pedido nos braços de Deus</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="nome">Seu nome (opcional)</label>
                    <input
                      type="text"
                      id="nome"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Digite seu nome"
                      disabled={formData.anonimo}
                    />
                  </div>

                  <div className="form-group checkbox-group">
                    <label>
                      <input
                        type="checkbox"
                        checked={formData.anonimo}
                        onChange={(e) => setFormData({ ...formData, anonimo: e.target.value })}
                      />
                      <span className="checkbox-custom"></span>
                      Desejo permanecer anônimo
                    </label>
                  </div>

                  <div className="form-group">
                    <label htmlFor="oracao">Seu pedido de oração *</label>
                    <textarea
                      id="oracao"
                      value={formData.oracao}
                      onChange={(e) => setFormData({ ...formData, oracao: e.target.value })}
                      placeholder="Escreva seu pedido de oração..."
                      rows={5}
                      required
                    />
                  </div>

                  <button type="submit" className="submit-btn">
                    Enviar Pedido
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModalOracao;
