import React from 'react';
import './App.css';
import { SnackbarProvider } from 'notistack';
import NotificationService from 'components/NotificationService';
import { BrowserRouter } from 'react-router-dom'
import { store } from 'store'
import { Provider } from 'react-redux'
import AppRoutes from './navigation/Routes'

function App() {

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
