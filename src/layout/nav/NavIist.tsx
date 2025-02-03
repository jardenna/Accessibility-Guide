import { FC } from 'react';
import { NavListItem } from '../Nav';
import NavItem from './NavItem';

export interface NavListProps {
  navItem: NavListItem;
  tabIndex: number;
}

const NavItems: FC<NavListProps> = ({ navItem, tabIndex }) => (
  <li className="nav-item">
    <NavItem tabIndex={tabIndex} navItem={navItem} />
    {navItem.subPath && (
      <ul className="sub-nav">
        {navItem.subPath.map((subPath) => (
          <li className="sub-nav-item" key={subPath.title}>
            <NavItem tabIndex={tabIndex} navItem={subPath} />
          </li>
        ))}
      </ul>
    )}
  </li>
);

export default NavItems;
