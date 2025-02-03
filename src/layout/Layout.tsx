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
  const { isPanelHidden, onTogglePanel } = usePanel();
  const ariaControls = 'menu';

  useKeyPress(onTogglePanel, [KeyCode.Esc]);

  return (
    <article className="main-container">
      <Header
        onTogglePanel={onTogglePanel}
        isLeftMenuHidden={isPanelHidden}
        isTabletSize={isTabletSize}
        ariaControls={ariaControls}
      />
      <article className="main-content container">
        <Nav
          navItemsList={leftNavItemsList}
          ariaLabel="Main"
          isLeftMenuHidden={isPanelHidden}
          ariaControls={ariaControls}
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
