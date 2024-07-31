import { FC, ReactNode } from 'react';
import Link from '../Link';

interface ImageGridRightContentProps {
  children: ReactNode;
  href: string;
  linkText: string;
  title: string;
}

const ImageGridRightContent: FC<ImageGridRightContentProps> = ({
  title,
  children,
  href,
  linkText,
}) => (
  <section className="card-info">
    <div className="info-content">
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
    <div className="card-link">
      <Link
        className="btn btn-primary"
        href={href}
        target="blank"
        linkText={linkText}
      />
    </div>
  </section>
);

export default ImageGridRightContent;
