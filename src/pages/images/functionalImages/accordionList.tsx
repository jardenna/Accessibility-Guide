import { AccordionListItemsProps } from '../../../components/accordion/Accordion';
import AccordionItem from '../../../components/accordion/AccordionItem';
import { CommonText } from '../../../types/lang';

const accordionItemList: AccordionListItemsProps[] = [
  {
    id: 1,
    label: `${CommonText.LostRevenue} 15% - 30%`,
    content: <AccordionItem content={CommonText.LostRevenueContent} />,
    indicatorColor: '#475C6A',
    className: 'btn-focus',
  },
  {
    id: 2,

    label: `${CommonText.LegalCosts} 5% - 10%`,
    content: <AccordionItem content={CommonText.LegalCostsContent} />,
    indicatorColor: '#556C7B',
  },
  {
    id: 3,
    label: `${CommonText.ReputationalDamage} 10% - 20%`,
    content: <AccordionItem content={CommonText.ReputationalDamageContent} />,
    indicatorColor: '#617C8D',
  },
  {
    id: 4,
    label: `${CommonText.OperationalInefficiencies} 5% - 15%`,
    content: (
      <AccordionItem content={CommonText.OperationalInefficienciesContent} />
    ),
    indicatorColor: '#96AAB6',
  },
  {
    id: 5,
    label: 'Other Costs  20% - 25%',
    content: <AccordionItem content={CommonText.OtherCostsContent} />,
    indicatorColor: '#BCC9D1',
  },
];

export default accordionItemList;
