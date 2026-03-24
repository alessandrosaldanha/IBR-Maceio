import React, { useState } from 'react';

const NeonCard = ({ title, description, icon, onAction }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
      style={{
        position: 'relative',
        width: '320px',
        padding: '32px',
        background: isClicked 
          ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          : 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        borderRadius: '20px',
        cursor: 'pointer',
        transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        boxShadow: isHovered
          ? '0 20px 40px rgba(102, 126, 234, 0.4), 0 0 60px rgba(102, 126, 234, 0.2)'
          : '0 10px 30px rgba(0, 0, 0, 0.3)',
        overflow: 'hidden',
      }}
    >
      {/* Glow effect */}
      <div style={{
        position: 'absolute',
        top: isHovered ? '-50%' : '-100%',
        left: isHovered ? '-50%' : '-100%',
        width: '200%',
        height: '200%',
        background: 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)',
        transition: 'top 0.6s ease, left 0.6s ease',
        pointerEvents: 'none',
      }} />

      {/* Icon */}
      <div style={{
        fontSize: '48px',
        marginBottom: '16px',
        animation: isHovered ? 'float 2s ease-in-out infinite' : 'none',
      }}>
        {icon}
      </div>

      {/* Content */}
      <h3 style={{
        color: '#fff',
        fontSize: '24px',
        fontWeight: '700',
        marginBottom: '12px',
        fontFamily: 'system-ui, sans-serif',
      }}>
        {title}
      </h3>
      
      <p style={{
        color: isHovered ? '#fff' : '#a0a0a0',
        fontSize: '16px',
        lineHeight: '1.6',
        transition: 'color 0.3s ease',
        fontFamily: 'system-ui, sans-serif',
      }}>
        {description}
      </p>

      {/* Action button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onAction?.();
        }}
        style={{
          marginTop: '20px',
          padding: '12px 28px',
          background: isClicked ? '#fff' : 'transparent',
          color: isClicked ? '#667eea' : '#667eea',
          border: '2px solid #667eea',
          borderRadius: '30px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {isClicked ? '✓ Ativo!' : 'Ativar'}
      </button>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

// Demo component
const CardShowcase = () => {
  const cards = [
    {
      id: 1,
      icon: '🚀',
      title: 'Super Rápido',
      description: 'Performance otimizada que vai te deixar de boca aberta.',
    },
    {
      id: 2,
      icon: '🎨',
      title: 'Design Bonito',
      description: 'Interfaces lindas que seus usuários vão adorar.',
    },
    {
      id: 3,
      icon: '⚡',
      title: 'Fácil de Usar',
      description: 'Simples assim. Comece em segundos.',
    },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 100%)',
      padding: '60px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '40px',
    }}>
      <h1 style={{
        color: '#fff',
        fontSize: '48px',
        fontWeight: '800',
        textAlign: 'center',
        fontFamily: 'system-ui, sans-serif',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
       ✨ Componentes que impressionam
      </h1>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '30px',
        justifyContent: 'center',
        maxWidth: '1100px',
      }}>
        {cards.map(card => (
          <NeonCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
            onAction={() => alert(`${card.title} ativado!`)}
          />
        ))}
      </div>

      <p style={{
        color: '#666',
        fontSize: '14px',
        marginTop: '20px',
        fontFamily: 'system-ui, sans-serif',
      }}>
        Hover me ✦ Click me ✦ Interact!
      </p>
    </div>
  );
};

export default CardShowcase;
