import { FC } from 'react';
import { IconDefaultProps } from '../../types/interfaces';

const InfoIcon: FC<IconDefaultProps> = ({ size, title, className }) => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
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
      d="M60 62.5a2.5 2.5 0 0 0-2.5-2.5h-5a2.5 2.5 0 0 0-2.5 2.5v35a2.5 2.5 0 0 0 2.5 2.5h5a2.5 2.5 0 0 0 2.5-2.5v-35Z"
      fill="currentColor"
      transform="translate(8.667 -10.833)"
    />
    <path
      d="M60 72.8c0-7.065-1.117-12.8-2.492-12.8h-5.016C51.117 60 50 65.735 50 72.8v14.4c0 7.065 1.117 12.8 2.492 12.8h5.016C58.883 100 60 94.265 60 87.2V72.8Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2.14"
      transform="matrix(1 0 0 .1947 8.667 24.485)"
    />
  </svg>
);

export default InfoIcon;
