import { useEffect, useState } from 'react';
import {
  BlurEventType,
  ButtonEventType,
  ChangeInputType,
  FormEventType,
} from '../types/types';

export interface KeyValuePair<T> {
  [key: string]: T;
}

export type ValidationErrors = {
  [key: string]: string;
};

export type FormValues = {
  [key: string]: string | number | string[];
};

interface FormValidationProps<T extends KeyValuePair<any>> {
  callback: (values: T) => void;
  initialState: T;
  validate?: (values: KeyValuePair<string>) => KeyValuePair<string>;
}

function useFormValidation<T extends KeyValuePair<any>>({
  initialState,
  callback,
  validate,
}: FormValidationProps<T>) {
  const [values, setValues] = useState<T>(initialState);
  const [errors, setErrors] = useState<KeyValuePair<string>>({});
  const [touched, setTouched] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        setTouched([]);
      }
      setIsSubmitting(false);
    }
  }, [errors]);

  // Special case for number step
  const onNumberStepChange = (event: ButtonEventType, amount: number) => {
    const { name } = event.currentTarget;

    setValues({
      ...values,
      [name]: (values[name] as number) + amount,
    });
  };

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

    if (!touched.includes(name)) {
      setTouched([...touched, name]);
    }

    // Clear the error message when typing
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[name];
      return updatedErrors;
    });
  }
  const onClearAll = () => {
    setValues(initialState);
  };

  const onBlur = (event: BlurEventType) => {
    const { name } = event.target;
    if (!touched.includes(name)) {
      setTouched([...touched, name]);
    }

    // Validate the specific field on blur
    if (validate) {
      const validationErrors = validate(values);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validationErrors[name],
      }));
    }
  };

  const onSubmit = (event: FormEventType) => {
    event.preventDefault();

    // If validate function exists, execute it, otherwise skip validation
    const validationErrors = validate ? validate(values) : {};
    const formHasNoErrors = !Object.keys(validationErrors).length;

    if (formHasNoErrors) {
      setValues(initialState);
      setIsSubmitting(true);
      callback(values);
    }

    // If validate exists, set the errors (otherwise it will be an empty object)
    if (validate) {
      setErrors(validationErrors);
    }
  };

  return {
    onSubmit,
    onChange,
    onBlur,
    values,
    errors,
    onClearAll,
    onNumberStepChange,
  };
}

export default useFormValidation;
