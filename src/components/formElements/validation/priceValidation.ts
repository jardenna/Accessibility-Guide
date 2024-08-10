import { FormValues, ValidationErrors } from '../../../hooks/useFormValidation';
import { CommonText } from '../../../types/lang';
import { emailRegex } from '../../../utils';

function validatePrice(values: FormValues) {
  const errors: ValidationErrors = {};
  const { phone, email, fullName } = values;

  if (!phone) {
    errors.phone = `${CommonText.PleaseEnter} Your phone no.`;
  }

  if (!fullName) {
    errors.fullName = `${CommonText.PleaseEnter} Your name`;
  }

  // Email Errors
  if (!email) {
    errors.email = `${CommonText.PleaseEnter} Your email`;
  } else if (!emailRegex.test(email as string)) {
    errors.email = `${CommonText.PleaseEnter} a valid emai`;
  }

  return errors;
}

export default validatePrice;
