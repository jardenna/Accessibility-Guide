import { FC, ReactNode } from 'react';
import FigureContent from './FigureContent';

export interface ImageGridLeftContentProps {
  alt: string;
  src: string;
  children?: ReactNode;
  href?: string;
  title?: string;
}

const ImageGridLeftContent: FC<ImageGridLeftContentProps> = ({
  src,
  alt,
  title,
  children,
  href,
}) => (
  <section className="card-img">
    {href ? (
      <a href={href}>
        <FigureContent src={src} alt={alt} title={title}>
          {children}
        </FigureContent>
      </a>
    ) : (
      <FigureContent src={src} alt={alt} title={title}>
        {children}
      </FigureContent>
    )}
  </section>
);
export default ImageGridLeftContent;
