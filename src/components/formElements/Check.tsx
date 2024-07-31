import { FC } from 'react';

interface CheckProps {
  checked: boolean;
  id: string;
  name: string;
  onChange: any;
}

const Check: FC<CheckProps> = ({ onChange, checked, id, name }) => (
  <div>
    <input
      type="checkbox"
      checked={checked}
      id={id}
      name={name}
      onChange={onChange}
    />
  </div>
);

export default Check;
