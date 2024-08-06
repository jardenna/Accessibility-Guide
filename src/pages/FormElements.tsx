import { FC } from 'react';
import Checkbox from '../components/formElements/checkbox/Checkbox';
import Form from '../components/formElements/form/Form';
import {
  radioButtonGenderList,
  selectedItems,
} from '../components/formElements/formLists/formList';
import Input from '../components/formElements/Input';
import { phoneMask } from '../components/formElements/masks';
import NumberStep from '../components/formElements/numberStep/NumberStep';
import RadioButton from '../components/formElements/radioButton/RadioButton';
import PageTitle from '../components/PageTitle';
import useFormValidation from '../hooks/useFormValidation';
import { Title } from '../types/lang';

const FormElements: FC = () => {
  const initialFormValues = {
    price: '',
    phone: '',
    fullName: '',
    age: '',
    genderOption: 'woman',
    tickets: 1,
    selectedItems: ['Option 1', 'Option 3'],
  };

  const { onChange, onSubmit, values, handleClick } = useFormValidation({
    callback: (values) => {
      console.log('Form submitted with values', values);
    },
    initialState: initialFormValues,
  });

  return (
    <>
      <PageTitle title={Title.FormElements} />

      <Form onSubmit={onSubmit} labelText="Submit form">
        <fieldset>
          <legend>Personal information</legend>
          <Input
            value={values.fullName}
            onChange={onChange}
            id="fullName"
            name="fullName"
            labelText="Full name"
            required
          />
          <Input
            value={values.age}
            onChange={onChange}
            id="age"
            name="age"
            labelText="Age"
            type="number"
          />
        </fieldset>
        <fieldset>
          <legend>Gender identity</legend>
          <RadioButton
            radioButtonList={radioButtonGenderList}
            name="genderOption"
            initialChecked={values.genderOption}
            onChange={onChange}
            formInfoText="Understanding the gender distribution of our users, helps us to promote diversity and ensure that no group is left out. All data collected is used in accordance with our Privacy Policy."
          />
        </fieldset>

        <Checkbox
          onChange={onChange}
          values={values.selectedItems}
          checkBoxList={selectedItems}
        />

        <NumberStep
          onChange={onChange}
          handleClick={handleClick}
          value={values.tickets}
          min="1"
          labelText="Buy Tickets"
          id="tickets"
          name="tickets"
        />

        <fieldset>
          <legend>Legend</legend>
          <Input
            value={values.price}
            onChange={onChange}
            id="price"
            name="price"
            labelText="Price"
            required
          />
          <Input
            value={values.phone}
            onChange={(event) => onChange(phoneMask(event))}
            labelText="Phone"
            id="phone"
            name="phone"
            placeholder="(--)--- ---"
          />
        </fieldset>
      </Form>
    </>
  );
};

export default FormElements;
