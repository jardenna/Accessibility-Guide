import { FC } from 'react';
import { ChangeInputType } from '../../../types/types';
import { SelectedItems } from '../formLists/formList';
import Input from '../Input';
import './_checkbox.scss';

interface CheckboxProps {
  checkBoxList: SelectedItems[];
  legendText: string;
  onChange: (event: ChangeInputType) => void;
  values: string[];
}

const Checkbox: FC<CheckboxProps> = ({
  checkBoxList,
  onChange,
  values,
  legendText,
}) => (
  <fieldset>
    <legend>{legendText}:</legend>
    {checkBoxList.map((checkbox) => (
      <Input
        key={checkbox.label}
        type="checkbox"
        name="selectedItems"
        value={checkbox.label}
        onChange={onChange}
        checked={values.includes(checkbox.label)}
        id={checkbox.label}
        labelText={checkbox.label}
        className="visibility-hidden"
      />
    ))}
  </fieldset>
);

export default Checkbox;
