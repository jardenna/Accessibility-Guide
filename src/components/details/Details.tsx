import { FC, ReactNode } from 'react';

import './_details.scss';

interface DetailsProps {
  children: ReactNode;
  summary: string;
}
const Details: FC<DetailsProps> = ({ summary, children }) => (
  <details>
    <summary>{summary}</summary>
    {children}
  </details>
);
export default Details;
