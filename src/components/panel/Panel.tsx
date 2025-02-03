import { FC, ReactNode } from 'react';
import BtnClose from '../BtnClose';
import './_panel.scss';

interface PanelProps {
  children: ReactNode;
  id: string;
  isPanelHidden: boolean;
  className?: string;
  onClick?: () => void;
}

const Panel: FC<PanelProps> = ({
  children,
  isPanelHidden,
  onClick,
  className = '',
  id,
}) => (
  <div
    className={`panel ${className} ${isPanelHidden ? '' : 'is-active'}`}
    id={id}
  >
    {onClick && <BtnClose onClick={onClick} ariaLabel="Close" />}
    {children}
  </div>
);

export default Panel;
