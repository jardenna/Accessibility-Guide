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

  const handleResize = () => {
    if (window.innerWidth > 768) {
      // Adjust based on your breakpoint
      setIsLeftMenuHidden(false);
    } else {
      setIsLeftMenuHidden(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set the correct state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <article className="main-container">
      <Header
        onClick={handleToggleMenuHidden}
        isLeftMenuHidden={isLeftMenuHidden}
      />
      <article className="main-content container">
        <Nav
          navItemsList={leftNavItemsList}
          className="left-nav"
          ariaLabel="Main"
          isLeftMenuHidden={isLeftMenuHidden}
        />

        <main className="content-container">
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
