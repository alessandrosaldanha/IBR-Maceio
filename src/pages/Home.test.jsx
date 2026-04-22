import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>);

describe('Home Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renderiza o título principal', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/Igreja Batista Reformada/i)).toBeInTheDocument();
  });

  it('renderiza o botão de oração', () => {
    renderWithRouter(<Home />);
    expect(screen.getByRole('button', { name: /oração/i })).toBeInTheDocument();
  });

  it('renderiza seção de horários', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/Horários dos Cultos/i)).toBeInTheDocument();
  });

  it('renderiza cards de programação', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/Escola Bíblica Dominical/i)).toBeInTheDocument();
    expect(screen.getByText(/Culto de Adoração/i)).toBeInTheDocument();
  });

  it('renderiza mensagem de boas-vindas', () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/Bem-Vindo/i)).toBeInTheDocument();
  });
});