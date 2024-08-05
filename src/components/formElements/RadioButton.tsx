import { FC } from 'react';
import { ChangeInputType } from '../../types/types';
import './_form.scss';
import { RadioListItem } from './formLists/formList';

interface RadioButtonProps {
  initialChecked: string;
  name: string;
  onChange: (event: ChangeInputType) => void;
  radioButtonList: RadioListItem[];
  formInfoText?: string;
}

const RadioButton: FC<RadioButtonProps> = ({
  initialChecked,
  radioButtonList,
  onChange,
  name,
  formInfoText,
}) => (
  <div>
    {radioButtonList.map((radio) => (
      <div key={radio.id} className="input-container">
        <input
          type="radio"
          key={radio.id}
          id={radio.id}
          name={name}
          value={radio.id}
          checked={initialChecked === radio.id}
          onChange={onChange}
          className="visibility-hidden"
        />
        <label htmlFor={radio.id}>{radio.labelText}</label>
      </div>
    ))}

    {formInfoText && <section className="form-info">{formInfoText}</section>}
  </div>
);

export default RadioButton;
