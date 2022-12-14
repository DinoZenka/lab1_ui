import React from 'react';
import { Form, Field } from 'react-final-form'
import { validateCar } from '../../helpers/validations/car';
import { TextField } from '@mui/material';
import { styles } from './styles';
import {Car} from '../../types';

type IProps = {
    initValues?: Car,
    onSubmitRef: any,
    onSubmit: any,
}

const CarForm:React.FC<IProps> = ({ initValues, onSubmit, onSubmitRef}) => {

    return (
        <Form
            onSubmit={onSubmit}
            initialValues={initValues}
            validate={validateCar}
            render={({ handleSubmit, errors, touched}) => {
                onSubmitRef.current = handleSubmit;
                return (
                <form onSubmit={handleSubmit}>
                    <Field name='model'>
                        {(props: any) => {
                            return (
                                <TextField
                                    error={Boolean(props.meta.touched && props.meta.error)}
                                    helperText={props.meta.touched && props.meta.error}
                                    autoComplete='off'
                                    value={props.input.value}
                                    name={props.input.name}
                                    onChange={props.input.onChange}
                                    label='Model'
                                    InputLabelProps={{ shrink: true }}
                                    sx={styles.formInput}
                                />
                            );
                        }}
                    </Field>
                    <Field name='country'>
                        {(props: any) => {
                            return (
                                <TextField
                                    error={Boolean(props.meta.touched && props.meta.error)}
                                    helperText={props.meta.touched && props.meta.error}
                                    autoComplete='off'
                                    value={props.input.value}
                                    name={props.input.name}
                                    onChange={props.input.onChange}
                                    label='Country'
                                    InputLabelProps={{ shrink: true }}
                                    sx={styles.formInput}
                                />
                            );
                        }}
                    </Field>
                    <Field name='price'>
                        {(props: any) => {
                            return (
                                <TextField
                                    error={Boolean(props.meta.touched && props.meta.error)}
                                    helperText={props.meta.touched && props.meta.error}
                                    autoComplete='off'
                                    value={props.input.value}
                                    name={props.input.name}
                                    onChange={props.input.onChange}
                                    label='Price'
                                    InputLabelProps={{ shrink: true }}
                                    sx={styles.formInput}
                                />
                            );
                        }}
                    </Field>
                    <Field name='year'>
                        {(props: any) => {
                            return (
                                <TextField
                                    error={Boolean(props.meta.touched && props.meta.error)}
                                    helperText={props.meta.touched && props.meta.error}
                                    autoComplete='off'
                                    value={props.input.value}
                                    name={props.input.name}
                                    onChange={props.input.onChange}
                                    label='Year'
                                    InputLabelProps={{ shrink: true }}
                                    sx={styles.formInput}
                                />
                            );
                        }}
                    </Field>
                </form>
        )
        }}
    />
);
}

export default CarForm;
