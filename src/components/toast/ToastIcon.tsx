import { FC } from 'react';
import { IconName } from '../../types/enums';
import Icon from '../Icon';

interface ToastIconProps {
  name: string;
}

const ToastIcon: FC<ToastIconProps> = ({ name }) => {
  const iconNewName =
    {
      error: IconName.Error,
      info: IconName.Info,
      warning: IconName.Warning,
    }[name] || IconName.Success;

  return (
    <Icon name={iconNewName} className="toast-icon" title={`${name} icon`} />
  );
};

export default ToastIcon;
