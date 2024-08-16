import { FC, ReactNode } from 'react';
import Details from './details/Details';

interface AdditionalInfoProps {
  children: ReactNode;
}

const AdditionalInfo: FC<AdditionalInfoProps> = ({ children }) => (
  <div className="additional-info">
    <Details summary="Additional Information">{children}</Details>
  </div>
);

export default AdditionalInfo;
