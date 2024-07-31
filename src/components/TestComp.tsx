import { FC } from 'react';

interface TestCompProps {
  name: string;
}

const TestComp: FC<TestCompProps> = ({ name }) => <div>Hello {name}</div>;

export default TestComp;
