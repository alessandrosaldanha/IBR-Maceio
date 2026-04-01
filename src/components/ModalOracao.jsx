import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import './ModalOracao.css';

// Endpoint da API Xano
const XANO_ENDPOINT = 'https://x8ki-letl-twmt.n7.xano.io/api:nOz_oSxB/prayer_requests';

const ModalOracao = ({ isOpen, onClose, content }) => {
  const [formData, setFormData] = useState({
    nome: '',
    descricao: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setStatus('loading');
    setErrorMessage('');

    try {
      await axios.post(XANO_ENDPOINT, {
        nome: formData.nome || '',
        descricao: formData.descricao
      });

      setStatus('success');
      
      // Limpar campos e fechar modal após 3 segundos
      setTimeout(() => {
        setFormData({ nome: '', descricao: '' });
        setStatus('idle');
        onClose();
      }, 3000);

    } catch (error) {
      console.error('Erro ao enviar pedido de oração:', error);
      setStatus('error');
      setErrorMessage(error.response?.data?.message || 'Erro ao enviar pedido. Tente novamente.');
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Limpar erro se o usuário começar a digitar
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
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
            onClick={() => status !== 'loading' && onClose()}
          />
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <button 
              className="modal-close" 
              onClick={onClose}
              disabled={status === 'loading'}
            >
              ×
            </button>
            
            {status === 'success' ? (
              <motion.div
                className="modal-success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <span className="success-icon">🙏</span>
                <h3>Pedido Enviado!</h3>
                <p>Estaremos orando por você.</p>
              </motion.div>
            ) : status === 'error' ? (
              <motion.div
                className="modal-error"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <span className="error-icon">⚠️</span>
                <h3>Ops! Algo deu errado</h3>
                <p>{errorMessage}</p>
                <button 
                  className="retry-btn"
                  onClick={() => setStatus('idle')}
                >
                  Tentar Novamente
                </button>
              </motion.div>
            ) : (
              <>
                <div className="modal-header">
                  <span className="modal-icon">{content.icon}</span>
                  <h2>{content.title}</h2>
                  <p>{content.subtitle}</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="nome">{content.nameLabel}</label>
                    <input
                      type="text"
                      id="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder={content.namePlaceholder}
                      disabled={status === 'loading'}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="descricao">{content.oracaoLabel}</label>
                    <textarea
                      id="descricao"
                      value={formData.descricao}
                      onChange={handleChange}
                      placeholder={content.oracaoPlaceholder}
                      rows={5}
                      required
                      disabled={status === 'loading'}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Enviando...' : content.submitButton}
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
