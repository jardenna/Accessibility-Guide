import { FC, ReactNode } from 'react';
import BtnClose from '../BtnClose';
import './_panel.scss';

interface PanelProps {
  children: ReactNode;
  id: string;
  isPanelHidden: boolean;
  className?: string;
  onClick?: () => void;
  variant?: string;
}

const Panel: FC<PanelProps> = ({
  children,
  isPanelHidden,
  onClick,
  className = '',
  id,
  variant = 'left',
}) => (
  <div
    className={`panel ${variant} ${className} ${isPanelHidden ? '' : 'is-active'}`}
    id={id}
  >
    {onClick && <BtnClose onClick={onClick} ariaLabel="Close" />}
    {children}
  </div>
);

export default Panel;
