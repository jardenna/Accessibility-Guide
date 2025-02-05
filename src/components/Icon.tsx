import { FC } from 'react';
import { IconName } from '../types/enums';
import { IconDefaultProps } from '../types/interfaces';
import AddIcon from './icons/AddIcon';
import AddInfoIcon from './icons/AddInfoIcon';
import CiteIcon from './icons/CiteIcon';
import CloseIcon from './icons/CloseIcon';
import DictionaryIcon from './icons/DictionaryIcon';
import ErrorIcon from './icons/ErrorIcon';
import InfoIcon from './icons/InfoIcon';
import LogoIcon from './icons/LogoIcon';
import MailIcon from './icons/MailIcon';
import OpenNewWindowIcon from './icons/OpenNewWindowIcon';
import PhoneIcon from './icons/PhoneIcon';
import SubtractIcon from './icons/SubtractIcon';
import SuccessIcon from './icons/SuccessIcon';
import WarningIcon from './icons/WarningIcon';

interface IconProps extends IconDefaultProps {
  name: IconName;
}

const iconMapping = {
  add: AddIcon,
  addInfo: AddInfoIcon,
  book: DictionaryIcon,
  cite: CiteIcon,
  close: CloseIcon,
  error: ErrorIcon,
  info: InfoIcon,
  logo: LogoIcon,
  mail: MailIcon,
  openNewWindow: OpenNewWindowIcon,
  phone: PhoneIcon,
  subtract: SubtractIcon,
  success: SuccessIcon,
  warning: WarningIcon,
};

const Icon: FC<IconProps> = ({
  name,
  size = '20',
  height,
  title,
  className = '',
  ariaHidden,
  ariaLabel,
}) => {
  const IconComponent = iconMapping[name];
  return (
    <IconComponent
      size={size}
      height={height}
      title={title}
      className={className}
      ariaHidden={ariaHidden}
      ariaLabel={ariaLabel}
    />
  );
};

export default Icon;
