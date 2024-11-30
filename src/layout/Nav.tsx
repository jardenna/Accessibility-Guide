import { FC } from 'react';
import { NavLink } from 'react-router';
import { LeftNavPath, MainPath } from '../types/enums';
import { Title } from '../types/lang';

export interface NavListItem {
  path: MainPath | LeftNavPath;
  title: Title;
  subPath?: NavListItem[];
}

interface NavProps {
  isLeftMenuHidden: boolean;
  navItemsList: NavListItem[];
  ariaLabel?: string;
  className?: string;
}

const Nav: FC<NavProps> = ({
  isLeftMenuHidden,
  navItemsList,
  className,
  ariaLabel = 'primary',
}) => (
  <div className={`left-nav-container ${isLeftMenuHidden ? '' : 'is-active'}`}>
    <nav className={`nav ${className || 'main-nav'}`} aria-label={ariaLabel}>
      <ul className="nav-item-container">
        {navItemsList.map((navItem) => (
          <li key={navItem.title} className="nav-item">
            <NavLink to={navItem.path} tabIndex={isLeftMenuHidden ? -1 : 0}>
              {navItem.title}
            </NavLink>
            {navItem.subPath && (
              <ul className="sub-nav">
                {navItem.subPath.map((subPath) => (
                  <li className="sub-nav-item" key={subPath.title}>
                    <NavLink
                      to={subPath.path}
                      tabIndex={isLeftMenuHidden ? -1 : 0}
                    >
                      {subPath.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default Nav;
