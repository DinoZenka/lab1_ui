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

export const successNotification = (message: string, options?: {[p: string]: string}) => {
  // @ts-ignore
  notification?.invoke(message, {
    variant: 'success',
    ...options,
  })
}

export const errorNotification = (message: string, options?: {[p: string]: string}) => {
  // @ts-ignore
  notification?.invoke(message, {
    variant: 'error',
    ...options,
  })
}
