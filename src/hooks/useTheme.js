import { useState, useEffect, useCallback } from 'react';

const THEME_KEY = 'ibr-theme';

export const useTheme = () => {
  const [theme, setThemeState] = useState(() => {
    // 1. Verificar se há tema salvo no localStorage
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;

    // 2. Verificar preferência do sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  // Aplicar tema no documento
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  // Escutar mudanças do sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e) => {
      // Só atualiza se não houver preferência manual salva
      const saved = localStorage.getItem(THEME_KEY);
      if (!saved) {
        setThemeState(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Toggle manual
  const toggleTheme = useCallback(() => {
    setThemeState(prev => prev === 'dark' ? 'light' : 'dark');
  }, []);

  // Forçar tema específico
  const setTheme = useCallback((newTheme) => {
    setThemeState(newTheme);
  }, []);

  return { theme, toggleTheme, setTheme };
};

export default useTheme;
