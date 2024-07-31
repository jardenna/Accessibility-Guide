import { FC } from 'react';
import { Title } from '../types/lang';
import PageTitle from './PageTitle';

const Video: FC = () => (
  <>
    <PageTitle title={Title.Videos} />
    <video controls>
      <source src="/video.mp4" type="video/mp4" />
      <track
        default
        kind="captions"
        srcLang="en-us"
        src="/captions.vtt"
        label="English"
      />
      <track
        kind="captions"
        srcLang="da"
        src="/captions-dk.vtt"
        label="Dansk"
      />
      <img src="/images/butterfly.jpg" alt="butterfly." />
    </video>
  </>
);

export default Video;
