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
        (mid-range), and AAA (highest). Each level builds upon the previous one,
        providing progressively higher standards for accessibility. Higher
        levels imply compliance with lower levels. For example, conforming to AA
        means meeting both A and AA criteria. Level A provides minimal
        accessibility and may not cover many situations broadly.
      </PageBanner>

      <Grid gridContent={gridContent} />
    </>
  );
};

export default AccessibilityGuidelines;
