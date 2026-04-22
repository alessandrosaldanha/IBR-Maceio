import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

const mockContent = {
  logo: 'IBR',
  logoIcon: '✝️',
  prayerButton: 'Pedido de Oração',
  themeToggle: { dark: '☀️', light: '🌙' },
  themeToggleLabel: { dark: 'Mudar para tema claro', light: 'Mudar para tema escuro' },
  links: [
    { path: '/', label: 'Início' },
    { path: '/sobre', label: 'Sobre Nós' },
    { path: '/ministerios', label: 'Ministérios' },
    { path: '/escala', label: 'Escala' },
    { path: '/transparencia', label: 'Transparência' },
  ],
};

const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>);

describe('Navbar Component', () => {
  it('renderiza logo', () => {
    renderWithRouter(<Navbar content={mockContent} />);
    expect(screen.getByText('IBR')).toBeInTheDocument();
  });

  it('renderiza links de navegação', () => {
    renderWithRouter(<Navbar content={mockContent} />);
    expect(screen.getByText('Início')).toBeInTheDocument();
    expect(screen.getByText('Sobre Nós')).toBeInTheDocument();
  });

  it('renderiza botão de oração', () => {
    renderWithRouter(<Navbar content={mockContent} />);
    expect(screen.getByRole('button', { name: /Pedido de Oração/i })).toBeInTheDocument();
  });

  it('chama onPrayerClick ao clicar no botão', () => {
    const onPrayerClick = vi.fn();
    renderWithRouter(<Navbar content={mockContent} onPrayerClick={onPrayerClick} />);

    fireEvent.click(screen.getByRole('button', { name: /Pedido de Oração/i }));
    expect(onPrayerClick).toHaveBeenCalled();
  });

  it('renderiza toggle de tema', () => {
    renderWithRouter(<Navbar content={mockContent} theme="dark" onThemeToggle={vi.fn()} />);
    expect(screen.getByText('☀️')).toBeInTheDocument();
  });
});