import { FC } from 'react';
import Figcaption from '../figure/Figcaption';
import ImageGridLeftContent from './ImageGridLeftContent';
import ImageGridRightContent from './ImageGridRightContent';

const ImagesOfText: FC = () => (
  <>
    <ImageGridLeftContent
      src="hedy_lamarr.jpg"
      mobileSrc="small/hedy_lamarr.jpg"
      alt="Hedy Lamarr: Hollywood actress behind the invention of WIFI."
    >
      <Figcaption>
        <p>Actor and co-inventor of Secret Communication System</p>
      </Figcaption>
    </ImageGridLeftContent>
    <ImageGridRightContent
      title="Images of text"
      linkText="More about image as link"
      href="https://www.w3.org/WAI/tutorials/images/decorative/#example-2-decorative-image-as-part-of-a-text-link"
    >
      Whenever possible, avoid using images of text. Visually impaired users
      relying on screen readers cannot access information presented this way,
      and users who need to zoom in will encounter pixelated images. If using
      text in images is necessary, ensure the alt text accurately transcribes
      the text within the image.
    </ImageGridRightContent>
  </>
);

export default ImagesOfText;
