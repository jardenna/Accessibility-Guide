import { FC } from 'react';
import { InputType } from '../../types/types';
import FormError from './FormError';
import FormLabel from './FormLabel';

export interface InputProps {
  id: string;
  labelText: string;
  name: string;
  onChange: (e?: any) => void;
  value: string | number;
  ariaErrormessage?: string;
  errorText?: string;
  inputHasNoLabel?: boolean;
  max?: string;
  min?: string;
  onBlur?: () => void;
  placeholder?: string;
  required?: boolean;
  type?: InputType;
}

const Input: FC<InputProps> = ({
  id,
  type,
  required,
  labelText,
  name,
  value,
  inputHasNoLabel,
  errorText,
  onChange,
  onBlur,
  min,
  max,
  ariaErrormessage,
  placeholder,
}) => (
  <div className="input-container">
    {!inputHasNoLabel && (
      <FormLabel required={required} inputLabel={labelText} id={id} />
    )}
    <input
      type={type || 'text'}
      name={name}
      onChange={onChange}
      value={value}
      id={id}
      aria-invalid={errorText ? true : undefined}
      aria-required={required || undefined}
      aria-errormessage={ariaErrormessage || undefined}
      aria-label={inputHasNoLabel ? labelText : undefined}
      onBlur={onBlur}
      placeholder={placeholder}
      min={min}
      max={max}
    />
    {errorText && <FormError errorText={errorText} ariaErrorId={id} />}
  </div>
);
export default Input;
