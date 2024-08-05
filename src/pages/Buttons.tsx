import { FC } from 'react';
import useFormValidation, { FormValues } from '../hooks/useFormValidation';

const Buttons: FC = () => {
  const initialState: FormValues = {
    selectedItems: [],
  };

  const callback = (values: FormValues) => {
    console.log(values);
  };

  const { values, onChange, onSubmit } = useFormValidation({
    initialState,
    callback,
  });

  const initValues = [
    { label: 'Option 1' },
    { label: 'Option 2' },
    { label: 'Option 3' },
    { label: 'Option 4' },
    { label: 'Option 5' },
  ];

  return (
    <article>
      <h1>Buttons</h1>

      <form onSubmit={onSubmit}>
        {initValues.map((checkbox: any) => (
          <div key={checkbox.label}>
            <input
              type="checkbox"
              name="selectedItems"
              value={checkbox.label}
              onChange={onChange}
              checked={(values.selectedItems as string[]).includes(
                checkbox.label,
              )}
              id={checkbox.label}
            />
            <label htmlFor={checkbox.label}>{checkbox.label}</label>
          </div>
        ))}

        <button type="submit">klik</button>
      </form>
    </article>
  );
};

export default Buttons;
