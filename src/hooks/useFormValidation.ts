import { useEffect, useState } from 'react';
import {
  BlurEventType,
  ButtonEventType,
  ChangeInputType,
  FormEventType,
} from '../types/types';

export type ValidationErrors = {
  [key: string]: string;
};

export type FormValues = {
  [key: string]: string | number | string[];
};

interface UseFormValidationProps<T extends FormValues> {
  callback: (values: T) => void;
  initialState: T;
  validate?: (values: T) => ValidationErrors;
}

interface UseFormValidationReturn<T extends FormValues> {
  errors: ValidationErrors;
  handleClick: (event: ButtonEventType, id: number) => void;
  onBlur: (event: BlurEventType) => void;
  onChange: (event: ChangeInputType) => void;
  onClearAll: () => void;
  onSubmit: (event: FormEventType) => void;
  values: T;
}

function useFormValidation<T extends FormValues>({
  initialState,
  callback,
  validate,
}: UseFormValidationProps<T>): UseFormValidationReturn<T> {
  const [values, setValues] = useState<T>(initialState);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<string[]>([]);
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        setTouched([]);
      }
      setSubmitting(false);
    }
  }, [errors, isSubmitting]);

  useEffect(() => {
    if (validate) {
      const validationErrors = validate(values);
      const touchedErrors = Object.keys(validationErrors)
        .filter((key) => touched.includes(key))
        .reduce((acc: ValidationErrors, key) => {
          if (!acc[key]) {
            // eslint-disable-next-line no-param-reassign
            acc[key] = validationErrors[key];
          }
          return acc;
        }, {});
      setErrors(touchedErrors);
    }
  }, [touched, values, validate]);

  function onChange(event: ChangeInputType) {
    const { name, value, type } = event.target;

    if (type === 'number') {
      setValues({
        ...values,
        [name]: Number(value),
      });
    }

    setValues({
      ...values,
      [name]: value,
    });
  }

  // Special case for number step
  const handleClick = (event: ButtonEventType, amount: number) => {
    const { id } = event.currentTarget;

    setValues({
      ...values,
      [id]: (values[id] as number) + amount,
    });
  };

  const onClearAll = () => {
    setValues(initialState);
  };

  const onBlur = (event: BlurEventType) => {
    const { name } = event.target;
    if (!touched.includes(name)) {
      setTouched([...touched, name]);
    }
  };

  const onSubmit = (event: FormEventType) => {
    event.preventDefault();

    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
    }

    setSubmitting(true);
    callback(values);
  };

  return {
    onSubmit,
    onChange,
    onBlur,
    values,
    errors,
    onClearAll,
    handleClick,
  };
}

export default useFormValidation;
