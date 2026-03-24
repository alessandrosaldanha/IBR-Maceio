/**
 * Configuração de Tema - Cores para Light e Dark Mode
 * Alterne entre os modos ou use 'auto' para detecção automática
 * 
 * Detecção automática:
 * - Sistema: usa prefers-color-scheme do dispositivo
 * - Horário: alterna entre 6h-18h (dia) e 18h-6h (noite)
 */

export const themes = {
  dark: {
    // Backgrounds
    bgPrimary: '#0f172a',
    bgSecondary: '#1a2335',
    bgCard: '#1a2335',
    bgCardHover: '#243044',
    bgOverlay: 'rgba(0, 0, 0, 0.7)',

    // Textos
    textPrimary: '#ffffff',
    textSecondary: '#a0aec0',
    textMuted: '#64748b',

    // Acentos
    accentPrimary: '#4a6fa5',
    accentHover: '#5a7fb5',
    accentSubtle: 'rgba(74, 111, 165, 0.2)',

    // Bordas
    borderColor: 'rgba(255, 255, 255, 0.05)',
    borderHover: 'rgba(74, 111, 165, 0.5)',

    // Estados
    success: '#22c55e',
    danger: '#ef4444',

    // Sombras
    shadowSm: '0 4px 6px rgba(0, 0, 0, 0.3)',
    shadowMd: '0 10px 30px rgba(0, 0, 0, 0.4)',
    shadowLg: '0 20px 50px rgba(0, 0, 0, 0.5)',

    // Gradientes
    gradientHero: 'linear-gradient(135deg, #0f172a 0%, #1a2335 50%, #0f172a 100%)',
    gradientCard: 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)',
  },

  light: {
    // Backgrounds
    bgPrimary: '#f8fafc',
    bgSecondary: '#ffffff',
    bgCard: '#ffffff',
    bgCardHover: '#f1f5f9',
    bgOverlay: 'rgba(0, 0, 0, 0.5)',

    // Textos
    textPrimary: '#1e293b',
    textSecondary: '#475569',
    textMuted: '#94a3b8',

    // Acentos
    accentPrimary: '#3b82f6',
    accentHover: '#2563eb',
    accentSubtle: 'rgba(59, 130, 246, 0.1)',

    // Bordas
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderHover: 'rgba(59, 130, 246, 0.5)',

    // Estados
    success: '#16a34a',
    danger: '#dc2626',

    // Sombras
    shadowSm: '0 4px 6px rgba(0, 0, 0, 0.1)',
    shadowMd: '0 10px 30px rgba(0, 0, 0, 0.1)',
    shadowLg: '0 20px 50px rgba(0, 0, 0, 0.15)',

    // Gradientes
    gradientHero: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)',
    gradientCard: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)',
  },
};

/**
 * Modos de detecção de tema
 */
export const themeModes = {
  SYSTEM: 'system',    // Detecta preferência do sistema operacional
  TIME: 'time',        // Alterna baseado no horário (6h-18h = dia)
  MANUAL: 'manual',    // Usuário escolhe manualmente
};

/**
 * Configuração de horários para modo automático
 */
export const timeConfig = {
  dayStart: 6,   // 6h = início do dia
  dayEnd: 18,    // 18h = início da noite
};

/**
 * Obter tema baseado no horário atual
 */
export const getThemeByTime = () => {
  const hour = new Date().getHours();
  return hour >= timeConfig.dayStart && hour < timeConfig.dayEnd ? 'light' : 'dark';
};

/**
 * Obter tema baseado na preferência do sistema
 */
export const getSystemTheme = () => {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};
