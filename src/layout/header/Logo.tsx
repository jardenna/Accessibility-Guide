import { FC } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/Icon';
import { IconName } from '../../types/enums';

const Logo: FC = () => (
  <Link to="/" className="logo">
    <Icon name={IconName.Logo} title="Page logo" />
  </Link>
);

export default Logo;
