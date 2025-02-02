import { FC } from 'react';
import SkipLink from '../skiplink/SkipLink';
import Logo from './Logo';
import './_header.scss';
import MenuBurger from './menuBurger/MenuBurger';

interface HeaderProps {
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
      <MenuBurger
        onClick={onClick}
        isActive={isLeftMenuHidden ? '' : 'is-active'}
      />
    )}
  </header>
);

export default Header;
