import { FC, ReactNode } from 'react';
import Figcaption from '../figure/Figcaption';
import Figure from '../figure/Figure';

interface FigureContentProps {
  children: ReactNode;
  title?: string;
}

const FigureContent: FC<FigureContentProps> = ({ title, children }) => (
  <Figure>
    <Figcaption>
      {title && <h2>{title}</h2>}
      {children}
    </Figcaption>
  </Figure>
);

export default FigureContent;
