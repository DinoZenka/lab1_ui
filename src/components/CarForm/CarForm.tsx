import React from 'react';
import { Form } from 'react-final-form'
import { validateCar } from '../../helpers/validations/car';

const CarForm = () => {

  const onSubmit = () => {}


  return (
    <Form
      onSubmit={onSubmit}
    validate={validateCar}
    render={({ handleSubmit, errors, touched  }) => (
      <form onSubmit={handleSubmit}>
        {/* <Field name='model'>*/}
    {/*  {(props) => {*/}
    {/*    return (*/}
    {/*      <TextField*/}
    {/*        error={Boolean(props.meta.touched && props.meta.error)}*/}
    {/*        helperText={props.meta.touched && props.meta.error}*/}
    {/*        autoComplete='off'*/}
    {/*        value={props.input.value}*/}
    {/*        name={props.input.name}*/}
    {/*        onChange={props.input.onChange}*/}
    {/*        className={styles.input}*/}
    {/*        label='Email'*/}
    {/*        InputLabelProps={{ shrink: true }}*/}
    {/*      />*/}
    {/*    );*/}
    {/*  }}*/}
    {/* </Field>*/}

  <button type="submit">Submit</button>
    </form>
)}
  />
);
}

export default CarForm;
