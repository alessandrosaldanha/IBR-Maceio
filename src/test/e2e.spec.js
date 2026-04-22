import { test, expect } from '@playwright/test';

test.describe('Navegação do Site IBR', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('1. Navega para Home', async ({ page }) => {
    await expect(page.locator('text=IBR')).toBeVisible();
    await expect(page.locator('text=Bem-Vindo')).toBeVisible();
  });

  test('2. Navega para Sobre Nós', async ({ page }) => {
    await page.click('text=Sobre Nós');
    await page.waitForURL('**/sobre');
    await expect(page.locator('text=Sobre Nós')).toBeVisible();
    await expect(page.locator('text=Nossa História')).toBeVisible();
  });

  test('3. Navega para Ministérios', async ({ page }) => {
    await page.click('text=Ministérios');
    await page.waitForURL('**/ministerios');
    await expect(page.locator('text=Ministérios e Projetos')).toBeVisible();
  });

  test('4. Navega para Escala', async ({ page }) => {
    await page.click('text=Escala');
    await page.waitForURL('**/escala');
    await expect(page.locator('text=Escala de Serviço')).toBeVisible();
    await expect(page.locator('select[id="mes"]')).toBeVisible();
  });

  test('5. Navega para Transparência', async ({ page }) => {
    await page.click('text=Transparência');
    await page.waitForURL('**/transparencia');
    await expect(page.locator('text=Transparência Financeira')).toBeVisible();
    await expect(page.locator('text=Chave Pix')).toBeVisible();
  });

  test('6. Abre modal de oração da navbar', async ({ page }) => {
    await page.click('text=Oração');
    await expect(page.locator('text=Pedido de Oração')).toBeVisible();
  });

  test('7. Fecha modal de oração', async ({ page }) => {
    await page.click('text=Oração');
    await expect(page.locator('text=Pedido de Oração')).toBeVisible();
    
    await page.click('text=×');
    await expect(page.locator('text=Pedido de Oração')).not.toBeVisible();
  });

  test('8. Toggle de tema dark/light', async ({ page }) => {
    const themeToggle = page.locator('text=☀️');
    if (await themeToggle.isVisible()) {
      await themeToggle.click();
      await expect(page.locator('text=🌙')).toBeVisible();
    }
  });

  test('9. Valida links da navbar', async ({ page }) => {
    const navLinks = page.locator('nav a');
    await expect(navLinks).toHaveCount(5);
  });

  test('10. Copia chave Pix na página transparência', async ({ page }) => {
    await page.click('text=Transparência');
    await page.waitForURL('**/transparencia');
    
    const copyButton = page.locator('text=Copiar Chave');
    if (await copyButton.isVisible()) {
      await copyButton.click();
    }
  });
});