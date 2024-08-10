import { FC } from 'react';
import { BlurEventType, InputType } from '../../types/types';
import FormError from './FormError';
import FormLabel from './FormLabel';

export interface InputProps {
  id: string;
  labelText: string;
  name: string;
  onChange: (e?: any) => void;
  value: string | number;
  ariaErrormessage?: string;
  checked?: boolean;
  className?: string;
  errorText?: string;
  inputHasNoLabel?: boolean;
  max?: string;
  min?: string;
  onBlur?: (event?: BlurEventType) => void;
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
  checked,
  className,
  errorText,
  onChange,
  onBlur,
  min,
  max,
  ariaErrormessage,
  placeholder,
}) => {
  const inputClassName = `${type === 'checkbox' || type === 'radio' ? 'checkbox-radio-container' : 'input-container'}`;

  return (
    <div className={inputClassName}>
      {!inputHasNoLabel && (
        <FormLabel required={required} inputLabel={labelText} id={id} />
      )}
      <input
        type={type || 'text'}
        name={name}
        checked={checked}
        onChange={onChange}
        className={className}
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
};

export default Input;
