import { FC } from 'react';
import Figcaption from '../figure/Figcaption';
import ImageGridLeftContent from './ImageGridLeftContent';
import ImageGridRightContent from './ImageGridRightContent';

const InformationSupplementStock: FC = () => (
  <>
    <ImageGridLeftContent
      src="happy_child.jpg"
      mobileSrc="small/happy_child.jpg"
      alt="We offer books for readers of all ages."
    >
      <Figcaption>
        <h2>Our book shop</h2>
      </Figcaption>
    </ImageGridLeftContent>
    <ImageGridRightContent
      title="Photo to to convey a mood"
      linkText="More about conveying a mood"
      href="https://www.w3.org/WAI/tutorials/images/informative/#example-4-images-conveying-an-impression-or-emotion"
    >
      This photo is used to convey a mood, rather than to identify the
      individual depicted. As it is a stock image, the individuals should not be
      identified and the alt text should focus on describing the intended
      impression.
    </ImageGridRightContent>
  </>
);

export default InformationSupplementStock;
