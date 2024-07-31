import { FC } from 'react';
import PageTitle from '../../components/PageTitle';
import TestComp from '../../components/TestComp';
import ImageAsLink from '../../components/imageGrids/ImageAsLink';
import StockPhoto from '../../components/imageGrids/StockPhoto';
import SufficientAdjacentText from '../../components/imageGrids/SufficientAdjacentText';
import Tabs, { TabItem } from '../../components/tabs/Tabs';
import PageBanner from '../../layout/pageBanner/PageBanner';
import { Title } from '../../types/lang';

const tabsConfig: TabItem[] = [
  {
    id: 1,
    label: 'Image',
    content: <SufficientAdjacentText />,
  },
  {
    id: 2,
    label: 'Image 1',
    content: <ImageAsLink />,
  },
  {
    id: 3,
    label: 'Video',
    content: <StockPhoto />,
  },
  {
    id: 4,
    label: 'Links',
    content: <TestComp name="steen" />,
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

    <Tabs tabsConfig={tabsConfig} className="card" />
  </>
);

export default DecorativeImages;
