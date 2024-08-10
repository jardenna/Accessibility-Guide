import { useEffect, useState } from 'react';
import {
  BlurEventType,
  ButtonEventType,
  ChangeInputType,
  FormEventType,
} from '../types/types';
import { isObjectEmpty } from '../utils';

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
  onChange: (event: ChangeInputType) => void;
  onClearAll: () => void;
  onSubmit: (event: FormEventType) => void;
  values: T;
  onBlur?: (event?: any) => void;
}

function useFormValidation<T extends FormValues>({
  initialState,
  callback,
  validate,
}: UseFormValidationProps<T>): UseFormValidationReturn<T> {
  const [values, setValues] = useState<T>(initialState);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = isObjectEmpty(errors);

      if (noErrors) {
        setTouched([]);
      }

      setIsSubmitting(false);
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
    const { name, value, type, checked } = event.target;

    setValues({
      ...values,
      [name]: type === 'number' ? Number(value) : value,
    });

    if (type === 'checkbox') {
      setValues(() => {
        const currentValues = values[name] as string[];
        if (checked) {
          return {
            ...values,
            [name]: [...currentValues, value],
          };
        }
        return {
          ...values,
          [name]: currentValues.filter((item) => item !== value),
        };
      });
    }
  }

  // Special case for number step
  const handleClick = (event: ButtonEventType, amount: number) => {
    const { name } = event.currentTarget;

    setValues({
      ...values,
      [name]: (values[name] as number) + amount,
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
      if (isObjectEmpty(validationErrors)) {
        setIsSubmitting(true);
        callback(values);
      }
    }
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
