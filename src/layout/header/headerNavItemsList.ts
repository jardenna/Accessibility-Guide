import { MainPath } from '../../types/enums';
import { Title } from '../../types/lang';
import { NavListItem } from '../Nav';

const navItemsList: NavListItem[] = [
  {
    path: MainPath.Root,
    title: Title.Home,
  },
  {
    path: MainPath.Contact,
    title: Title.Contact,
  },
];

export default navItemsList;
