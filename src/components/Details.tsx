import { FC, ReactNode } from 'react';

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
