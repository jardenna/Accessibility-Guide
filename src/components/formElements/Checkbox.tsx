import { FC } from 'react';

interface CheckboxProps {
  checkHandler: () => void;
  index: any;
  isChecked: boolean;
  labelText: string;
}

const Checkbox: FC<CheckboxProps> = ({
  isChecked,
  labelText,
  checkHandler,
  index,
}) => (
  <ul>
    <li key={index}>
      <label htmlFor={index}>{labelText}</label>
      <input
        type="checkbox"
        id={index}
        checked={isChecked}
        onChange={checkHandler}
      />
    </li>
  </ul>
);

export default Checkbox;
