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
import CarForm from '../CarForm';
import {Car} from '../../types';

interface IModal {
    onClose: () => void,
    onSubmit: (values: any) => void,
    title: string,
    load?: boolean,
    buttons?: { accept: string, cancel: string },
    initValues?: Car,
}


const CarModal: React.FC<IModal> = (props) => {
    const {
        onClose,
        onSubmit,
        title,
        load = false,
        buttons = { accept: 'Yes', cancel: 'NO' },
        initValues,
    } = props;

    const submitRef = React.useRef();

    const handleSubmit = (e: any) => {
        console.log('CarModal handleSubmit initValues: ', initValues);
        console.log('CarModal handleSubmit e: ', e);
        console.log('CarModal handleSubmit submitRef: ', submitRef.current);
        // @ts-ignore
        submitRef.current?.(e);
    }

    return (
        <Dialog open={true} fullWidth maxWidth='xs' onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <CarForm {...{initValues, onSubmit}} onSubmitRef={submitRef} />
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

export default CarModal;
