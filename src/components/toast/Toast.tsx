import { FC } from 'react';
import { ToastItems } from '../../hooks/useToast';
import { SizeVariant, ToastRole } from '../../types/enums';
import Portal from '../Portal';
import ToastItem from './ToastItem';

interface ToastProps {
  onDismissToast: (id: number) => void;
  toasts: ToastItems[];
  position?: string;
  toastSize?: SizeVariant;
}

const Toast: FC<ToastProps> = ({
  toasts,
  onDismissToast,
  position,
  toastSize = '',
}) =>
  toasts.length !== 0 && (
    <Portal portalId="toast">
      <article className={`toasts-container ${position}`}>
        {toasts.map((toast) => (
          <ToastItem
            message={toast.content}
            type={toast.type}
            onClick={() => onDismissToast(toast.id)}
            id={toast.id}
            key={toast.id}
            role={
              toast.type === 'success' || toast.type === 'info'
                ? ToastRole.Status
                : ToastRole.Alert
            }
            className={`toast transition toast-${toast.type} ${toastSize} ${toast.closing ? 'dismissed' : ''}`}
          />
        ))}
      </article>
    </Portal>
  );

export default Toast;
