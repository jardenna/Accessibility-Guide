import { FC } from 'react';
import InfoTextList from '../../components/infoTextList/InfoTextList';
import PageTitle from '../../components/PageTitle';
import TextContainer from '../../components/textContainer/TextContainer';
import PageBanner from '../../layout/pageBanner/PageBanner';
import { Title } from '../../types/lang';
import pourPrincipleList from './pourPrincipleList';

const EvolutionSummary: FC = () => (
  <>
    <PageTitle title={Title.WcagEvolutionSummery} />
    <PageBanner title={Title.WcagEvolutionSummery}>
      By following the latest WCAG guidelines, your website will also meet the
      standards of earlier versions like 2.1 and 2.0. This means your site will
      stay in line with the best practices for accessibility as they evolve.
    </PageBanner>
    <TextContainer
      heading="May 1999: WCAG 1.0"
      subHeading="WCAG 1.0 marked the beginning of official web accessibility guidelines and represented a landmark step towards creating a more inclusive internet."
      strongText="Content"
      description="Comprised 14 guidelines and 64 checkpoints."
    >
      <p>
        The primary focus of WCAG 1.0 was on HTML, aiming to ensure that web
        content could be navigated and understood by all users, regardless of
        their physical or cognitive abilities. This initiative set the stage for
        future advancements in web accessibility, paving the way for more
        comprehensive and inclusive guidelines in subsequent versions.
      </p>
    </TextContainer>
    <TextContainer
      heading="December 2008: WCAG 2.0"
      subHeading="Nearly a decade later, WCAG 2.0 was released with a broader scope, significantly expanding upon the original guidelines."
      strongText="Content"
      description="4 principles, 12 guidelines, and 61 success criteria."
    >
      <p>
        This updated version moved beyond basic HTML to include a wider range of
        web technologies. One of the most important advancements in WCAG 2.0 was
        the introduction of four core principles that still form the foundation
        of today’s WCAG standards. The release of WCAG 2.0 marked a significant
        moment in the journey towards a more inclusive digital world.
      </p>
      <InfoTextList
        infoTextList={pourPrincipleList}
        title="Core Principles (POUR)"
      />
    </TextContainer>
    <TextContainer
      heading="June 2018: WCAG 2.1"
      subHeading="WCAG 2.1 is released, adding new criteria that addressed newer web trends, especially mobile browsing."
      strongText="Content"
      description="4 principles, expanded to 13 guidelines, and 78 success criteria."
    >
      <p>
        WCAG 2.1 introduces 17 new success criteria focused on mobile
        accessibility, cognitive accessibility, and low-vision accessibility.
      </p>
    </TextContainer>
    <TextContainer
      heading="October 2023: WCAG 2.2"
      subHeading="WCAG 2.2 (Current version), introduces new criteria designed to more effectively support users with cognitive or learning disabilities, low vision, and mobile devices."
      strongText="Content"
      description="Maintained 4 principles and 13 guidelines but expanded to 86 success criteria."
    >
      <p>
        The updated criteria include requirements such as avoiding fully or
        partially hidden elements, enhancing keyboard navigation, improving
        usability on touchscreens, and providing larger interactive click
        surfaces.
      </p>
    </TextContainer>
  </>
);

export default EvolutionSummary;
