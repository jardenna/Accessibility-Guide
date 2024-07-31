import { FC } from 'react';
import Figcaption from '../figure/Figcaption';
import ImageGridLeftContent from './ImageGridLeftContent';
import ImageGridRightContent from './ImageGridRightContent';

const StockPhoto: FC = () => (
  <>
    <ImageGridLeftContent src="/images/smoke.jpg" alt="">
      <Figcaption>Surprising Ways Smoking Affects Your Looks.</Figcaption>
    </ImageGridLeftContent>
    <ImageGridRightContent
      title="Stock photos"
      linkText="More about image as link"
      href="https://www.w3.org/WAI/tutorials/images/decorative/#example-2-decorative-image-as-part-of-a-text-link"
    >
      The stock photo of an old man smoking gives no information and has no
      function. It is strictly eye candy.
    </ImageGridRightContent>
  </>
);

export default StockPhoto;
