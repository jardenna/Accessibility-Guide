import { FC } from 'react';
import BottomLinks from '../../components/BottomLinks';
import Figcaption from '../../components/figure/Figcaption';
import Figure from '../../components/figure/Figure';
import PageTitle from '../../components/PageTitle';
import Picture from '../../components/Picture';
import {
  inclusiveActivityImages,
  inclusiveActivityImagesDialog,
} from '../../components/pictureUtils';
import Table from '../../components/table/Table';
import inclusiveActivityTableData from '../../components/table/tableUtils';
import PageBanner from '../../layout/pageBanner/PageBanner';
import { SizeVariant } from '../../types/enums';
import { BannerTitle, CommonText, Title } from '../../types/lang';

const Home: FC = () => (
  <>
    <PageTitle title={Title.Home} />
    <PageBanner title={BannerTitle.Home}>
      Anyone can face a disability when design, environment, attitudes, or
      social structures exclude them. By creating products for people with
      permanent disabilities, we develop solutions that benefit everyone.
    </PageBanner>

    <article>
      <h2>Kind of Disabilities</h2>
      <Figure>
        <Picture
          altText={CommonText.InclusiveActivityAltText}
          lightImages={inclusiveActivityImages.lightImages}
          darkImages={inclusiveActivityImages.darkImages}
        />
        <Figcaption>
          <BottomLinks
            imgDialogSize={SizeVariant.Md}
            picture={
              <Picture
                altText={CommonText.InclusiveActivityAltText}
                lightImages={inclusiveActivityImagesDialog.lightImages}
                darkImages={inclusiveActivityImagesDialog.darkImages}
              />
            }
            dialogHeaderText="Kind of Disabilities"
            textVersionContent={
              <Table
                caption="Kind of Disabilities"
                data={inclusiveActivityTableData}
              />
            }
          />
        </Figcaption>
      </Figure>
    </article>
  </>
);

export default Home;
