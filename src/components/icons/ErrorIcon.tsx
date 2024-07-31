import { FC } from 'react';
import { IconDefaultProps } from '../../types/interfaces';

const ErrorIcon: FC<IconDefaultProps> = ({ size, title, className }) => (
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
      d="M105 56.913c0-1.02-1.68-1.848-3.75-1.848h-7.5c-2.07 0-3.75.828-3.75 1.848v47.24c0 1.019 1.68 1.847 3.75 1.847h7.5c2.07 0 3.75-.828 3.75-1.847v-47.24Z"
      fill="currentColor"
      transform="matrix(.55853 -.50433 1.02383 1.13388 -74.037 21.52)"
    />
    <path
      d="M105 56.913c0-1.02-1.68-1.848-3.75-1.848h-7.5c-2.07 0-3.75.828-3.75 1.848v47.24c0 1.019 1.68 1.847 3.75 1.847h7.5c2.07 0 3.75-.828 3.75-1.847v-47.24Z"
      fill="currentColor"
      transform="matrix(-.54592 -.51796 1.0515 -1.10826 31.418 203.413)"
    />
  </svg>
);

export default ErrorIcon;
