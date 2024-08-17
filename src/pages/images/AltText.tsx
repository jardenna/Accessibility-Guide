import { FC } from 'react';
import AdditionalInfo from '../../components/AdditionalInfo';
import InfoTextList from '../../components/infoTextList/InfoTextList';
import Link from '../../components/Link';
import PageTitle from '../../components/PageTitle';
import Quote from '../../components/quote/Quote';
import TextContainer from '../../components/textContainer/TextContainer';
import PageBanner from '../../layout/pageBanner/PageBanner';
import { Title } from '../../types/lang';
import altTextList from './altTextList';

const AltText: FC = () => (
  <>
    <PageTitle title={Title.AltText} />
    <AdditionalInfo>
      <ul className="additional-info-container">
        <li className="additional-info-item">
          <Link
            href="https://www.a11yproject.com/checklist/#images"
            linkText="The A11Y Project: Checklist"
            target="blank"
          />
        </li>
        <li className="additional-info-item">
          <Link
            href="https://a11y-101.com/development/the-alt-attribute"
            linkText="A11Y-101: Examples with screen readers"
            target="blank"
          />
        </li>
        <li className="additional-info-item">
          <Link
            href="https://help.siteimprove.com/support/solutions/articles/80000863904-accessibility-image-alt-text-best-practices"
            linkText=" SiteImprove: Image Alt text best practices"
            target="blank"
          />
        </li>
        <li className="additional-info-item">
          <Link
            href="https://www.makethingsaccessible.com/guides/alternative-text-race-gender-and-physical-descriptions/"
            linkText="Race, gender, and physical descriptions"
            target="blank"
          />
        </li>
      </ul>
    </AdditionalInfo>
    <PageBanner title="Writing Effective Alt Text">
      To ensure that screen reader users receive the same meaning as sighted
      users, alt text should concisely and accurately describe all important
      details in the image. The goal is for the page's meaning to remain
      unchanged when images are replaced by their alt text. For long
      descriptions, use captions instead of alt text, as captions are accessible
      to all users.
    </PageBanner>

    <Quote
      citeName="WHATWG"
      citeInfo="Web Hypertext Application Technology Working Group"
    >
      One way to think of alternative text is to think about how you would read
      the page containing the image to someone over the phone, without
      mentioning that there is an image present. Whatever you say instead of the
      image is typically a good start for writing the alternative text.
    </Quote>

    <TextContainer
      heading="Emotion Matter"
      subHeading="Rather than merely providing a factual description, the alt text should also convey the image's tone and emotion to all users."
    >
      <p>
        Images frequently communicate emotions and feelings that go beyond mere
        factual details. Including these emotional elements in alt text ensures
        that screen reader users can fully experience the intended emotional
        impact of the image.
      </p>
    </TextContainer>
    <TextContainer
      heading="Gender and race"
      subHeading="Mentioning gender and race in alt text highlights diversity, offering a more nuanced understanding of the image. It ensures recognition and respect for different identities, promoting equality and representation."
    >
      <p>
        Use appropriate, neutral, or polite terms for appearance. Is someone's
        weight, clothing, race, gender identity, hairstyle, or expression
        relevant to your use of their image? How do they prefer to be described?
        The best practice is to verify personal information or have direct
        access to individuals. When discussing someone, decide if these details
        are necessary or if referring to them by name and pronoun is sufficient.
      </p>
    </TextContainer>
    <TextContainer
      heading="Include Punctuation"
      subHeading="While end punctuation is not strictly required for compliance, using it enhances the experience for users of screen readers by ensuring the text is announced clearly."
    >
      <p>
        Applying punctuation and capitalizing the beginning of each sentence
        improves the user experience significantly. For many assistive
        technologies, periods help screen readers pause, making transitions
        between different types of content feel more natural.
      </p>
    </TextContainer>
    <TextContainer
      heading="Best Practices"
      subHeading="By following these best practices, you can help ensure that the content is more accessible for everyone."
    >
      <InfoTextList
        infoTextList={altTextList}
        title="Key Guidelines for Effective Alt Text"
      />
    </TextContainer>
  </>
);

export default AltText;
