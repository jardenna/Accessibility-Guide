import { FC } from 'react';
import PageTitle from '../../components/PageTitle';
import ImageAsLink from '../../components/imageGrids/ImageAsLink';
import StockPhoto from '../../components/imageGrids/StockPhoto';
import SufficientAdjacentText from '../../components/imageGrids/SufficientAdjacentText';
import Tabs, { TabItemList } from '../../components/tabs/Tabs';
import PageBanner from '../../layout/pageBanner/PageBanner';
import { Title } from '../../types/lang';

const tabsConfig: TabItemList[] = [
  {
    id: 1,
    label: 'Adjacent Text',
    content: <SufficientAdjacentText />,
  },
  {
    id: 2,
    label: 'Link',
    content: <ImageAsLink />,
  },
  {
    id: 3,
    label: 'Stock Photos',
    content: <StockPhoto />,
  },
];

const DecorativeImages: FC = () => (
  <>
    <PageTitle title={Title.DecorativeImages} />
    <PageBanner title={Title.DecorativeImages}>
      Decorative images do not contribute additional information to a page's
      content. Instead, they are often used to enhance the website's visual
      appeal, reiterate information already provided by adjacent text, or serve
      as links. By including empty alt text, screen readers will ignore these
      images.
    </PageBanner>

    <Tabs tabItemList={tabsConfig} className="card" />
  </>
);

export default DecorativeImages;
