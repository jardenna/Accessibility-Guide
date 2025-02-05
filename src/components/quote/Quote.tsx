import { FC, ReactNode } from 'react';
import { IconName } from '../../types/enums';
import Icon from '../Icon';
import './_quote.scss';

interface QuoteProps {
  children: ReactNode;
  citeInfo: string;
  citeName: string;
}

const Quote: FC<QuoteProps> = ({ children, citeName, citeInfo }) => (
  <div className="quote-container">
    <article className="quote-content">
      <span className="quote-icon">
        <Icon
          name={IconName.Cite}
          title="Quotation marks"
          size="50"
          ariaHidden
        />
      </span>
      <div>
        <blockquote className="block-quote">{children}</blockquote>
        <cite className="quote-cite">
          {citeName} ({citeInfo})
        </cite>
      </div>
    </article>
  </div>
);

export default Quote;
