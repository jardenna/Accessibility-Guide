import { FC, useRef, useState } from 'react';
import useKeyboardEvents from '../../hooks/useKeyboardEvents';

import { BtnVariant } from '../../types/enums';
import Button from '../Button';
import './_accordion.scss';
import AccordionBody from './AccordionBody';

export interface AccordionListItemsProps {
  content: string;
  id: number;
  label: string;
  className?: string;
  indicatorColor?: string;
}

interface AccordionProps {
  accordionList: AccordionListItemsProps[];
}

const Accordion: FC<AccordionProps> = ({ accordionList }) => {
  const [activeSections, setActiveSections] = useState<{
    [key: number]: boolean;
  }>({});

  const tabsRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleActivateTab = (index: number) => {
    setActiveSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Use arrowUp & arrowDown
  useKeyboardEvents({
    lengthOfListItem: accordionList.length,
    tabsRefs,
  });

  return (
    <ul className="accordion">
      {accordionList.map((list, index) => (
        <li key={list.id} className="accordion-item">
          <h2>
            <Button
              btnRef={(el) => {
                tabsRefs.current[index] = el;
              }}
              variant={BtnVariant.Ghost}
              ariaExpanded={activeSections[index]}
              className={`accordion-open-btn ${list.className}`}
              ariaControls={`sect${list.id}`}
              id={`accordionid${list.id}`}
              onClick={() => handleActivateTab(index)}
            >
              {list.indicatorColor && (
                <span
                  style={{ backgroundColor: list.indicatorColor }}
                  className="accordion-indicator"
                />
              )}
              <span className="accordion-label">{list.label}</span>
              <span
                aria-hidden="true"
                className={`chevron ${activeSections[index] ? 'up' : 'down'}`}
              />
            </Button>
          </h2>
          <section
            id={`sect${list.id}`}
            aria-labelledby={`accordionid${list.id}`}
            className={`accordion-panel ${activeSections[index] ? 'visible' : ''}`}
          >
            <AccordionBody>{list.content}</AccordionBody>
          </section>
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
