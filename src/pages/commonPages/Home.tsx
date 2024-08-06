import { FC } from 'react';
import BottomLinks from '../../components/BottomLinks';
import Figcaption from '../../components/figure/Figcaption';
import Figure from '../../components/figure/Figure';
import PageTitle from '../../components/PageTitle';
import Picture from '../../components/Picture';
import Table, { TableData } from '../../components/table/Table';
import PageBanner from '../../layout/pageBanner/PageBanner';
import { BannerTitle, Title } from '../../types/lang';

const data: TableData[] = [
  {
    category: 'Touch',
    permanent: 'One arm',
    temporary: 'Arm injury',
    situational: 'New parent (holding a baby)',
  },
  {
    category: 'See',
    permanent: 'Blind',
    temporary: 'Cataract',
    situational: 'Sunlight glare',
  },
  {
    category: 'Hear',
    permanent: 'Deaf',
    temporary: 'Ear infection',
    situational: 'Bartender (loud music)',
  },
  {
    category: 'Speak',
    permanent: 'Non-verbal',
    temporary: 'Laryngitis',
    situational: 'Heavy accent',
  },
];

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
          altText="A chart of permanent, temporary, situational impairments and disabilities for touch, see, hear, speak, and cognitive  with text description below."
          mainImageUrl="mobile/inclusive_activity_cards_light.jpg"
          mainImageUrlDark="inclusive_activity_cards_dark.jpg"
          mobileImageUrl="mobile/inclusive_activity_cards_light.jpg"
        />

        <Figcaption>
          <BottomLinks
            dialogHeaderText="Kind of Disabilities"
            mobileImageUrl="mobile/inclusive_activity_cards_light.jpg"
            mainImageUrl="mobile/inclusive_activity_cards_light.jpg"
            altText="A chart of permanent, temporary, situational impairments and disabilities for touch, see, hear, speak, and cognitive  with text description below."
            textVersionContent={
              <Table caption="Kind of Disabilities" data={data} />
            }
            mainImageUrlDark="inclusive_activity_cards_dark.jpg"
          />
        </Figcaption>
      </Figure>
    </article>
  </>
);

export default Home;
