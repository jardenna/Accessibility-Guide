import { FC, ReactNode } from 'react';
import { FormEventType } from '../../types/types';
import Button from '../Button';

interface FormProps {
  children: ReactNode;
  labelText: string;
  onSubmit: (event: FormEventType) => void;
}

const Form: FC<FormProps> = ({ children, onSubmit, labelText }) => (
  <form onSubmit={onSubmit}>
    {children} <Button type="submit">{labelText}</Button>
  </form>
);

export default Form;
