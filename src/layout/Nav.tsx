import { FC } from 'react';
import { NavLink } from 'react-router';
import Panel from '../components/panel/Panel';
import { LeftNavPath, MainPath } from '../types/enums';
import { Title } from '../types/lang';

export interface NavListItem {
  path: MainPath | LeftNavPath;
  title: Title;
  subPath?: NavListItem[];
}

interface NavProps {
  ariaControls: string;
  isLeftMenuHidden: boolean;
  navItemsList: NavListItem[];
  ariaLabel?: string;
  className?: string;
}

const Nav: FC<NavProps> = ({
  ariaControls,
  isLeftMenuHidden,
  navItemsList,
  className = '',
  ariaLabel = 'primary',
}) => (
  <Panel isPanelHidden={isLeftMenuHidden} id={ariaControls}>
    <nav className="nav" aria-label={ariaLabel}>
      <ul className={`${className} nav-item-container`}>
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
  </Panel>
);

export default Nav;
