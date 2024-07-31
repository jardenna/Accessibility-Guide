import { FormValues, ValidationErrors } from '../../../hooks/useFormValidation';

function validatePrice(values: FormValues) {
  const errors: ValidationErrors = {};
  const { price } = values;

  if (!price) {
    errors.price = 'Please fill out price';
  }

  return errors;
}

export default validatePrice;
