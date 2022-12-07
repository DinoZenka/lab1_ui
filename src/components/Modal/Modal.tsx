import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  CircularProgress,
  TextField,
} from '@mui/material';

interface IModal {
 onClose: () => void,
 onSubmit: (value: string, e: React.ChangeEvent<HTMLButtonElement>) => void,
 modalBody: string,
  modalHTML: React.ReactNode,
  title: string,
  load?: boolean,
  buttons?: { accept: string, cancel: string },
  input?: { [p: string]: string },
}


const Modal: React.FC<IModal> = (props) => {
  const {
    onClose,
    onSubmit,
    modalBody,
    modalHTML,
    title,
    load = false,
    buttons = { accept: 'Yes', cancel: 'NO' },
    input = null,
  } = props;

  const [inputValue, setInputValue] = React.useState<string>('');
  const handleInputModalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    onSubmit(inputValue, e);
  };

  return (
    <Dialog open={true} fullWidth maxWidth='xs' onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{modalBody}</DialogContentText>
        {modalHTML}
        {input && (
          <TextField
            autoFocus
            fullWidth
            value={inputValue}
            onChange={handleInputModalChange}
            {...input}
          />
        )}
        <DialogActions>
          {load ? (
            <CircularProgress />
          ) : (
            <>
              <Button color='secondary' onClick={onClose}>
                {buttons.cancel}
              </Button>
              <Button color='primary' onClick={handleSubmit}>
                {buttons.accept}
              </Button>
            </>
          )}
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
