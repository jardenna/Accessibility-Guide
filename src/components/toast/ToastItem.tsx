import { FC } from 'react';
import useKeyPress from '../../hooks/useKeyPress';
import { KeyCode, ToastType } from '../../types/enums';
import { CommonText } from '../../types/lang';
import BtnClose from '../BtnClose';
import ProgressBar from '../progressbar/ProgressBar';
import ToastIcon from './ToastIcon';

interface ToastItemProps {
  className: string;
  id: any;
  message: string;
  onClick: (id: number) => void;
  role: string;
  type?: ToastType;
}

const ToastItem: FC<ToastItemProps> = ({
  className,
  message,
  onClick,
  role,
  type,
  id,
}) => {
  useKeyPress(() => onClick(id), [KeyCode.Esc]);
  useKeyPress(() => onClick(id), [KeyCode.Enter]);

  return (
    <div role={role} className={className}>
      {type && <ToastIcon name={type} />}
      <p className="toast-message">{message}</p>
      <BtnClose
        onClick={() => onClick(id)}
        ariaLabel={CommonText.CloseToast}
        className="dismiss-btn"
      />
      <ProgressBar ariaValueText="progress bar" />
    </div>
  );
};

export default ToastItem;
