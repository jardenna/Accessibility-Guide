import { FC } from 'react';
import { Language } from '../../types/language';
import './_grid.scss';
import GridCol from './GridCol';

interface GridProps {
  gridContent: Language[];
}

const Grid: FC<GridProps> = ({ gridContent }) => (
  <article
    className="grid"
    style={{ gridTemplateColumns: `repeat(${gridContent.length}, 1fr)` }}
  >
    {gridContent.map((grid) => (
      <GridCol
        key={grid.title}
        title={grid.title}
        subtitle={grid.subtitle}
        content={grid.content}
      />
    ))}
  </article>
);

export default Grid;
