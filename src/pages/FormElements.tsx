import { FC } from 'react';

import { radioButtonGenderList } from '../components/formElements/formLists/formList';
import Input from '../components/formElements/Input';
import { phoneMask } from '../components/formElements/masks';
import NumberStep from '../components/formElements/numberStep/NumberStep';
import RadioButton from '../components/formElements/RadioButton';
import validatePrice from '../components/formElements/validation/priceValidation';
import PageTitle from '../components/PageTitle';
import useFormValidation from '../hooks/useFormValidation';
import { Title } from '../types/lang';

interface AllToppings {
  checked: boolean;
  name: string;
}

const allToppings: AllToppings[] = [
  { name: 'Golden Corn', checked: true },
  { name: 'Paneer', checked: false },
  { name: 'Tomato', checked: false },
  { name: 'Mushroom', checked: false },
  { name: 'Onion', checked: false },
  { name: 'Black Olives', checked: false },
];

const FormElements: FC = () => {
  const initialFormValues = {
    price: '',
    phone: '',
    genderOption: 'woman',
    tickets: 1,
    allToppings,
  };

  const { onChange, onSubmit, values, handleClick, errors } = useFormValidation(
    {
      callback: (values) => {
        console.log('Form submitted with values', values);
      },
      initialState: initialFormValues,
      validate: validatePrice,
    },
  );

  return (
    <>
      <PageTitle title={Title.FormElements} />

      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>Legend</legend>

          <NumberStep
            onChange={onChange}
            handleClick={handleClick}
            value={values.tickets}
            min="1"
            labelText="Buy Tickets"
            id="tickets"
            name="tickets"
          />

          <RadioButton
            radioButtonList={radioButtonGenderList}
            name="genderOption"
            initialChecked={values.genderOption}
            onChange={onChange}
            formInfoText="Understanding the gender distribution of our users, helps us to promote diversity and ensure that no group is left out. All data collected is used in accordance with our Privacy Policy."
          />

          <Input
            value={values.price}
            onChange={onChange}
            id="price"
            name="price"
            labelText="Price"
            required
            errorText={errors.price}
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
        <button type="submit">hhh</button>
      </form>

      {/* <TriggerDialog
        dialogHeaderText="Header"
        openDialogBtnLabel="Open"
        openDialogBtnVariant={BtnVariant.Neutral}
        showCloseIcon
        primaryActionBtn={{
          label: 'Submit',
          // eslint-disable-next-line no-console
          onClick: () => console.log(412),
          buttonType: 'submit',
        }}
      >
        Missed market opportunities and estimated loss of potential revenue by
        not catering to the market of people with disabilities.
      </TriggerDialog>

      <TriggerToast
        onCallback={() => console.log(12)}
        type={ToastType.Success}
        message="Toast message"
      >
        Submit
      </TriggerToast> */}
    </>
  );
};

export default FormElements;
