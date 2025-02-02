import { FC } from 'react';
import SkipLink from '../skiplink/SkipLink';
import Logo from './Logo';
import './_header.scss';
import MenuBurger from './menuBurger/MenuBurger';

export interface HeaderProps {
  isLeftMenuHidden: boolean;
  isTabletSize: boolean;
  onClick: () => void;
}

const Header: FC<HeaderProps> = ({
  isLeftMenuHidden,
  onClick,
  isTabletSize,
}) => (
  <header className="main-header container" aria-label="Main">
    <SkipLink />
    <Logo />
    {isTabletSize && (
      <MenuBurger onClick={onClick} isLeftMenuHidden={isLeftMenuHidden} />
    )}
  </header>
);

export default Header;
