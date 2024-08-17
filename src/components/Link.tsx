import { FC } from 'react';
import { IconName } from '../types/enums';
import Icon from './Icon';

export interface LinkProps {
  href: string;
  linkText: string;
  className?: string;
  target?: 'blank';
}

const Link: FC<LinkProps> = ({ href, linkText, target, className = '' }) =>
  !target ? (
    <a className={className} href={href}>
      {linkText}
    </a>
  ) : (
    <a
      className={`new-window-link ${className}`}
      href={href}
      target={`_${target}`}
      rel="noreferrer"
    >
      {linkText}
      <Icon
        name={IconName.OpenNewWindow}
        size="20"
        title="Opens in a new window"
      />
    </a>
  );

export default Link;
