import { FC } from 'react';
import Accordion from '../../../components/accordion/Accordion';
import BottomLinks from '../../../components/BottomLinks';
import Figcaption from '../../../components/figure/Figcaption';
import Figure from '../../../components/figure/Figure';
import PageTitle from '../../../components/PageTitle';
import Picture from '../../../components/Picture';
import PageBanner from '../../../layout/pageBanner/PageBanner';
import { Title } from '../../../types/lang';
import accordionList from './accordionList';
import SourceLinks from './SourceLinks';

const FunctionalImages: FC = () => (
  <>
    <PageTitle title={Title.FuncitionalImages} />
    <PageBanner title={Title.FuncitionalImages}>
      Functional images refer to images that serve a specific purpose or
      function beyond just being decorative. These images convey information,
      indicate actions, or provide essential content that users need to
      understand or interact with the website effectively.
    </PageBanner>
    <article>
      <Figure>
        <Picture
          altText="Bar graph of financial risks of failing to implement accessibility with text description below."
          mainImageUrl="risks_light.jpg"
          mainImageUrlDark="risks_dark.jpg"
          mobileImageUrl="mobile/risks_light.jpg"
        />
        <Figcaption>
          <SourceLinks />
          <BottomLinks
            dialogHeaderText="Financial risks"
            textVersionContent={<Accordion accordionList={accordionList} />}
            mobileImageUrl="mobile/risks_light.jpg"
            mainImageUrl="risks_light.jpg"
            mainImageUrlDark="risks_dark.jpg"
            altText="Bar graph of financial risks of failing to implement accessibility with text description below."
          />
        </Figcaption>
      </Figure>
    </article>
  </>
);

export default FunctionalImages;
