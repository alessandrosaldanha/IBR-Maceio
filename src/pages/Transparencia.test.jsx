import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Transparencia from '../pages/Transparencia';

const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>);

describe('Transparencia Page', () => {
  beforeEach(() => vi.clearAllMocks());

  it('renderiza título Transparência', () => {
    renderWithRouter(<Transparencia />);
    expect(screen.getAllByText(/Transparência/i).length).toBeGreaterThan(0);
  });

  it('renderiza seção de entradas', () => {
    renderWithRouter(<Transparencia />);
    expect(screen.getByText(/Total de Entradas/i)).toBeInTheDocument();
  });

  it('renderiza seção de saídas', () => {
    renderWithRouter(<Transparencia />);
    expect(screen.getByText(/Total de Saídas/i)).toBeInTheDocument();
  });

  it('renderiza chave Pix', () => {
    renderWithRouter(<Transparencia />);
    expect(screen.getByText(/Chave Pix/i)).toBeInTheDocument();
  });

  it('renderiza botão de copiar', () => {
    renderWithRouter(<Transparencia />);
    expect(screen.getByText(/Copiar/i)).toBeInTheDocument();
  });
});