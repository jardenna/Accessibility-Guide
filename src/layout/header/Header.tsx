import { FC } from 'react';
import OpenPanelBtn from '../../components/panel/OpenPanelBtn';
import SkipLink from '../skiplink/SkipLink';
import Logo from './Logo';
import './_header.scss';

export interface HeaderProps {
  ariaControls: string;
  isLeftMenuHidden: boolean;
  isTabletSize: boolean;
  onTogglePanel: () => void;
}

const Header: FC<HeaderProps> = ({
  isLeftMenuHidden,
  onTogglePanel,
  isTabletSize,
  ariaControls,
}) => (
  <header className="main-header container" aria-label="Main">
    <SkipLink />
    <Logo />
    {isTabletSize && (
      <OpenPanelBtn
        onTogglePanel={onTogglePanel}
        isPanelHidden={isLeftMenuHidden}
        ariaLabel={isLeftMenuHidden ? 'Open menu' : 'Close menu'}
        className="menu-burger"
        ariaControls={ariaControls}
      >
        <span className="menu-burger-item" aria-hidden="true" />
      </OpenPanelBtn>
    )}
  </header>
);

export default Header;
