import { FC } from 'react';
import { BtnVariant, IconName } from '../types/enums';
import Button from './Button';
import Icon from './Icon';

interface BtnCloseProps {
  ariaLabel: string;
  autoFocus?: boolean;
  className?: string;
  onClick?: () => void;
}

const BtnClose: FC<BtnCloseProps> = ({
  onClick,
  ariaLabel,
  autoFocus,
  className = '',
}) => (
  <Button
    variant={BtnVariant.Ghost}
    onClick={onClick}
    ariaLabel={ariaLabel}
    autoFocus={autoFocus}
    className={`btn-close ${className}`}
  >
    <Icon name={IconName.Close} title={ariaLabel} />
  </Button>
);

export default BtnClose;
