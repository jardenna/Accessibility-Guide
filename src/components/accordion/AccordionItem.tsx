import { FC } from 'react';

interface AccordionItemProps {
  content: string;
}

const AccordionItem: FC<AccordionItemProps> = ({ content }) => (
  <div>{content}</div>
);

export default AccordionItem;
