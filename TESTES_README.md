# 🧪 Guia de Testes - IBR Maceio

## Instalação

```bash
# 1. Instalar dependências
npm install

# 2. Instalar dependências de teste
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom

# 3. Instalar Playwright para testes E2E
npm install -D playwright
npx playwright install chromium
```

## Configuração

O projeto já inclui:
- `vitest.config.js` - Configuração do Vitest
- `src/test/setup.js` - Setup com mocks
- `playwright.config.js` - Configuração do Playwright

## Comandos

### Testes Unitários (Vitest)
```bash
# Rodar todos os testes
npm test

# Rodar testes uma vez
npm run test:run

# Abrir UI de testes
npm run test:ui

# Ver cobertura
npm run test:coverage
```

### Testes E2E (Playwright)
```bash
# Rodar testes E2E
npm run e2e

# Rodar com UI
npm run e2e:ui
```

## Estrutura de Testes

```
src/
├── components/
│   ├── Navbar.test.jsx      ✅
│   ├── Footer.test.jsx     ✅
│   └── ModalOracao.test.jsx ✅
├── pages/
│   ├── Home.test.jsx        ✅
│   ├── About.test.jsx       ✅
│   ├── Ministerios.test.jsx✅
│   ├── Escala.test.jsx      ✅
│   └── Transparencia.test.jsx  ✅
├── hooks/
│   ├── useTheme.test.js     ✅
│   └── useCopyToClipboard.test.js ✅
└── test/
    ├── setup.js             ✅
    └── e2e.spec.js         ✅
```

## Cobertura de Testes

| Tipo | Qtd |
|------|-----|
| Páginas | 5 |
| Componentes | 3 |
| Hooks | 2 |
| Testes E2E | 10 |

## Dicas

### Rodar teste específico
```bash
npm test -- --grep "Home Page"
```

### Rodar teste de arquivo específico
```bash
npm test -- src/pages/Home.test.jsx
```

### Debug com UI
```bash
npm run test:ui
```

### Atualizar snapshots
```bash
npm test -- --update
```

## Troubleshooting

### Erro de porta (E2E)
```bash
# Mate processos na porta 3000
lsof -ti:3000 | xargs kill -9
```

### Problemas com Animações
O setup já inclui mock para `framer-motion`. Se tiver problemas, verifique `src/test/setup.js`.

### erro "localStorage is not defined"
O setup já inclui mock para localStorage. Verifique que o setup está sendo carregado via `setupFiles` no `vitest.config.js`.