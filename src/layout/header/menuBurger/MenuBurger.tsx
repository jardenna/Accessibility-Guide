import { FC } from 'react';
import Button from '../../../components/Button';
import { BtnVariant } from '../../../types/enums';
import './_menu-burger.scss';

interface MenuBurgerProps {
  onClick: () => void;
  isActive?: string;
}

const MenuBurger: FC<MenuBurgerProps> = ({ onClick, isActive = '' }) => (
  <Button
    ariaLabel="Menu"
    ariaExpanded={!!isActive}
    variant={BtnVariant.Ghost}
    className={`menu-burger ${isActive}`}
    onClick={onClick}
  >
    <span className="menu-burger-item" />
  </Button>
);

export default MenuBurger;
