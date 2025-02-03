import { FC } from 'react';
import Panel from '../components/panel/Panel';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { LeftNavPath, MainPath } from '../types/enums';
import { Title } from '../types/lang';
import NavIist from './nav/NavIist';

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
}) => {
  const { isTabletSize } = useWindowDimensions();
  const NavComp = (
    <nav className="nav" aria-label={ariaLabel}>
      <ul className={`${className} nav-item-container`}>
        {navItemsList.map((navItem) => (
          <NavIist
            key={navItem.title}
            navItem={navItem}
            tabIndex={isLeftMenuHidden ? -1 : 0}
          />
        ))}
      </ul>
    </nav>
  );

  return isTabletSize ? (
    <Panel
      className="nav-container"
      isPanelHidden={isLeftMenuHidden}
      id={ariaControls}
    >
      {NavComp}
    </Panel>
  ) : (
    NavComp
  );
};

export default Nav;
