import { FormValues, ValidationErrors } from '../../../hooks/useFormValidation';
import { emailRegex } from '../../../utils';

function validatePrice(values: FormValues) {
  const errors: ValidationErrors = {};
  const { phone, email, fullName } = values;

  if (!phone) {
    errors.phone = 'Please fill out Your phone no.';
  }

  if (!fullName) {
    errors.fullName = 'Please fill out Your name';
  }

  // Email Errors
  if (!email) {
    errors.email = 'Please fill out Your email';
  } else if (!emailRegex.test(email as string)) {
    errors.email = 'Please fill out a valid email';
  }

  return errors;
}

export default validatePrice;
