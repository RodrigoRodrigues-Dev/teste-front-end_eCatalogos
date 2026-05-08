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
    --accent: #2563eb;
    --font-body: 'Poppins', sans-serif;
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
    outline: none;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
