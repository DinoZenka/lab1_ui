import Joi from 'joi';

import { Car } from 'types'

const carSchema = Joi.object({
  model: Joi.string()
    .required()
    .alphanum()
    .max(50)
    .required(),
  country: Joi.string().required().max(60),
  year: Joi.number()
    .integer()
    .required()
    .min(1900)
    .max(new Date().getFullYear()),
  price: Joi.number().required().min(1)
})

export const validateCar = (values: Car) => {

  const validateCarSchema = carSchema.validate(
    { ...values },
    { abortEarly: false, allowUnknown: true }
  );

  console.log('Validate: ', validateCarSchema.error)

  if (validateCarSchema.error) {
    return Object.fromEntries(
      validateCarSchema.error.details.map((detail) => [
        detail.path[0],
        detail.message,
      ])
    );
  }


  return {};
}

export default validateCar;
