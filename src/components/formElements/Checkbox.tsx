import { FC } from 'react';
import { ChangeInputType } from '../../types/types';
import { SelectedItems } from './formLists/formList';
import Input from './Input';

interface CheckboxProps {
  checkBoxList: SelectedItems[];
  onChange: (event: ChangeInputType) => void;
  values: string[];
}

const Checkbox: FC<CheckboxProps> = ({ checkBoxList, onChange, values }) => (
  <ul>
    {checkBoxList.map((checkbox) => (
      <div key={checkbox.label}>
        <Input
          type="checkbox"
          name="selectedItems"
          value={checkbox.label}
          onChange={onChange}
          checked={values.includes(checkbox.label)}
          id={checkbox.label}
          labelText={checkbox.label}
        />
      </div>
    ))}
  </ul>
);

export default Checkbox;
