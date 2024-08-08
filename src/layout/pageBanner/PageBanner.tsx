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
    <div>
      <h1>{title}</h1>
      <div>
        <Icon name={IconName.Book} title="Dictionary" size="30" />
        <Icon
          name={IconName.AddInfo}
          title="Additional information"
          size="50"
        />
      </div>
    </div>
    <p className="banner-content">{children}</p>
  </section>
);

export default PageBanner;
