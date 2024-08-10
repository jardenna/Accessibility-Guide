import { FC, ReactNode } from 'react';
import { ToastType } from '../../../types/enums';
import { FormEventType } from '../../../types/types';
import TriggerToast from '../../toast/TriggerToast';
import './_form.scss';

interface FormProps {
  children: ReactNode;
  labelText: string;
  onSubmit: (event: FormEventType) => void;
}

const Form: FC<FormProps> = ({ children, onSubmit, labelText }) => (
  <form onSubmit={onSubmit}>
    {children}
    <TriggerToast
      toastType={ToastType.Success}
      message="Thank you for submitting your order."
      btnType="submit"
    >
      {labelText}
    </TriggerToast>
  </form>
);

export default Form;
