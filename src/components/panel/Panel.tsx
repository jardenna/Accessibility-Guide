import { FC, ReactNode } from 'react';
import BtnClose from '../BtnClose';

interface PanelProps {
  children: ReactNode;
  isPanelHidden: boolean;
  onClick?: () => void;
}

const Panel: FC<PanelProps> = ({ children, isPanelHidden, onClick }) => (
  <div className={`left-nav-container ${isPanelHidden ? '' : 'is-active'}`}>
    {onClick && <BtnClose onClick={onClick} ariaLabel="close" />}
    {children}
  </div>
);

export default Panel;
