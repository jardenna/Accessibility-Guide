import { FC } from 'react';
import Source from './Source';

// interface ImageSrc {
//   colorScheme: 'light' | 'dark';
//   imgName: string;
// }
export interface PictureProps {
  altText: string;
  darkImages: any;
  lightImages: any;
}

// const lightImages = {
//   imgBig: 'horizontal_inclusive_activity_cards_big.jpg',
//   imgMedium: 'horizontal_inclusive_activity_cards.jpg',
//   imgSmall: 'mobile/vertical_inclusive_activity_cards.jpg',
// };

// const darkImages = {
//   imgBig: 'horizontal_inclusive_activity_cards_big.jpg',
//   imgMedium: 'horizontal_inclusive_activity_cards.jpg',
//   imgSmall: 'mobile/vertical_inclusive_activity_cards.jpg',
// };

const Picture: FC<PictureProps> = ({ altText, lightImages, darkImages }) => (
  <picture>
    <Source
      colorScheme="light"
      minWidth={900}
      imgName={`light/${lightImages.imgBig}`}
    />
    <Source
      colorScheme="dark"
      minWidth={900}
      imgName={`dark/${darkImages.imgBig}`}
    />
    <Source
      colorScheme="light"
      minWidth={600}
      imgName={`light/${lightImages.imgMedium}`}
    />
    <Source
      colorScheme="dark"
      minWidth={600}
      imgName={`dark/${darkImages.imgMedium}`}
    />

    <source
      media="(prefers-color-scheme: dark)"
      srcSet={`img/dark/${darkImages.imgSmall}`}
    />

    <img src={`img/light/${lightImages.imgSmall}`} alt={altText} />
  </picture>
);

export default Picture;
