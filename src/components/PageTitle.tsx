import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Title } from '../types/lang';

interface PageTitleProps {
  title: Title;
}

const PageTitle: FC<PageTitleProps> = ({ title }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = `A11y | ${title}`;
  }, [location, title]);

  return null;
};

export default PageTitle;
