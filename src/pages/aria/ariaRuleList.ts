import { TextInfoList } from '../../types/interfaces';

const ariaRuleList: TextInfoList[] = [
  {
    strongText: 'First rule',
    description:
      'Use native HTML at all times, unless it’s absolutely impossible to make an element accessible otherwise',
  },
  {
    strongText: 'Second rule',
    description:
      'Do not change native HTML semantics unless you absolutely have to',
  },
  {
    strongText: 'Third rule',
    description: 'All interactive ARIA controls must be keyboard accessible',
  },
  {
    strongText: 'Fourth rule',
    description:
      'Do not use role=”presentation” or aria-hidden=”true” on a focusable element',
  },
  {
    strongText: 'Fifth rule',
    description: 'All interactive elements must have an accessible name',
  },
];

export default ariaRuleList;
