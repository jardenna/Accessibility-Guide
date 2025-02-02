import { FC, ReactNode } from 'react';
import { BtnVariant } from '../../types/enums';
import Button from '../Button';

interface OpenPanelBtnProps {
  children: ReactNode;
  isPanelHidden: boolean;
  onClick: () => void;
  ariaLabel?: string;
}

const OpenPanelBtn: FC<OpenPanelBtnProps> = ({
  ariaLabel,
  children,
  isPanelHidden,
  onClick,
}) => (
  <Button
    ariaLabel={ariaLabel}
    ariaExpanded={!isPanelHidden}
    variant={BtnVariant.Ghost}
    onClick={onClick}
    className="menu-burger"
  >
    {children}
  </Button>
);
export default OpenPanelBtn;
