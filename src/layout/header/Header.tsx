import { FC } from 'react';
import Nav from '../Nav';
import SkipLink from '../skiplink/SkipLink';
import Logo from './Logo';
import './_header.scss';
import headerNavItemsList from './headerNavItemsList';
import MenuBurger from './menuBurger/MenuBurger';

interface HeaderProps {
  isLeftMenuHidden: boolean;
  onClick: () => void;
}

const Header: FC<HeaderProps> = ({ isLeftMenuHidden, onClick }) => (
  <header className="main-header container" aria-label="Main">
    <SkipLink />
    <Logo />
    <MenuBurger
      onClick={onClick}
      isActive={isLeftMenuHidden ? '' : 'is-active'}
    />
    <Nav navItemsList={headerNavItemsList} ariaLabel="secondary" />
  </header>
);

export default Header;
