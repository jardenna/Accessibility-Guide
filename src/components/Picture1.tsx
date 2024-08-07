import { FC } from 'react';
import variables from '../scss/variables.module.scss';

export interface PictureProps {
  altText: string;
  mainImageUrl: string;
  mainImageUrlDark: string;
  mobileImageUrl: string;
}

const Picture: FC<PictureProps> = ({
  altText,
  mobileImageUrl,
  mainImageUrl,
  mainImageUrlDark,
}) => {
  const { small } = variables;
  const smallWidth = `(max-width:${small})`;
  return (
    <picture>
      <source media={smallWidth} srcSet={`img/${mobileImageUrl}`} />
      <source
        srcSet={`img/${mainImageUrlDark}`}
        media="(prefers-color-scheme: dark)"
      />
      <img src={`img/${mainImageUrl}`} alt={altText} />
    </picture>
  );
};

export default Picture;
