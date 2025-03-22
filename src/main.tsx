import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/assets/styles/index.css';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import Layout from '@/layouts/Layout';
import { ThemeProvider } from '@gravity-ui/uikit';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme="light">
      <Layout />
    </ThemeProvider>,
  </StrictMode>,
);
