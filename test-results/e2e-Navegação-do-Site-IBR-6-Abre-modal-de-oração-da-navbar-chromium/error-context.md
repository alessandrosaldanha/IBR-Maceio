# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.js >> Navegação do Site IBR >> 6. Abre modal de oração da navbar
- Location: src\test\e2e.spec.js:40:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('text=Oração')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Navegação do Site IBR', () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.goto('http://localhost:3000');
  6  |   });
  7  | 
  8  |   test('1. Navega para Home', async ({ page }) => {
  9  |     await expect(page.locator('text=IBR')).toBeVisible();
  10 |     await expect(page.locator('text=Bem-Vindo')).toBeVisible();
  11 |   });
  12 | 
  13 |   test('2. Navega para Sobre Nós', async ({ page }) => {
  14 |     await page.click('text=Sobre Nós');
  15 |     await page.waitForURL('**/sobre');
  16 |     await expect(page.locator('text=Sobre Nós')).toBeVisible();
  17 |     await expect(page.locator('text=Nossa História')).toBeVisible();
  18 |   });
  19 | 
  20 |   test('3. Navega para Ministérios', async ({ page }) => {
  21 |     await page.click('text=Ministérios');
  22 |     await page.waitForURL('**/ministerios');
  23 |     await expect(page.locator('text=Ministérios e Projetos')).toBeVisible();
  24 |   });
  25 | 
  26 |   test('4. Navega para Escala', async ({ page }) => {
  27 |     await page.click('text=Escala');
  28 |     await page.waitForURL('**/escala');
  29 |     await expect(page.locator('text=Escala de Serviço')).toBeVisible();
  30 |     await expect(page.locator('select[id="mes"]')).toBeVisible();
  31 |   });
  32 | 
  33 |   test('5. Navega para Transparência', async ({ page }) => {
  34 |     await page.click('text=Transparência');
  35 |     await page.waitForURL('**/transparencia');
  36 |     await expect(page.locator('text=Transparência Financeira')).toBeVisible();
  37 |     await expect(page.locator('text=Chave Pix')).toBeVisible();
  38 |   });
  39 | 
  40 |   test('6. Abre modal de oração da navbar', async ({ page }) => {
> 41 |     await page.click('text=Oração');
     |                ^ Error: page.click: Test timeout of 30000ms exceeded.
  42 |     await expect(page.locator('text=Pedido de Oração')).toBeVisible();
  43 |   });
  44 | 
  45 |   test('7. Fecha modal de oração', async ({ page }) => {
  46 |     await page.click('text=Oração');
  47 |     await expect(page.locator('text=Pedido de Oração')).toBeVisible();
  48 |     
  49 |     await page.click('text=×');
  50 |     await expect(page.locator('text=Pedido de Oração')).not.toBeVisible();
  51 |   });
  52 | 
  53 |   test('8. Toggle de tema dark/light', async ({ page }) => {
  54 |     const themeToggle = page.locator('text=☀️');
  55 |     if (await themeToggle.isVisible()) {
  56 |       await themeToggle.click();
  57 |       await expect(page.locator('text=🌙')).toBeVisible();
  58 |     }
  59 |   });
  60 | 
  61 |   test('9. Valida links da navbar', async ({ page }) => {
  62 |     const navLinks = page.locator('nav a');
  63 |     await expect(navLinks).toHaveCount(5);
  64 |   });
  65 | 
  66 |   test('10. Copia chave Pix na página transparência', async ({ page }) => {
  67 |     await page.click('text=Transparência');
  68 |     await page.waitForURL('**/transparencia');
  69 |     
  70 |     const copyButton = page.locator('text=Copiar Chave');
  71 |     if (await copyButton.isVisible()) {
  72 |       await copyButton.click();
  73 |     }
  74 |   });
  75 | });
```