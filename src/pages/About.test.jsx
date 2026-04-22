import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import About from '../pages/About';

const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>);

describe('About Page', () => {
  beforeEach(() => vi.clearAllMocks());

  it('renderiza título hero', () => {
    renderWithRouter(<About />);
    expect(screen.getByText(/Sobre Nós/i)).toBeInTheDocument();
  });

  it('renderiza seção de história', () => {
    renderWithRouter(<About />);
    expect(screen.getByText(/Nossa História/i)).toBeInTheDocument();
  });

  it('renderiza seção das Cinco Solas', () => {
    renderWithRouter(<About />);
    const titles = screen.getAllByText(/^As Cinco Solas$/i);
    expect(titles.length).toBeGreaterThan(0);
  });

  it('renderiza seção Confessionalidade', () => {
    renderWithRouter(<About />);
    expect(screen.getByText(/Confessionalidade/i)).toBeInTheDocument();
  });
});