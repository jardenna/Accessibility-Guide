import { FC } from 'react';
import { IconDefaultProps } from '../../types/interfaces';

const SuccessIcon: FC<IconDefaultProps> = ({ size, title, className }) => (
  <svg
    role="img"
    viewBox="0 0 128 128"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeMiterlimit="1.5"
    width={size}
    height={size}
    className={className}
  >
    <title>{title}</title>
    <circle
      cx="9.12"
      cy="9.62"
      r="6.62"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.93"
      transform="translate(-18.303 -22.797) scale(8.988)"
    />
    <path
      d="m13.306 8-5.343 5.342L5.5 10.879"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.39"
      transform="matrix(6.99215 0 0 8.988 -2.079 -32.246)"
    />
  </svg>
);

export default SuccessIcon;
