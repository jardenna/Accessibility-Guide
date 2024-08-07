import { FC } from 'react';

interface SourceProps {
  colorScheme: 'light' | 'dark';
  imgName: string;
  minWidth: number;
}

const Source: FC<SourceProps> = ({ minWidth, colorScheme, imgName }) => (
  <source
    media={`(min-width: ${minWidth}px) and (prefers-color-scheme: ${colorScheme})`}
    srcSet={`img/${imgName}`}
  />
);

export default Source;
