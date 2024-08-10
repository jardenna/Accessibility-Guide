import { FormValues } from './hooks/useFormValidation';

// eslint-disable-next-line import/prefer-default-export
export const isObjectEmpty = (objectName: FormValues) =>
  Object.keys(objectName).length === 0;
