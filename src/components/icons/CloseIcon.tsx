import { FC } from 'react';
import { IconDefaultProps } from '../../types/interfaces';

const CloseIcon: FC<IconDefaultProps> = ({ size, title, className }) => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
  >
    <title>{title}</title>
    <path
      d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CloseIcon;
