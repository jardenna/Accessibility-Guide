import { FC } from 'react';
import InfoTextList from '../../components/infoTextList/InfoTextList';
import PageTitle from '../../components/PageTitle';
import PageBanner from '../../layout/pageBanner/PageBanner';
import { Title } from '../../types/lang';
import imagesKeyQuestionsList from './imagesKeyQuestionsList';

const Images: FC = () => (
  <>
    <PageTitle title={Title.Images} />
    <PageBanner title={Title.Images}>
      Images, maps, and charts should include equivalent alternative text (alt
      text) in the markup/code. The alt attribute aids visually impaired users
      with screen readers and helps users with disabled or missing images.
      Without alt text, screen readers read the image's file name.
    </PageBanner>

    <p>
      Before writing any code, it’s essential to consider the purpose and
      context of the image you plan to use. Determining an image's purpose
      allows you to code it accurately, ensuring it meets accessibility
      standards and serves its intended function effectively.
    </p>
    <InfoTextList
      infoTextList={imagesKeyQuestionsList}
      title="Key Questions to Consider"
    />

    <section>
      <h2>Practical Steps for Evaluation:</h2>
      <p>
        Temporarily hide the images and evaluate if the remaining content is
        still comprehensible.
      </p>
      <ul className="list-square">
        <li>
          <strong>Yes:</strong> The image is likely decorative
        </li>
        <li>
          <strong>No:</strong> The image provides important information and is
          needed for understanding
        </li>
      </ul>
    </section>
  </>
);

export default Images;
