import { FC } from 'react';
import Accordion from '../../../components/accordion/Accordion';
import ActionInfo from '../../../components/ActionInfo';
import BottomLinks from '../../../components/BottomLinks';
import Figcaption from '../../../components/figure/Figcaption';
import Figure from '../../../components/figure/Figure';
import PageTitle from '../../../components/PageTitle';
import Picture from '../../../components/Picture';
import {
  finacialRisksImages,
  finacialRisksImagesDialog,
} from '../../../components/pictureUtils';
import PageBanner from '../../../layout/pageBanner/PageBanner';
import { CommonText, Title } from '../../../types/lang';
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
    <ActionInfo summary="Additional Information">
      <SourceLinks />
    </ActionInfo>
    <article>
      <Figure>
        <Picture
          altText={CommonText.InclusiveActivityAltText}
          lightImages={finacialRisksImages.lightImages}
          darkImages={finacialRisksImages.darkImages}
        />

        <Figcaption>
          <BottomLinks
            dialogHeaderText="Financial risks"
            textVersionContent={<Accordion accordionList={accordionList} />}
            picture={
              <Picture
                altText={CommonText.InclusiveActivityAltText}
                lightImages={finacialRisksImagesDialog.lightImages}
                darkImages={finacialRisksImagesDialog.darkImages}
              />
            }
          />
        </Figcaption>
      </Figure>
    </article>
  </>
);

export default FunctionalImages;
