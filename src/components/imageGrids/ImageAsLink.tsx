import { FC } from 'react';
import Figcaption from '../figure/Figcaption';
import ImageGridLeftContent from './ImageGridLeftContent';
import ImageGridRightContent from './ImageGridRightContent';

const ImageAsLink: FC = () => (
  <>
    <ImageGridLeftContent
      href="https://en.wikipedia.org/wiki/Zebra"
      src="zebra.jpg"
      mobileSrc="small/zebra.jpg"
      alt=""
    >
      <Figcaption>Read more about Zebras</Figcaption>
    </ImageGridLeftContent>
    <ImageGridRightContent
      title="Image as link"
      linkText="More about image as link"
      href="https://www.w3.org/WAI/tutorials/images/decorative/#example-2-decorative-image-as-part-of-a-text-link"
    >
      This image of a zebra is used to make the link easier to identify and to
      increase the clickable area but doesn’t add to the information already
      provided in the adjacent link text (of the same anchor). In this case, use
      a null (empty) alt value for the image.
    </ImageGridRightContent>
  </>
);

export default ImageAsLink;
