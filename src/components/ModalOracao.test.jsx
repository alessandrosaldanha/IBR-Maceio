import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ModalOracao from '../components/ModalOracao';

const mockContent = {
  icon: '✝️',
  title: 'Pedido de Oração',
  subtitle: 'Deixe seu pedido',
  nameLabel: 'Seu nome',
  namePlaceholder: 'Digite seu nome',
  oracaoLabel: 'Seu pedido',
  oracaoPlaceholder: 'Escreva...',
  submitButton: 'Enviar',
};

describe('ModalOracao Component', () => {
  it('não renderiza quando isOpen é false', () => {
    render(<ModalOracao isOpen={false} onClose={vi.fn()} content={mockContent} />);
    expect(screen.queryByText(/Pedido de Oração/)).not.toBeInTheDocument();
  });

  it('renderiza quando isOpen é true', () => {
    render(<ModalOracao isOpen={true} onClose={vi.fn()} content={mockContent} />);
    expect(screen.getByText(/Pedido de Oração/)).toBeInTheDocument();
  });

  it('renderiza campo de nome', () => {
    render(<ModalOracao isOpen={true} onClose={vi.fn()} content={mockContent} />);
    expect(screen.getByLabelText(/Seu nome/)).toBeInTheDocument();
  });

  it('renderiza textarea de pedido', () => {
    render(<ModalOracao isOpen={true} onClose={vi.fn()} content={mockContent} />);
    expect(screen.getByLabelText(/Seu pedido/)).toBeInTheDocument();
  });

  it('chama onClose ao clicar no botão fechar', () => {
    const onClose = vi.fn();
    render(<ModalOracao isOpen={true} onClose={onClose} content={mockContent} />);

    fireEvent.click(screen.getByText('×'));
    expect(onClose).toHaveBeenCalled();
  });

  it('possui campo required na textarea', () => {
    render(<ModalOracao isOpen={true} onClose={vi.fn()} content={mockContent} />);
    const textarea = screen.getByLabelText(/Seu pedido/);
    expect(textarea).toHaveAttribute('required');
  });
});