import { FC } from 'react';
import PageTitle from '../../../components/PageTitle';
import PageBanner from '../../../layout/pageBanner/PageBanner';
import { Title } from '../../../types/lang';

const FunctionalImages: FC = () => (
  <>
    <PageTitle title={Title.FuncitionalImages} />
    <PageBanner title={Title.FuncitionalImages}>
      Functional images refer to images that serve a specific purpose or
      function beyond just being decorative. These images convey information,
      indicate actions, or provide essential content that users need to
      understand or interact with the website effectively.
    </PageBanner>

    <article>hello</article>
  </>
);

export default FunctionalImages;
