import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MainPath } from '../../types/enums';
import './_breadcrumbs.scss';
import { breadcrumbList, getNameFromPath } from './utils';

interface BreadCrumbsProps {
  className?: string;
}

const BreadCrumbs: FC<BreadCrumbsProps> = ({ className = '' }) => {
  const location = useLocation();

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="breadcrumbs">
        {location.pathname === MainPath.Root && (
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        )}
        {breadcrumbList(location.pathname).map((breadcrumb, index) => {
          const lastItem = index === breadcrumbList.length - 1;
          return !lastItem ? (
            <li key={breadcrumb}>
              <NavLink to={`/${breadcrumb}`}>{breadcrumb}</NavLink>
              <span className="chevron" aria-hidden="true" />
            </li>
          ) : (
            <li key={breadcrumb}>
              <span aria-current="location">{getNameFromPath(breadcrumb)}</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
