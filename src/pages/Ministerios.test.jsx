import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Ministerios from '../pages/Ministerios';

const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>);

describe('Ministerios Page', () => {
  beforeEach(() => vi.clearAllMocks());

  it('renderiza título Ministérios', () => {
    renderWithRouter(<Ministerios />);
    expect(screen.getAllByText(/Ministérios/i).length).toBeGreaterThan(0);
  });

  it('renderiza lista de ministérios', () => {
    renderWithRouter(<Ministerios />);
    expect(screen.getByText(/Escola Bíblica Dominical/i)).toBeInTheDocument();
  });

  it('renderiza botão de contato', () => {
    renderWithRouter(<Ministerios />);
    expect(screen.getByText(/Fale Conosco/i)).toBeInTheDocument();
  });
});