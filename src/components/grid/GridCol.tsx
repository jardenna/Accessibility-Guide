import { FC } from 'react';
import { Language } from '../../types/language';

const GridCol: FC<Language> = ({ title, subtitle, content }) => (
  <section className="col">
    <header className="col-header" aria-label="Grid">
      <h2 className="col-title">{title}</h2>
      <p className="col-sub-title">{subtitle}</p>
    </header>
    <div className="col-content">{content}</div>
  </section>
);

export default GridCol;
