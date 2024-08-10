import { FC, ReactNode } from 'react';
import useToast from '../../hooks/useToast';
import { BtnVariant, SizeVariant, ToastType } from '../../types/enums';
import Button from '../Button';
import Toast from './Toast';
import './_toast.scss';

export interface TriggerToastProps {
  children: ReactNode;
  message: string;
  btnType?: any;
  btnVariant?: BtnVariant;
  onCallback?: () => void;
  position?: string;
  toastSize?: SizeVariant;
  toastType?: ToastType;
}

const TriggerToast: FC<TriggerToastProps> = ({
  children,
  message,
  onCallback,
  btnVariant = BtnVariant.Primary,
  position = 'top-right',
  toastType = ToastType.Success,
  toastSize,
  btnType,
}) => {
  const { handleShowToast, handleDismissToast, sortedToasts } =
    useToast(onCallback);

  return (
    <section>
      <Button
        type={btnType}
        variant={btnVariant}
        onClick={() => handleShowToast(toastType, message)}
      >
        {children}
      </Button>

      <Toast
        toasts={sortedToasts}
        onDismissToast={handleDismissToast}
        position={position}
        toastSize={toastSize}
      />
    </section>
  );
};

export default TriggerToast;
