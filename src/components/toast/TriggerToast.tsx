import { FC, ReactNode } from 'react';
import useToast from '../../hooks/useToast';
import { BtnVariant, SizeVariant, ToastType } from '../../types/enums';
import Button from '../Button';
import Toast from './Toast';
import './_toast.scss';

export interface TriggerToastProps {
  children: ReactNode;
  message: string;
  onCallback: () => void;
  btnVariant?: BtnVariant;
  position?: string;
  toastSize?: SizeVariant;
  type?: ToastType;
}

const TriggerToast: FC<TriggerToastProps> = ({
  children,
  message,
  onCallback,
  btnVariant = BtnVariant.Primary,
  position = 'top-right',
  type = ToastType.Success,
  toastSize,
}) => {
  const { handleShowToast, handleDismissToast, sortedToasts } =
    useToast(onCallback);

  return (
    <section>
      <Button
        variant={btnVariant}
        onClick={() => handleShowToast(type, message)}
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
