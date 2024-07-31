import { FC, ReactNode } from 'react';

interface FigureProps {
  children: ReactNode;
  className?: string;
}

const Figure: FC<FigureProps> = ({ children, className }) => (
  <figure className={`figure ${className || ''}`}>{children}</figure>
);

export default Figure;
