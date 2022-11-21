import React from 'react';
import { useSnackbar } from 'notistack';
import notification from 'helpers/notification';

const NotificationService = () => {
  const snackbarManager = useSnackbar();

  React.useEffect(() => {
    notification.invoke = (message: string, options: { [key: string]: any}) => {
      return snackbarManager.enqueueSnackbar(message, options);
    };


    notification.close = (key: string) => {
      snackbarManager.closeSnackbar(key);
    };
  }, []);

  return null;
};

export default NotificationService;
