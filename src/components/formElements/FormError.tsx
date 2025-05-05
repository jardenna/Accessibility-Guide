import { FC } from 'react';

interface FormErrorProps {
  errorText: string;
  ariaErrorId?: string;
}

const FormError: FC<FormErrorProps> = ({ errorText, ariaErrorId }) => (
  <span id={`err-${ariaErrorId}`} className="error-message">
    {errorText}
  </span>
);

export default FormError;
