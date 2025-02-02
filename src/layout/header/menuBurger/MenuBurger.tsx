import { FC } from 'react';
import Button from '../../../components/Button';
import { BtnVariant } from '../../../types/enums';
import { HeaderProps } from '../Header';
import './_menu-burger.scss';

type MenuBurgerType = Omit<HeaderProps, 'isTabletSize'>;

const MenuBurger: FC<MenuBurgerType> = ({ onClick, isLeftMenuHidden }) => (
  <Button
    ariaLabel="Menu"
    ariaExpanded={!isLeftMenuHidden}
    variant={BtnVariant.Ghost}
    className="menu-burger"
    onClick={onClick}
  >
    <span className="menu-burger-item" />
  </Button>
);

export default MenuBurger;
