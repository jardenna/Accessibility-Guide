import { FC, ReactNode } from 'react';
import Figure from '../figure/Figure';

interface FigureContentProps {
  children: ReactNode;
  title?: string;
}

const FigureContent: FC<FigureContentProps> = ({ title, children }) => (
  <Figure>
    {title && <h2>{title}</h2>}
    {children}
  </Figure>
);

export default FigureContent;
