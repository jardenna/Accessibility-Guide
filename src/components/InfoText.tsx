import { FC } from 'react';
import { TextInfoList } from '../types/interfaces';

const InfoText: FC<TextInfoList> = ({ description, strongText }) => (
  <>
    <strong>{strongText}: </strong>
    {description}
  </>
);

export default InfoText;
