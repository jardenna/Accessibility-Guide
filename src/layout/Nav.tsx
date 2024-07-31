import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { LeftNavPath, MainPath } from '../types/enums';
import { Title } from '../types/lang';

export interface NavListItem {
  path: MainPath | LeftNavPath;
  title: Title;
  subPath?: NavListItem[];
}

interface NavProps {
  navItemsList: NavListItem[];
  ariaLabel?: string;
  className?: string;
}

const Nav: FC<NavProps> = ({
  navItemsList,
  className,
  ariaLabel = 'primary',
}) => (
  <nav className={`nav ${className || 'main-nav'}`} aria-label={ariaLabel}>
    <ul className="nav-item-container">
      {navItemsList.map((navItem) => (
        <li key={navItem.title} className="nav-item">
          <NavLink to={navItem.path}>{navItem.title}</NavLink>
          {navItem.subPath && (
            <ul className="sub-nav">
              {navItem.subPath.map((subPath) => (
                <li className="sub-nav-item" key={subPath.title}>
                  <NavLink to={subPath.path}>{subPath.title}</NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
