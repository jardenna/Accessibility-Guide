import { FC } from 'react';
import InfoTextList from '../../components/infoTextList/InfoTextList';
import PageTitle from '../../components/PageTitle';
import Quote from '../../components/quote/Quote';
import TextContainer from '../../components/textContainer/TextContainer';
import PageBanner from '../../layout/pageBanner/PageBanner';
import { BannerTitle, Title } from '../../types/lang';
import wcagDifferenceList from './wcagDifferenceList';

interface WcagFutureProps {}

const WcagFuture: FC<WcagFutureProps> = () => (
  <>
    <PageTitle title={Title.WcagFuture} />
    <PageBanner title={BannerTitle.Wcag3IsComing}>
      WCAG 2.0 was released in 2008, and since then, web technologies and
      digital accessibility practices have evolved significantly. WCAG 3.0 is
      designed to address these advancements and the changing landscape of web
      content. WCAG 3.0 introduces a new framework with more frequent updates,
      aiming to better meet changing user needs and technological advancements.
    </PageBanner>

    <Quote citeName="Jeanne Spellman" citeInfo="Editor for WCAG 3.0">
      We found that generally, people like the content of WCAG2, but they find
      it hard to understand and find the information they need. ...without
      having to wade through hundreds of pages of documentation.
    </Quote>

    <TextContainer
      className="wcag-future"
      heading="20??: WCAG 3.0"
      subHeading="This significant update aims to improve the accessibility of digital
        content while accommodating evolving technological landscapes and user
        expectations."
    >
      <InfoTextList infoTextList={wcagDifferenceList} />
    </TextContainer>
  </>
);

export default WcagFuture;
