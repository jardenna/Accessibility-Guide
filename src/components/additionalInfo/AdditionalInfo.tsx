import { FC } from 'react';

import Details from '../details/Details';
import Link, { LinkProps } from '../Link';
import './_additional-info.scss';

interface AdditionalInfoProps {
  infoList: LinkProps[];
}

const AdditionalInfo: FC<AdditionalInfoProps> = ({ infoList }) => (
  <ul className="additional-info-container">
    <Details summary="Additional Information">
      <ul className="additional-info-container">
        {infoList.map((infoListItem) => (
          <li className="additional-info-item" key={infoListItem.linkText}>
            <Link
              href={infoListItem.href}
              linkText={infoListItem.linkText}
              target="blank"
            />
          </li>
        ))}
      </ul>
    </Details>
  </ul>
);

export default AdditionalInfo;
