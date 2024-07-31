import { FC } from 'react';
import './_progress-bar.scss';

interface ProgressBarProps {
  ariaValueText: string;
}

const ProgressBar: FC<ProgressBarProps> = ({ ariaValueText }) => (
  <div className="progress-bar-container">
    <div
      className="progress-bar"
      role="progressbar"
      aria-label="progress bar"
      aria-valuetext={ariaValueText}
    />
  </div>
);

export default ProgressBar;
