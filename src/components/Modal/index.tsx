import {Dialog, DialogTitle, DialogContent, DialogActions, Button, DialogContentText} from '@mui/material';
import React from 'react';

type IProps = {
    onClose: () => void,
    onSubmit: () => void,
    title?: string,
    body?: string,
    buttonText?: { close: string, submit: string },
}

const Modal: React.FC<IProps> = (props) => {
    const { onClose, onSubmit, title = '', body = '', buttonText = { close: 'close', submit: 'ok'}} = props

    return <Dialog
        open={true}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">
            {title}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {body}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose}>{buttonText.close}</Button>
            <Button onClick={onSubmit} autoFocus>{buttonText.submit}</Button>
        </DialogActions>
    </Dialog>
}

export default Modal;
