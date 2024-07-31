import { FC } from 'react';
import { TextInfoList } from '../../types/interfaces';
import InfoText from '../InfoText';

interface InfoTextListProps {
  infoTextList: TextInfoList[];
  className?: string;
  title?: string;
}

const InfoTextList: FC<InfoTextListProps> = ({
  infoTextList,
  className = 'list-square',
  title,
}) => (
  <section>
    {title && <h2>{title}:</h2>}
    <ul className={className}>
      {infoTextList.map((listItem) => (
        <li key={listItem.strongText}>
          <InfoText
            description={listItem.description}
            strongText={listItem.strongText}
          />
        </li>
      ))}
    </ul>
  </section>
);

export default InfoTextList;
