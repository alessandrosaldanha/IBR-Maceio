import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import Footer from '../components/Footer';

const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('Footer Component', () => {
  it('renderiza nome da igreja', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Igreja Batista Reformada')).toBeInTheDocument();
  });

  it('renderiza tagline', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Soli Deo Gloria')).toBeInTheDocument();
  });

  it('renderiza link Início', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Início')).toBeInTheDocument();
  });

  it('renderiza contato', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/ibreformada.al@gmail.com/i)).toBeInTheDocument();
  });

  it('renderiza copyright', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/Igreja Batista Reformada.*direitos reservados/i)).toBeInTheDocument();
  });
});