import React, { FC, useRef, useState } from 'react';
import useKeyPress from '../../hooks/useKeyPress';
import { BtnVariant, KeyCode } from '../../types/enums';
import Button from '../Button';
import './_tabs.scss';

export interface TabItem {
  content: React.ReactNode | string;
  id: number;
  label: string;
}

interface TabsProps {
  className: string;
  tabsConfig: TabItem[];
  defaultIndex?: number;
}

const Tabs: FC<TabsProps> = ({ tabsConfig, defaultIndex, className }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(defaultIndex ?? 0);
  const tabsRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleActivateTab = (index: number) => {
    setSelectedTabIndex(index);
    tabsRefs.current[index]?.focus();
  };

  const handleNextTab = () => {
    handleActivateTab((selectedTabIndex + 1) % tabsConfig.length);
  };

  const handlePrevTab = () => {
    handleActivateTab(
      (selectedTabIndex - 1 + tabsConfig.length) % tabsConfig.length,
    );
  };

  const handleGotoFirstTab = () => {
    handleActivateTab(0);
  };

  const handleGotoLastTab = () => {
    handleActivateTab(tabsConfig.length - 1);
  };

  useKeyPress(handleNextTab, [KeyCode.ArrowRight]);
  useKeyPress(handlePrevTab, [KeyCode.ArrowLeft]);
  useKeyPress(handleNextTab, [KeyCode.ArrowDown]);
  useKeyPress(handlePrevTab, [KeyCode.ArrowUp]);
  useKeyPress(handleGotoFirstTab, [KeyCode.Home]);
  useKeyPress(handleGotoLastTab, [KeyCode.End]);

  return (
    <article className="tab-navigation-list">
      <ul className="tab-navigation" role="tablist">
        {tabsConfig.map((tab, index) => (
          <li key={tab.id}>
            <Button
              variant={BtnVariant.Secondary}
              id={`tab-${tab.id}`}
              tabIndex={index === selectedTabIndex ? 0 : -1}
              role="tab"
              type="button"
              btnRef={(el) => {
                tabsRefs.current[index] = el;
              }}
              onClick={() => handleActivateTab(index)}
              ariaSelected={index === selectedTabIndex}
              ariaControls={`tabpanel-${tab.id}`}
              className={`tab ${index === selectedTabIndex ? 'active' : ''}`}
            >
              {tab.label}
            </Button>
          </li>
        ))}
      </ul>
      <section
        className={`tab-panel ${className}`}
        id={`tabpanel-${tabsConfig[selectedTabIndex].id}`}
        role="tabpanel"
        aria-labelledby={`tab-${tabsConfig[selectedTabIndex].id}`}
      >
        {tabsConfig[selectedTabIndex].content}
      </section>
    </article>
  );
};

export default Tabs;
