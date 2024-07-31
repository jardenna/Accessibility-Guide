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
  {
    path: MainPath.Links,
    title: Title.Links,
  },
  {
    path: MainPath.Thanks,
    title: Title.Thanks,
  },
];

export default navItemsList;
