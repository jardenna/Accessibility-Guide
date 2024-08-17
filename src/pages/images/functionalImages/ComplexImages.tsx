import { FC } from 'react';
import Accordion from '../../../components/accordion/Accordion';
import AdditionalInfo from '../../../components/AdditionalInfo';
import BottomLinks from '../../../components/BottomLinks';
import Figcaption from '../../../components/figure/Figcaption';
import Figure from '../../../components/figure/Figure';
import Link from '../../../components/Link';
import PageTitle from '../../../components/PageTitle';
import Picture from '../../../components/Picture';
import {
  finacialRisksImages,
  finacialRisksImagesDialog,
} from '../../../components/pictureUtils';
import PageBanner from '../../../layout/pageBanner/PageBanner';
import { SizeVariant } from '../../../types/enums';
import { CommonText, Title } from '../../../types/lang';
import accordionList from './accordionList';
import SourceLinks from './SourceLinks';

const ComplexImages: FC = () => (
  <>
    <PageTitle title={Title.ComplexImages} />
    <AdditionalInfo>
      <ul className="additional-info-container">
        <li className="additional-info-item">
          <Link
            href="https://www.w3.org/WAI/tutorials/images/complex/"
            linkText=" W3C: Complex image"
            target="blank"
          />
        </li>
        <li>
          <Link
            href="https://accessibility.asu.edu/articles/complex-images"
            linkText="Arizona State  University: Complex image guidelines"
            target="blank"
          />
        </li>
      </ul>
    </AdditionalInfo>
    <PageBanner title={Title.ComplexImages}>
      Complex images like charts, graphs, infographics, and detailed diagrams
      convey more information than simple images. They need comprehensive text
      alternatives that describe their content, function, and purpose. This
      includes a short summary, a detailed description (often in text or table
      form), and the location of the detailed description.
    </PageBanner>
    <article>
      <Figure>
        <Picture
          altText={CommonText.InclusiveActivityAltText}
          lightImages={finacialRisksImages.lightImages}
          darkImages={finacialRisksImages.darkImages}
        />

        <Figcaption>
          <BottomLinks
            dialogSize={SizeVariant.Md}
            dialogHeaderText="Financial risks"
            textVersionContent={
              <div>
                <Accordion accordionList={accordionList} />
                <SourceLinks />
              </div>
            }
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

export default ComplexImages;
