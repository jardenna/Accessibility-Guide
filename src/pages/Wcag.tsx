import { FC } from 'react';
import PageTitle from '../components/PageTitle';
import Quote from '../components/quote/Quote';
import TextContainer from '../components/textContainer/TextContainer';
import PageBanner from '../layout/pageBanner/PageBanner';
import { BannerTitle, Title } from '../types/lang';

const Wcag: FC = () => (
  <>
    <PageTitle title={Title.Wcag} />
    <PageBanner title={BannerTitle.Wcag}>
      In the mid-1990s, as the internet began shaping daily life, it became
      clear that many people with disabilities faced barriers online. To address
      this, the World Wide Web Consortium (W3C) established the Web
      Accessibility Initiative (WAI). Their goal is to systematically tackle
      these challenges.
    </PageBanner>

    <Quote
      citeName="Mark Shapiro"
      citeInfo="President of the Bureau of Internet
      Accessibility"
    >
      Rarely does a single document have such a direct impact on people’s lives,
      but the guidance that WCAG provides allows developers and content creators
      to include people who have historically been excluded from digital
      experiences.
    </Quote>
    <TextContainer
      heading="The Web Content Accessibility Guidelines (WCAG)"
      subHeading="WCAG are technical standards developed by the W3C to ensure websites and
        digital content are accessible to everyone."
    >
      <p>
        Tim Berners-Lee, the inventor of the World Wide Web and director of W3C,
        has been a strong advocate for an inclusive internet. His vision of a
        universally accessible web has influenced W3C's initiatives, including
        WAI.
      </p>
      <p>
        WCAG standards are not laws themselves but are widely adopted globally.
        They serve as guidelines that governments and organizations use to make
        digital platforms more accessible.
      </p>
    </TextContainer>
    <TextContainer
      heading="Web Accessibility Initiative (WAI)"
      subHeading="WAI was created to make sure the web can be used by everyone, no matter their abilities. This effort involves a team of experts and stakeholders from different fields working together to develop guidelines."
    >
      <p>The guidelines are made with input from a diverse group, including:</p>
      <ul className="list-square">
        <li>Individuals with Disabilities</li>
        <li>Web Developers, assistive Technology Developers, and Designers</li>
        <li>Accessibility Experts and Consultants</li>
        <li>Government Representatives</li>
        <li>Advocacy Organizations</li>
        <li>Industry Representatives</li>
        <li>Education Professionals</li>
      </ul>
      <p>
        These people work together to ensure that the web is accessible to all
        by providing educational resources and promoting accessibility on the
        web.
      </p>
    </TextContainer>
  </>
);

export default Wcag;
