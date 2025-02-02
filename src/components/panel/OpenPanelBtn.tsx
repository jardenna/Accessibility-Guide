import { FC, ReactNode } from 'react';
import { BtnVariant } from '../../types/enums';
import Button from '../Button';

interface OpenPanelBtnProps {
  ariaLabel: string;
  children: ReactNode;
  isPanelHidden: boolean;
  onTogglePanel: () => void;
  className?: string;
}

const OpenPanelBtn: FC<OpenPanelBtnProps> = ({
  ariaLabel,
  children,
  isPanelHidden,
  onTogglePanel,
  className = '',
}) => (
  <Button
    ariaLabel={ariaLabel}
    ariaExpanded={!isPanelHidden}
    variant={BtnVariant.Ghost}
    onClick={onTogglePanel}
    className={className}
  >
    {children}
  </Button>
);
export default OpenPanelBtn;
