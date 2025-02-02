import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import useKeyPress from '../hooks/useKeyPress';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { KeyCode } from '../types/enums';
import Nav from './Nav';
import BreadCrumbs from './breadCrumbs/BreadCrumbs';
import Header from './header/Header';
import leftNavItemsList from './leftNavItemsList';

function Layout() {
  const location = useLocation();
  const { isTabletSize } = useWindowDimensions();
  const [isLeftMenuHidden, setIsLeftMenuHidden] = useState(false);

  const handleToggleMenuHidden = () => {
    setIsLeftMenuHidden(!isLeftMenuHidden);
  };

  const handleHideMenu = () => {
    setIsLeftMenuHidden(true);
  };

  useKeyPress(handleHideMenu, [KeyCode.Esc]);

  useEffect(() => {
    setIsLeftMenuHidden(true);
  }, [location]);

  return (
    <article className="main-container">
      <Header
        onClick={handleToggleMenuHidden}
        isLeftMenuHidden={isLeftMenuHidden}
        isTabletSize={isTabletSize}
      />
      <article className="main-content container">
        <Nav
          navItemsList={leftNavItemsList}
          className="left-nav"
          ariaLabel="Main"
          isLeftMenuHidden={isLeftMenuHidden}
        />

        <main
          className={`content-container ${!isLeftMenuHidden ? 'no-scroll' : ''}`}
        >
          <BreadCrumbs />
          <div id="main">
            <Outlet />
          </div>
        </main>
      </article>
      <footer className="main-footer container" aria-label="Main">
        <span className="copyright-container">
          <span className="copyright">Copyright 2024</span>
        </span>
      </footer>
    </article>
  );
}

export default Layout;
