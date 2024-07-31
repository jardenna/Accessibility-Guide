import { FC } from 'react';
import PageTitle from '../components/PageTitle';
import Quote from '../components/quote/Quote';
import TextContainer from '../components/textContainer/TextContainer';
import PageBanner from '../layout/pageBanner/PageBanner';
import { Title } from '../types/lang';

const AccessibilityMyths: FC = () => (
  <>
    <PageTitle title={Title.AccessibilityMyths} />
    <PageBanner title="Accessibility Myths">
      Accessibility is often misunderstood, leading to several myths that can
      hinder its proper implementation. Disproving these myths, can foster a
      more inclusive digital landscape, ensuring that everyone, regardless of
      ability, can access and enjoy online content.
    </PageBanner>

    <Quote citeName="Steve Krug" citeInfo="Author and user experience expert">
      The one argument for accessibility that doesn’t get made nearly often
      enough is how extraordinarily better it makes some people’s lives. How
      many opportunities do we have to dramatically improve people’s lives just
      by doing our job a little better?
    </Quote>

    <TextContainer
      heading="Disabled users don't use my website"
      subHeading="Disabilities are experienced by a diverse range of individuals, not just those who are blind. At some point, everyone will encounter periods where they face some form of disability, whether due to illness, injury, aging, or temporary conditions."
    >
      <p>Examples of these disabilities include</p>
      <ul className="list-square">
        <li>Situational or temporary disabilities</li>
        <li>
          Motion sensitivity, vestibular disorders, photosensitivity, or high
          cognitive load
        </li>
        <li>Aging-related limitations</li>
        <li>Cognitive limitations</li>
        <li>Limited or low vision</li>
      </ul>
    </TextContainer>

    <TextContainer
      heading="Accessibility is hard & too expensive"
      subHeading="Viewing accessibility as an investment in your product's future is crucial. Designing with accessibility in mind from the start helps teams avoid costly retrofits later. Doing the right thing doesn't always require a profitable reason."
    >
      <ul className="list-square">
        <li>
          Semantic HTML doesn't take any longer to write than non-semantic (bad)
          markup
        </li>
        <li>
          Planning accessibility from the start has essentially no impact on
          budget
        </li>
        <li>
          The return on investment in money and feedback will outperform the
          cost and time by a multitude
        </li>
        <li>
          Accessibility ensure compliance with the law, and avoids potential
          legal issues
        </li>
      </ul>
    </TextContainer>
    <TextContainer
      heading="Accessible doesn't provide any additional benefits"
      subHeading="Consider the high cost of legal action, as seen in the Netflix and Domino's cases. It also increases revenue, enhancing your reputation, reducing legal risks, and improving team competence, among others."
    >
      <ul className="list-square">
        <li>Improved mobile device experience</li>
        <li>Consistent experience for everybody</li>
        <li>
          Improved browsing for older browsers, operating systems, or computers
        </li>
        <li>Improved search engine optimization (SEO)</li>
      </ul>
    </TextContainer>
  </>
);

export default AccessibilityMyths;
