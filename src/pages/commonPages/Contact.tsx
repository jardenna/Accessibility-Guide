import { FC } from 'react';
import Icon from '../../components/Icon';
import PageTitle from '../../components/PageTitle';
import { IconName } from '../../types/enums';
import { Title } from '../../types/lang';

const Contact: FC = () => (
  <article>
    <PageTitle title={Title.Contact} />
    <h1>Contact</h1>
    <div className="test">
      <Icon name={IconName.Mail} title="Mail" />
    </div>
    <div className="test">
      <Icon name={IconName.Phone} title="Phone" />
    </div>

    <ul>
      <li>nu</li>
      <li>il1I</li>
      <li>0O</li>
      <li>qp</li>
      <li>db</li>
      <li>a8</li>
      <li>a6</li>
      <li>6g</li>
      <li>rn, m</li>
    </ul>
  </article>
);

export default Contact;
