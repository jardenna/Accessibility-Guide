import { emailRegex } from './regex';

function validateLogin(values: any) {
  const errors: any = {};
  const { email } = values;

  // Email Errors
  if (!email) {
    errors.email = 'Please fill out this field';
  } else if (!emailRegex.test(email)) {
    errors.email = 'Please provide a valid email';
  }

  return errors;
}

export default validateLogin;
