import { Outlet } from 'react-router';
import usePanel from '../components/panel/usePanel';
import useKeyPress from '../hooks/useKeyPress';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { KeyCode } from '../types/enums';
import Nav from './Nav';
import BreadCrumbs from './breadCrumbs/BreadCrumbs';
import Header from './header/Header';
import leftNavItemsList from './leftNavItemsList';

function Layout() {
  const { isTabletSize } = useWindowDimensions();
  const { isPanelHidden, onClick } = usePanel();

  useKeyPress(onClick, [KeyCode.Esc]);

  return (
    <article className="main-container">
      <Header
        onClick={onClick}
        isLeftMenuHidden={isPanelHidden}
        isTabletSize={isTabletSize}
      />
      <article className="main-content container">
        <Nav
          navItemsList={leftNavItemsList}
          className="left-nav"
          ariaLabel="Main"
          isLeftMenuHidden={isPanelHidden}
        />
        <main
          className={`content-container ${!isPanelHidden ? 'no-scroll' : ''}`}
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
