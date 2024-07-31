import { FC } from 'react';
import Grid from '../components/grid/Grid';
import PageTitle from '../components/PageTitle';
import lang from '../language.json';
import PageBanner from '../layout/pageBanner/PageBanner';
import { Title } from '../types/lang';
import { Language } from '../types/language';

const AccessibilityGuidelines: FC = () => {
  const gridContent: Language[] = lang.accessibilityGuidelines;
  return (
    <>
      <PageTitle title={Title.AccessibilityGuidelines} />
      <PageBanner title="Accessibility Guidelines">
        WCAG guidelines have three conformance levels: A (lowest), AA
        (mid-range), and AAA (highest). Higher levels imply compliance with
        lower levels. For example, conforming to AA means meeting both A and AA
        criteria. Level A provides minimal accessibility and may not cover many
        situations broadly.
      </PageBanner>
      <p>
        WCAG define three levels. Each level builds upon the previous one,
        providing progressively higher standards for accessibility.
      </p>
      <Grid gridContent={gridContent} />
      <section className="border-info-content">
        <h2 className="border-content-heading">
          Choosing the Right Accessibility Level
        </h2>
        <p className="border-sub-title">
          Since the ultimate goal is to provide the best experience for all
          users, follow Level AAA criteria whenever possible.
        </p>
        <p>
          Most websites don't aim for Level AAA due to its stringent criteria.
          Consider Level AAA recommendations as optional enhancements to further
          improve accessibility. Strive for this level if your audience includes
          many users with disabilities, though it might not be feasible for all
          content.
        </p>
      </section>
    </>
  );
};

export default AccessibilityGuidelines;
