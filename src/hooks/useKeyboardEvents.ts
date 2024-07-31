import { useState } from 'react';
import { KeyCode } from '../types/enums';
import useKeyPress from './useKeyPress';

interface useKeyboardEventsProps {
  lengthOfListItem: number;
  tabsRefs: React.RefObject<(HTMLButtonElement | null)[]>;
}

const useKeyboardEvents = ({
  lengthOfListItem,
  tabsRefs,
}: useKeyboardEventsProps) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const handleNextTab = () => {
    const nextIndex = (selectedTabIndex + 1) % lengthOfListItem;
    setSelectedTabIndex(nextIndex);
    if (tabsRefs.current) {
      tabsRefs.current[nextIndex]?.focus();
    }
  };

  const handlePrevTab = () => {
    const prevIndex =
      (selectedTabIndex - 1 + lengthOfListItem) % lengthOfListItem;
    setSelectedTabIndex(prevIndex);
    if (tabsRefs.current) {
      tabsRefs.current[prevIndex]?.focus();
    }
  };

  const handleGotoFirstTab = () => {
    setSelectedTabIndex(0);
    if (tabsRefs.current) {
      tabsRefs.current[0]?.focus();
    }
  };

  const handleGotoLastTab = () => {
    setSelectedTabIndex(lengthOfListItem - 1);
    if (tabsRefs.current) {
      tabsRefs.current[lengthOfListItem - 1]?.focus();
    }
  };

  useKeyPress(handleNextTab, [KeyCode.ArrowDown]);
  useKeyPress(handlePrevTab, [KeyCode.ArrowUp]);
  useKeyPress(handleGotoFirstTab, [KeyCode.Home]);
  useKeyPress(handleGotoLastTab, [KeyCode.End]);
};

export default useKeyboardEvents;
