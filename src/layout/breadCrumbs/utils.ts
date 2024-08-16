import { LeftNavPath } from '../../types/enums';
import { Title } from '../../types/lang';

const LeftNavPathDisplayNames = {
  [LeftNavPath.Aria]: Title.Aria,
  [LeftNavPath.AccessibilityMyths]: Title.AccessibilityMyths,
  [LeftNavPath.AltText]: Title.AltText,
  [LeftNavPath.Buttons]: Title.Buttons,
  [LeftNavPath.Contact]: Title.Contact,
  [LeftNavPath.DecorativeImages]: Title.DecorativeImages,
  [LeftNavPath.FormElements]: Title.FormElements,
  [LeftNavPath.FuncitionalImages]: Title.FuncitionalImages,
  [LeftNavPath.ComplexImages]: Title.ComplexImages,
  [LeftNavPath.Headings]: Title.Headings,
  [LeftNavPath.Home]: Title.Home,
  [LeftNavPath.Images]: Title.Images,
  [LeftNavPath.InformativeImages]: Title.InformativeImages,
  [LeftNavPath.Legislation]: Title.Legislation,
  [LeftNavPath.AccessibilityGuidelines]: Title.AccessibilityGuidelines,
  [LeftNavPath.Navigation]: Title.Navigation,
  [LeftNavPath.Videos]: Title.Videos,
  [LeftNavPath.Wcag]: Title.Wcag,
  [LeftNavPath.WcagEvolutionSummery]: Title.WcagEvolutionSummery,
  [LeftNavPath.WcagFuture]: Title.WcagFuture,
};

// Function to get the name from the path
export const getNameFromPath = (path: string) => {
  const enumKey = Object.values(LeftNavPath).find((value) => value === path);
  return enumKey ? LeftNavPathDisplayNames[enumKey] : undefined;
};

export const breadcrumbList = (pathName: string) =>
  pathName.split('/').filter((list) => list);
