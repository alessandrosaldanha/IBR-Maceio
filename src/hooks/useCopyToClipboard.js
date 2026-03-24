import { useState, useCallback } from 'react';

/**
 * Hook para copiar texto para a área de transferência
 * @param {number} timeout - Tempo em ms para resetar o estado de sucesso
 */
export const useCopyToClipboard = (timeout = 2000) => {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);

  const copy = useCallback(async (text) => {
    try {
      // Tentar usar a API moderna primeiro
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback para navegadores mais antigos
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        textArea.style.top = '-9999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (!successful) {
          throw new Error('Falha ao copiar');
        }
      }
      
      setCopied(true);
      setError(null);
      
      // Resetar após o timeout
      setTimeout(() => {
        setCopied(false);
      }, timeout);
      
      return true;
    } catch (err) {
      setError(err);
      setCopied(false);
      return false;
    }
  }, [timeout]);

  return { copied, error, copy };
};

export default useCopyToClipboard;
