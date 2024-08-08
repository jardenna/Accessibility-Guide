import { FC } from 'react';
import { IconDefaultProps } from '../../types/interfaces';

const AddInfoIcon: FC<IconDefaultProps> = ({
  size,
  height,
  title,
  className,
}) => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={height}
    className={className}
    viewBox="0 0 424 248"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
  >
    <title>{title}</title>
    <path
      fill="none"
      d="M682.39 114.273c0-7.254-9.95-13.143-17.204-13.143h-94.715c-7.253 0-16.798 5.889-16.798 13.143 0 7.253 9.545 13.142 16.798 13.142h94.715c7.254 0 17.204-5.889 17.204-13.142Z"
      transform="matrix(3.2873 0 0 6.04379 -1820.09 -611.208)"
    />
    <path d="M423.131 79.434C423.131 35.592 390.423 0 366.577 0H55.22C31.377 0 0 35.592 0 79.434c0 43.835 31.377 79.427 55.22 79.427h311.357c23.846 0 56.554-35.592 56.554-79.427Zm-26.558 0c0 18.548-8.218 35.042-18.494 45.243-3.958 3.923-7.617 7.628-11.502 7.628H55.22c-3.721 0-7.088-3.614-10.78-7.38-10.055-10.244-17.879-26.852-17.879-45.491 0-18.645 7.824-35.254 17.88-45.498 3.691-3.765 7.058-7.373 10.779-7.373h311.357c3.885 0 7.544 3.698 11.502 7.627 10.276 10.196 18.494 26.69 18.494 45.244Z" />
    <path
      fill="#f8f8f8"
      d="M203.141 233.182h115.331v49.62H203.141z"
      transform="matrix(.52413 0 0 .61709 34.398 -14.652)"
    />
    <path d="M222.779 213.632h21.903l-33.696 33.697-33.697-33.697h21.903V132.35h23.587v81.282Z" />
    <circle
      fill="currentColor"
      cx="88.959"
      cy="391.91"
      r="26.22"
      transform="translate(122.608 -312.478)"
    />
    <circle
      fill="currentColor"
      cx="88.959"
      cy="391.91"
      r="26.22"
      transform="translate(232.608 -312.478)"
    />
    <circle
      fill="currentColor"
      cx="88.959"
      cy="391.91"
      r="26.22"
      transform="translate(12.608 -312.478)"
    />
  </svg>
);

export default AddInfoIcon;
