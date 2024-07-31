import { FC } from 'react';
import Figcaption from '../figure/Figcaption';
import Figure from '../figure/Figure';
import { ImageGridLeftContentProps } from './ImageGridLeftContent';

type FigureContentType = Omit<ImageGridLeftContentProps, 'href'>;

const FigureContent: FC<FigureContentType> = ({
  src,
  alt,
  title,
  children,
}) => (
  <Figure>
    <img src={src} alt={alt} />
    <Figcaption>
      {title && <h2>{title}</h2>}
      {children}
    </Figcaption>
  </Figure>
);

export default FigureContent;
