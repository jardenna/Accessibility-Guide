import { FC } from 'react';
import { ToastItems } from '../../hooks/useToast';
import { SizeVariant, ToastRole } from '../../types/enums';
import { CommonText } from '../../types/lang';
import BtnClose from '../BtnClose';
import Portal from '../Portal';
import ProgressBar from '../progressbar/ProgressBar';
import ToastIcon from './ToastIcon';

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
          <div
            key={toast.id}
            role={
              toast.type === 'success' || toast.type === 'info'
                ? ToastRole.Status
                : ToastRole.Alert
            }
            className={`toast transition toast-${toast.type} ${toastSize} ${toast.closing ? 'dismissed' : ''}`}
          >
            {toast.type && <ToastIcon name={toast.type} />}
            <p className="toast-message">{toast.content}</p>
            <BtnClose
              onClick={() => onDismissToast(toast.id)}
              ariaLabel={CommonText.CloseToast}
              className="dismiss-btn"
              autoFocus
            />
            <ProgressBar ariaValueText={CommonText.ProgressBar} />
          </div>
        ))}
      </article>
    </Portal>
  );

export default Toast;
