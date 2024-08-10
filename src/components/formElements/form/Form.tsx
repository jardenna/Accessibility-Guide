import { FC, ReactNode } from 'react';
import { FormValues } from '../../../hooks/useFormValidation';
import { ToastType } from '../../../types/enums';
import { FormEventType } from '../../../types/types';
import TriggerToast from '../../toast/TriggerToast';
import './_form.scss';

interface FormProps {
  children: ReactNode;
  errors: FormValues;
  labelText: string;
  onSubmit: (event: FormEventType) => void;
}

const Form: FC<FormProps> = ({ children, onSubmit, labelText, errors }) => (
  <form onSubmit={onSubmit} noValidate>
    {children}
    <TriggerToast
      toastType={ToastType.Success}
      message="Thank you for submitting your order."
      btnType="submit"
      errors={errors}
    >
      {labelText}
    </TriggerToast>
  </form>
);

export default Form;
