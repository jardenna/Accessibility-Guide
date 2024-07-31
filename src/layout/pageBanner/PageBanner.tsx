import { FC, ReactNode } from 'react';
import './_page-banner.scss';

interface PageBannerProps {
  children: ReactNode;
  title: string;
}

const PageBanner: FC<PageBannerProps> = ({ children, title }) => (
  <section className="banner" aria-label="Page banner">
    <h1>{title}</h1>
    <p className="banner-content">{children}</p>
  </section>
);

export default PageBanner;
