import { LeftNavPath } from '../types/enums';
import { Title } from '../types/lang';
import { NavListItem } from './Nav';

const leftNavItemsList: NavListItem[] = [
  {
    path: LeftNavPath.Images,
    title: Title.Images,
    subPath: [
      {
        path: LeftNavPath.DecorativeImages,
        title: Title.DecorativeImages,
      },
      {
        path: LeftNavPath.InformativeImages,
        title: Title.InformativeImages,
      },
      {
        path: LeftNavPath.ComplexImages,
        title: Title.ComplexImages,
      },
      {
        path: LeftNavPath.AltText,
        title: Title.AltText,
      },
    ],
  },

  {
    path: LeftNavPath.FormElements,
    title: Title.FormElements,
  },

  {
    path: LeftNavPath.Wcag,
    title: Title.Wcag,
    subPath: [
      {
        path: LeftNavPath.AccessibilityMyths,
        title: Title.AccessibilityMyths,
      },
      {
        path: LeftNavPath.AccessibilityGuidelines,
        title: Title.AccessibilityGuidelines,
      },
      {
        path: LeftNavPath.Aria,
        title: Title.Aria,
      },
      {
        path: LeftNavPath.WcagEvolutionSummery,
        title: Title.WcagEvolutionSummery,
      },
      {
        path: LeftNavPath.WcagFuture,
        title: Title.WcagFuture,
      },
    ],
  },
  {
    path: LeftNavPath.Legislation,
    title: Title.Legislation,
  },
];

export default leftNavItemsList;
