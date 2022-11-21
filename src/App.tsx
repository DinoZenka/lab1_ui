import React from 'react';
import './App.css';
import { SnackbarProvider } from 'notistack';
import NotificationService from 'components/NotificationService';
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './services/routes'

function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider
        hideIconVariant

        autoHideDuration={3000}
        maxSnack={3}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <NotificationService />
        <AppRoutes />
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
