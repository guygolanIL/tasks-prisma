import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { QueryClientProvider } from '@tanstack/react-query';
import './index.css'
import { queryClient } from './data/config/queryClient';
import { theme } from './theme/theme';
import { ThemeProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
