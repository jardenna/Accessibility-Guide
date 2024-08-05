import { FC } from 'react';
import { IconName } from '../../../types/enums';
import { ButtonEventType } from '../../../types/types';
import Button from '../../Button';
import Icon from '../../Icon';
import Input from '../Input';
import './_number-step.scss';

interface NumberStepProps {
  handleClick: (event: any, count: number) => void;
  id: string;
  labelText: string;
  name: string;
  onChange: (event?: any) => void;
  value: number;
  initCount?: number;
  max?: string;
  min?: string;
}

const NumberStep: FC<NumberStepProps> = ({
  onChange,
  handleClick,
  value,
  initCount = 1,
  min = '0',
  max,
  labelText,
  id,
  name,
}) => (
  <article className="number-step">
    <label htmlFor={id}>{labelText}</label>
    <div className="number-step-container">
      <Button
        id={id}
        ariaLabel={`Subtract ${initCount} `}
        disabled={value === Number(min)}
        onClick={(event?: ButtonEventType) =>
          handleClick(event, value !== Number(min) ? -initCount : 0)
        }
      >
        <Icon name={IconName.Subtract} title="Subtract" />
      </Button>
      <Input
        type="number"
        value={value}
        onChange={onChange}
        id={id}
        labelText={labelText}
        inputHasNoLabel
        name={name}
        min={min}
        max={max}
      />
      <Button
        onClick={(event?: ButtonEventType) =>
          handleClick(event, value !== Number(max) ? initCount : 0)
        }
        ariaLabel={`Add ${initCount} `}
        disabled={value === Number(max)}
        id={id}
      >
        <Icon name={IconName.Add} title="Add" />
      </Button>
    </div>
  </article>
);

export default NumberStep;
