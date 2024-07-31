export interface RadioListItem {
  id: string;
  labelText: string;
}

export interface ToppingListItem {
  id: string;
  labelText: string;
  name: string;
  checked?: boolean;
}
export const radioButtonGenderList: RadioListItem[] = [
  {
    id: 'woman',
    labelText: 'Woman',
  },
  {
    id: 'man',
    labelText: 'Man',
  },
  {
    id: 'nonBinary',
    labelText: 'Non-Binary',
  },
  {
    id: 'agender',
    labelText: 'Agender / I don’t identify with any gender',
  },
  {
    id: 'notListed',
    labelText: 'Gender not listed',
  },
];

export const toppings: ToppingListItem[] = [
  {
    id: 'capsicum',
    name: 'capsicum',
    labelText: 'Capsicum',
  },
  {
    name: 'paneer',
    id: 'paneer',
    labelText: 'Paneer',
  },

  { name: 'tomato', id: 'tomato', labelText: 'Tomato' },
  { name: 'mushroom', id: 'mushroom', labelText: 'Mushroom' },
  { name: 'onion', id: 'onion', labelText: 'Onion' },
  { name: 'blackOlives', id: 'blackOlives', labelText: 'Black Olives' },
];
