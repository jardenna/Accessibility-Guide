import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import useKeyPress from '../hooks/useKeyPress';
import { KeyCode } from '../types/enums';
import Nav from './Nav';
import BreadCrumbs from './breadCrumbs/BreadCrumbs';
import Header from './header/Header';
import leftNavItemsList from './leftNavItemsList';

function Layout() {
  const location = useLocation();
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
      />
      <main className="main-content container">
        <article
          className={`left-nav-container ${isLeftMenuHidden ? '' : 'is-active'}`}
        >
          <Nav
            navItemsList={leftNavItemsList}
            className="left-nav"
            ariaLabel="Main"
          />
        </article>
        <article className="content-container">
          <BreadCrumbs />
          <div id="main">
            <Outlet />
          </div>
        </article>
      </main>
      <footer className="main-footer container" aria-label="Main">
        <span className="copyright-container">
          <span className="copyright">Copyright 2024</span>
        </span>
      </footer>
    </article>
  );
}

export default Layout;
