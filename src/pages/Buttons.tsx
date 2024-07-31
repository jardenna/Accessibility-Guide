import { ChangeEvent, FC, useState } from 'react';
import useFormValidation from '../hooks/useFormValidation';

const Buttons: FC = () => {
  const initValues = [
    { label: 'Option 1' },
    { label: 'Option 2' },
    { label: 'Option 3' },
    { label: 'Option 4' },
    { label: 'Option 5' },
  ];
  const [selectedItem, setSelectedItem] = useState<any>([]);

  const { onChange, values } = useFormValidation({
    callback: (values) => {
      console.log('Form submitted with values', values);
    },
    initialState: initValues,
  });
  console.log(values);

  const handleCheckboxChange = (event: ChangeEvent<any>) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedItem([...selectedItem, value]);
    } else {
      setSelectedItem(selectedItem.filter((a: any) => a !== value));
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(selectedItem);
  };

  return (
    <article>
      <h1>Buttons</h1>

      <form onSubmit={onSubmit}>
        {initValues.map((checkbox: any) => (
          <div key={checkbox.label}>
            <input
              type="checkbox"
              value={checkbox.label}
              onChange={handleCheckboxChange}
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
