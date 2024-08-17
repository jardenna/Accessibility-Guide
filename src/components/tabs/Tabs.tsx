import React, { FC, useRef, useState } from 'react';
import useKeyPress from '../../hooks/useKeyPress';
import { BtnVariant, KeyCode } from '../../types/enums';
import Button from '../Button';
import './_tabs.scss';

export interface TabItemList {
  content: React.ReactNode | string;
  id: number;
  label: string;
}

interface TabsProps {
  className: string;
  tabItemList: TabItemList[];
  defaultIndex?: number;
}

const Tabs: FC<TabsProps> = ({ tabItemList, defaultIndex, className }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(defaultIndex ?? 0);
  const tabsRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleActivateTab = (index: number) => {
    setSelectedTabIndex(index);
    // Use arrowUp & arrowDown
    tabsRefs.current[index]?.focus();
  };

  const handleNextTab = () => {
    handleActivateTab((selectedTabIndex + 1) % tabItemList.length);
  };

  const handlePrevTab = () => {
    handleActivateTab(
      (selectedTabIndex - 1 + tabItemList.length) % tabItemList.length,
    );
  };

  const handleGotoFirstTab = () => {
    handleActivateTab(0);
  };

  const handleGotoLastTab = () => {
    handleActivateTab(tabItemList.length - 1);
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
        {tabItemList.map((tab, index) => (
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
        id={`tabpanel-${tabItemList[selectedTabIndex].id}`}
        role="tabpanel"
        aria-labelledby={`tab-${tabItemList[selectedTabIndex].id}`}
      >
        {tabItemList[selectedTabIndex].content}
      </section>
    </article>
  );
};

export default Tabs;
