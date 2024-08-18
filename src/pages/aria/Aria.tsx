import { FC } from 'react';
import AdditionalInfo from '../../components/additionalInfo/AdditionalInfo';
import { ariaInfoList } from '../../components/additionalInfo/additionalInfoLists';
import InfoTextList from '../../components/infoTextList/InfoTextList';
import PageTitle from '../../components/PageTitle';
import Quote from '../../components/quote/Quote';
import TextContainer from '../../components/textContainer/TextContainer';
import PageBanner from '../../layout/pageBanner/PageBanner';
import { Title } from '../../types/lang';
import ariaRuleList from './ariaRuleList';

const Aria: FC = () => (
  <>
    <PageTitle title={Title.Aria} />
    <AdditionalInfo infoList={ariaInfoList} />
    <PageBanner title="ARIA to the Rescue">
      Accessible Rich Internet Applications (ARIA) is a set of HTML attributes
      designed to enhance the accessibility of web content and applications.
      Developed by the World Wide Web Consortium (W3C), ARIA aims to improve
      accessibility for dynamic content and advanced user interfaces. When
      native HTML falls short in addressing accessibility issues, ARIA
      attributes can bridge those gaps.
    </PageBanner>
    <Quote
      citeName="Aditya Bikkani"
      citeInfo="Contributor to the W3C Cognitive Accessibility Community Group"
    >
      My key takeaway to prevent “excessive” ARIA use is by remembering one
      thing: You don’t always need to provide instructions to screen readers
      only. If the instructions are important enough, provide them to every
      user. That’s what makes the best user experience.
    </Quote>
    <TextContainer
      heading="5 rules of ARIA"
      subHeading="Some of ARIA is like a cloak; it covers up, or overrides, the original
      semantics or content. On the other hand, some uses of ARIA
      are more like suspenders or belts; they add meaning that provides
      essential support to the original content. (WC3)"
    >
      <InfoTextList infoTextList={ariaRuleList} />
    </TextContainer>

    <TextContainer
      heading="Key Points of ARIA"
      subHeading="Incorrect ARIA misrepresents visual experiences, with potentially devastating effects on their corresponding non-visual experiences. (WC3)"
    >
      <p>
        <strong>ARIA is all about feedback</strong>
      </p>
      <ul className="list-square">
        <li>What happens</li>
        <li>What does this mean</li>
        <li>How can I interact</li>
      </ul>
      <p>
        <strong>
          Since ARIA attributes always take precedence, only use ARIA when
          native HTML:
        </strong>
      </p>
      <ul className="list-square">
        <li>Don’t provide the required functionality</li>
        <li>Can’t be styled</li>
        <li>Aren’t supported by all browsers</li>
      </ul>
    </TextContainer>

    <TextContainer
      heading="Native HTML vs ARIA"
      subHeading="The Benefits of Using Native HTML"
    >
      <p>
        While ARIA roles and attributes can enhance accessibility, they should
        only be used to fill gaps where native HTML isn’t sufficient. Native
        HTML elements provide built-in accessibility features, better browser
        support, and simplify both development and user interaction.
      </p>
      <p>
        Overusing ARIA can lead to complications. Native HTML elements often
        have the necessary semantics and roles built-in, reducing the need for
        additional ARIA markup.
      </p>
    </TextContainer>
  </>
);

export default Aria;
