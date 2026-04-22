import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';

describe('useCopyToClipboard Hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    Object.assign(navigator, { clipboard: { writeText: vi.fn() } });
    Object.defineProperty(window, 'isSecureContext', { value: true });
  });

  it('retorna estado copied, error e função copy', () => {
    const { result } = renderHook(() => useCopyToClipboard());

    expect(result.current.copy).toBeDefined();
    expect(result.current.copied).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it('copia texto com sucesso', async () => {
    navigator.clipboard.writeText.mockResolvedValue(undefined);

    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      await result.current.copy('Teste');
    });

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Teste');
    expect(result.current.copied).toBe(true);
  });

  it('lida com erro ao copiar', async () => {
    navigator.clipboard.writeText.mockRejectedValue(new Error('Erro'));

    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      await result.current.copy('Teste');
    });

    expect(result.current.copied).toBe(false);
    expect(result.current.error).toBeTruthy();
  });

  it('reseta estado copied após timeout', async () => {
    vi.useFakeTimers();
    navigator.clipboard.writeText.mockResolvedValue(undefined);

    const { result } = renderHook(() => useCopyToClipboard(2000));

    await act(async () => {
      await result.current.copy('Teste');
    });

    expect(result.current.copied).toBe(true);

    act(() => {
      vi.runAllTimers();
    });

    expect(result.current.copied).toBe(false);
    vi.useRealTimers();
  });
});