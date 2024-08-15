import { FC } from 'react';
import Figcaption from '../figure/Figcaption';
import ImageGridLeftContent from './ImageGridLeftContent';
import ImageGridRightContent from './ImageGridRightContent';

const SufficientAdjacentText: FC = () => (
  <>
    <ImageGridLeftContent
      src="costa_rican_frog.jpg"
      mobileSrc="small/costa_rican_frog.jpg"
      alt=""
    >
      <Figcaption>
        <p>
          The Red-Eyed Tree Frog is a small arboreal frog native to the
          rainforests of Central America.
        </p>
      </Figcaption>
    </ImageGridLeftContent>
    <ImageGridRightContent
      title="Image with sufficient adjacent text"
      linkText=" More about decorative images"
      href="https://www.w3.org/WAI/tutorials/images/decorative/#example-3-image-with-adjacent-text-alternative"
    >
      The adjacent text already provides a sufficient description of this
      picture. So, repeating the information is redundant, and an empty alt
      value can be used for this image.
    </ImageGridRightContent>
  </>
);

export default SufficientAdjacentText;
