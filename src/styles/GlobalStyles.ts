// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --bg: #f0f0eb;
    --surface: #ffffff;
    --surface-2: #f7f7f4;
    --border: #e2e2dc;
    --border-strong: #c8c8c0;
    --text-primary: #1a1a18;
    --text-secondary: #6b6b65;
    --text-muted: #a0a09a;
    --accent: #2563eb;
    --accent-light: #eff6ff;
    --nacional: #16a34a;
    --nacional-light: #f0fdf4;
    --importado: #dc2626;
    --importado-light: #fef2f2;
    --warning: #d97706;
    --radius-sm: 4px;
    --radius: 8px;
    --radius-lg: 12px;
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
    --shadow: 0 4px 16px rgba(0,0,0,0.10);
    --shadow-lg: 0 8px 32px rgba(0,0,0,0.14);
    --font-body: 'Sora', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: var(--font-body);
    background: var(--bg);
    color: var(--text-primary);
    font-size: 14px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  button {
    font-family: var(--font-body);
    cursor: pointer;
    border: none;
    background: none;
    outline: none;
  }

  input {
    font-family: var(--font-mono);
    outline: none;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
