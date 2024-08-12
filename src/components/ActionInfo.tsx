import { FC, ReactNode } from 'react';
import Details from './details/Details';

interface ActionInfoProps {
  children: ReactNode;
  summary: string;
}

const ActionInfo: FC<ActionInfoProps> = ({ children, summary }) => (
  <div className="action-info">
    <Details summary={summary}>{children}</Details>
  </div>
);

export default ActionInfo;
