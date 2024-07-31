import { FC } from 'react';
import PageTitle from '../components/PageTitle';
import PageBanner from '../layout/pageBanner/PageBanner';
import { Title } from '../types/lang';

const Legislation: FC = () => (
  <>
    <PageTitle title={Title.Legislation} />
    <PageBanner title="Legislation: Ensuring Digital Inclusivity for All">
      The EU Web Accessibility Directive 2016, officially known as Directive
      (EU) 2016/2102, is a legislative measure aimed at ensuring that websites
      and mobile applications of public sector bodies are accessible to all
      users. This directive is a significant step towards digital inclusivity,
      ensuring that everyone can access public services online.
    </PageBanner>
    <section>
      <h2>Standards and Requirements </h2>
      <p>
        Public sector bodies must ensure that their websites and mobile apps
        meet the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA
        level. To stay current with legal requirements, the World Wide Web
        Consortium (W3C) recommends using the newest WCAG standards.
      </p>
      <h2>Expansion to Private Sector Services June 28, 2025</h2>
      From June 28, 2025, products and services sold in the EU must comply with
      the EU’s accessibility directive. This expansion includes:
      <ul className="list-square">
        <li>E-commerce services</li>
        <li>Banking services</li>
        <li>Travel information via websites, apps, electronic tickets</li>
        <li>Streaming services</li>
      </ul>
      <p>
        By adhering to these standards, both public and private sector bodies
        will contribute to a more inclusive digital environment.
      </p>
    </section>
  </>
);

export default Legislation;
