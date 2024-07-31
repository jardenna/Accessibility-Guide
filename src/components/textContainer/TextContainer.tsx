import { FC, ReactNode } from 'react';
import InfoText from '../InfoText';
import './_text-container.scss';

interface TextContainerProps {
  children: ReactNode;
  heading: string;
  className?: string;
  description?: string;
  strongText?: string;
  subHeading?: string;
}

const TextContainer: FC<TextContainerProps> = ({
  heading,
  subHeading,
  children,
  strongText,
  description,
  className = '',
}) => (
  <section className={`text-container ${className}`}>
    <h2 className="text-title">{heading}</h2>
    <div className="text-content">
      <div>
        {subHeading && <p className="text-info">{subHeading}</p>}
        <div className="text">{children}</div>
      </div>
      {strongText && description && (
        <InfoText description={description} strongText={strongText} />
      )}
    </div>
  </section>
);

export default TextContainer;
