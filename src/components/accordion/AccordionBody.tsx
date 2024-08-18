import { FC, ReactNode } from 'react';

interface AccordionBodyProps {
  children: ReactNode;
}

const AccordionBody: FC<AccordionBodyProps> = ({ children }) => (
  <div className="accordion-body">{children}</div>
);

export default AccordionBody;
