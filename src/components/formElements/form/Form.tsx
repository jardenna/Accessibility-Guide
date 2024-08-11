import { FC, ReactNode } from 'react';
import { FormEventType } from '../../../types/types';
import Button from '../../Button';
import './_form.scss';

interface FormProps {
  children: ReactNode;
  labelText: string;
  onSubmit: (event: FormEventType) => void;
}

const Form: FC<FormProps> = ({ children, onSubmit, labelText }) => (
  <form onSubmit={onSubmit} noValidate>
    {children}

    <Button type="submit">{labelText}</Button>
    {/* <TriggerToast
      toastType={ToastType.Success}
      message="Thank you for submitting your order."
      btnType="submit"
    >
      {labelText}
    </TriggerToast> */}
  </form>
);

export default Form;
