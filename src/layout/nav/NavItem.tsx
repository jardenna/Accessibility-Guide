import { FC } from 'react';
import { NavLink } from 'react-router';
import { NavListProps } from './NavIist';

const NavItem: FC<NavListProps> = ({ navItem, tabIndex }) => (
  <NavLink to={navItem.path} tabIndex={tabIndex}>
    {navItem.title}
  </NavLink>
);

export default NavItem;
