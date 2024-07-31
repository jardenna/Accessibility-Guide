import { createBrowserRouter } from 'react-router-dom';

import Headings from '../components/Headings';
import Video from '../components/Video';
import Layout from '../layout/Layout';
import AccessibilityGuidelines from '../pages/AccessibilityGuidelines';
import AccessibilityMyths from '../pages/AccessibilityMyths';
import Aria from '../pages/aria/Aria';
import Buttons from '../pages/Buttons';
import Contact from '../pages/commonPages/Contact';
import Home from '../pages/commonPages/Home';
import ErrorPage from '../pages/errorPage/ErrorPage';
import FormElements from '../pages/FormElements';
import AltText from '../pages/images/AltText';
import DecorativeImages from '../pages/images/DecorativeImages';
import FuncitionalImages from '../pages/images/functionalImages/FunctionalImages';
import Images from '../pages/images/Images';
import InformativeImages from '../pages/images/InformativeImages';
import Legislation from '../pages/Legislation';
import Wcag from '../pages/Wcag';
import EvolutionSummary from '../pages/wcagEvolution/EvolutionSummary';
import WcagFuture from '../pages/wcagEvolution/WcagFuture';
import { LeftNavPath, MainPath } from '../types/enums';

const routeConfig = createBrowserRouter([
  {
    path: MainPath.Root,
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: MainPath.Contact,
        element: <Contact />,
      },
      { path: LeftNavPath.Images, element: <Images /> },
      {
        path: LeftNavPath.DecorativeImages,
        element: <DecorativeImages />,
      },
      {
        path: LeftNavPath.InformativeImages,
        element: <InformativeImages />,
      },
      {
        path: LeftNavPath.FuncitionalImages,
        element: <FuncitionalImages />,
      },
      {
        path: LeftNavPath.AltText,
        element: <AltText />,
      },
      {
        path: LeftNavPath.Videos,
        element: <Video />,
      },
      {
        path: LeftNavPath.Buttons,
        element: <Buttons />,
      },
      {
        path: LeftNavPath.FormElements,
        element: <FormElements />,
      },
      {
        path: LeftNavPath.Navigation,
        element: <div>Nav</div>,
      },
      {
        path: LeftNavPath.Headings,
        element: <Headings />,
      },
      {
        path: LeftNavPath.Wcag,
        element: <Wcag />,
      },
      {
        path: LeftNavPath.AccessibilityMyths,
        element: <AccessibilityMyths />,
      },
      {
        path: LeftNavPath.AccessibilityGuidelines,
        element: <AccessibilityGuidelines />,
      },
      {
        path: LeftNavPath.Aria,
        element: <Aria />,
      },
      {
        path: LeftNavPath.WcagEvolutionSummery,
        element: <EvolutionSummary />,
      },
      {
        path: LeftNavPath.WcagFuture,
        element: <WcagFuture />,
      },
      {
        path: LeftNavPath.Legislation,
        element: <Legislation />,
      },
    ],
  },
]);

export default routeConfig;
