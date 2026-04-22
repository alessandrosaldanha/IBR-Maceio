import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Escala from '../pages/Escala';

vi.mock('axios');

const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>);

describe('Escala Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    axios.get.mockReset();
  });

  it('renderiza seletor de mês', async () => {
    axios.get.mockResolvedValue({ data: [] });
    renderWithRouter(<Escala />);
    await waitFor(() => {
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    }, { timeout: 5000 });
  });

  it('renderiza conteúdo da página', async () => {
    axios.get.mockResolvedValue({ data: [] });
    renderWithRouter(<Escala />);
    await waitFor(() => {
      expect(screen.getByText(/Escala/i)).toBeInTheDocument();
    }, { timeout: 5000 });
  });
});