import { SnackbarKey } from 'notistack'

export type notificationType = {
  invoke: null | ((message: string, options: {[key: string]: any}) => SnackbarKey),
  close: null | ((key: string) => void),
  autoHideDuration: number | null,
}

const notification: notificationType = {
  invoke: null,
  close: null,
  autoHideDuration: null,
};

export default notification;
