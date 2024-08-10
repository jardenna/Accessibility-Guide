import { FC, ReactNode } from 'react';
import FigureContent from './FigureContent';

export interface ImageGridLeftContentProps {
  alt: string;
  mobileSrc: string;
  src: string;
  children?: ReactNode;
  href?: string;
  title?: string;
}

const ImageGridLeftContent: FC<ImageGridLeftContentProps> = ({
  src,
  mobileSrc,
  alt,
  title,
  children,
  href,
}) => (
  <section className="card-img">
    {href ? (
      <a href={href}>
        <FigureContent title={title}>
          <img
            src={`images/${src}`}
            srcSet={`images/${src} 1x, images/${mobileSrc} 2x,`}
            alt={alt}
          />
          {children}
        </FigureContent>
      </a>
    ) : (
      <FigureContent title={title}>
        <img
          src={`images/${src}`}
          srcSet={`images/${src} 1x, images/${mobileSrc} 2x,`}
          alt={alt}
        />
        {children}
      </FigureContent>
    )}
  </section>
);

export default ImageGridLeftContent;
