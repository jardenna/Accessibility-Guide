import { FC, ReactNode } from 'react';
import { BtnVariant, IconName } from '../../types/enums';
import Button from '../Button';
import Details from '../details/Details';
import Icon from '../Icon';
import './_action-info.scss';

interface ActionInfoProps {
  children: ReactNode;
  summary: string;
}

const ActionInfo: FC<ActionInfoProps> = ({ children, summary }) => (
  <div className="action-info">
    <Button variant={BtnVariant.Ghost} ariaLabel="Dictionary">
      <Icon name={IconName.Book} title="Dictionary" size="30" />
    </Button>
    <Details summary={summary}>{children}</Details>
  </div>
);

export default ActionInfo;
