import { FC, ReactNode } from 'react';
import './_page-banner.scss';

interface PageBannerProps {
  children: ReactNode;
  title: string;
}

const PageBanner: FC<PageBannerProps> = ({ children, title }) => (
  <section className="banner" aria-label="Page banner">
    <header className="banner-header" aria-label="banner">
      <h1 className="banner-title">{title}</h1>
    </header>
    <p className="banner-content">{children}</p>
  </section>
);

export default PageBanner;
