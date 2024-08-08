import { FC, ReactNode } from 'react';
import Icon from '../../components/Icon';
import { IconName } from '../../types/enums';
import './_page-banner.scss';

interface PageBannerProps {
  children: ReactNode;
  title: string;
}

const PageBanner: FC<PageBannerProps> = ({ children, title }) => (
  <section className="banner" aria-label="Page banner">
    <header className="banner-header" aria-label="banner">
      <h1 className="banner-title">{title}</h1>
      <span className="banner-icon-container">
        <Icon name={IconName.Book} title="Dictionary" size="30" />
        <Icon
          name={IconName.AddInfo}
          title="Additional information"
          size="40"
        />
      </span>
    </header>
    <p className="banner-content">{children}</p>
  </section>
);

export default PageBanner;
