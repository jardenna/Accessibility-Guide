import { FC, ReactNode } from 'react';
import BtnClose from '../BtnClose';

interface PanelProps {
  children: ReactNode;
  isPanelHidden: boolean;
  className?: string;
  onClick?: () => void;
}

const Panel: FC<PanelProps> = ({
  children,
  isPanelHidden,
  onClick,
  className = '',
}) => (
  <div className={`${className} ${isPanelHidden ? '' : 'is-active'}`}>
    {onClick && <BtnClose onClick={onClick} ariaLabel="Close" />}
    {children}
  </div>
);

export default Panel;
