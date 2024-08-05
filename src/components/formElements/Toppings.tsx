import { FC, useState } from 'react';
import Checkbox from './Checkbox';

interface ToppingsProps {}

interface AllToppings {
  checked: boolean;
  name: string;
}

export const allToppings: AllToppings[] = [
  { name: 'Golden Corn', checked: true },
  { name: 'Paneer', checked: false },
  { name: 'Tomato', checked: false },
  { name: 'Mushroom', checked: false },
  { name: 'Onion', checked: false },
  { name: 'Black Olives', checked: false },
];
const Toppings: FC<ToppingsProps> = () => {
  const [toppings, setToppings] = useState(allToppings);

  const updateCheckStatus = (index: number) => {
    setToppings(
      toppings.map((topping, currentIndex: number) =>
        currentIndex === index
          ? { ...topping, checked: !topping.checked }
          : topping,
      ),
    );
  };
  return (
    <div>
      {toppings.map((topping, index: number) => (
        <Checkbox
          key={topping.name}
          isChecked={topping.checked}
          checkHandler={() => updateCheckStatus(index)}
          labelText={topping.name}
          index={index}
        />
      ))}
    </div>
  );
};

export default Toppings;
