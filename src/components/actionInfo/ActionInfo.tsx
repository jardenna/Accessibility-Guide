import { FC } from 'react';
import { BtnVariant, IconName } from '../../types/enums';
import Button from '../Button';
import Details from '../details/Details';
import Icon from '../Icon';
import './_action-info.scss';

interface ActionInfoProps {}

const ActionInfo: FC<ActionInfoProps> = () => (
  <div className="action-info">
    <Button variant={BtnVariant.Ghost} ariaLabel="Dictionary">
      <Icon name={IconName.Book} title="Dictionary" size="30" />
    </Button>
    <Details summary="Additional Information">aa</Details>
  </div>
);

export default ActionInfo;
