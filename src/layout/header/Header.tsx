import { FC } from 'react';
import OpenPanelBtn from '../../components/panel/OpenPanelBtn';
import SkipLink from '../skiplink/SkipLink';
import Logo from './Logo';
import './_header.scss';

export interface HeaderProps {
  isLeftMenuHidden: boolean;
  isTabletSize: boolean;
  onTogglePanel: () => void;
}

const Header: FC<HeaderProps> = ({
  isLeftMenuHidden,
  onTogglePanel,
  isTabletSize,
}) => (
  <header className="main-header container" aria-label="Main">
    <SkipLink />
    <Logo />
    {isTabletSize && (
      <OpenPanelBtn
        onTogglePanel={onTogglePanel}
        isPanelHidden={isLeftMenuHidden}
        ariaLabel="Open menu"
        className="menu-burger"
      >
        <span className="menu-burger-item" />
      </OpenPanelBtn>
    )}
  </header>
);

export default Header;
