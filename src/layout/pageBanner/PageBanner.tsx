import { FC, ReactNode } from 'react';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import { BtnVariant, IconName } from '../../types/enums';
import './_page-banner.scss';

interface PageBannerProps {
  children: ReactNode;
  title: string;
}

const PageBanner: FC<PageBannerProps> = ({ children, title }) => (
  <section className="banner" aria-label="Page banner">
    <header className="banner-header" aria-label="banner">
      <Button variant={BtnVariant.Ghost} ariaLabel="Dictionary">
        <Icon name={IconName.Book} title="Dictionary" size="30" />
      </Button>
      <h1 className="banner-title">{title}</h1>
    </header>
    <p className="banner-content">{children}</p>
  </section>
);

export default PageBanner;
