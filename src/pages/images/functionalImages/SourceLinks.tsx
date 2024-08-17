import { FC } from 'react';
import Link from '../../../components/Link';

const SourceLinks: FC = () => (
  <div className="flex-baseline">
    Source:
    <Link
      linkText="W3C"
      href="https://www.w3.org/WAI/business-case/"
      target="blank"
    />
    <Link
      href="https://www.deptagency.com/insight/how-to-improve-e-commerce-accessibility-ensure-inclusivity-for-all-users/"
      linkText="DEPT®"
      target="blank"
    />
    <Link
      href="https://www.hrci.org/community/blogs-and-announcements/hr-leads-business-blog/hr-leads-business/2022/02/14/the-business-case-for-implementing-an-accessibility-strategy"
      linkText="Hrci Marketing"
      target="blank"
    />
    <Link
      href="https://www.hallaminternet.com/the-business-case-for-web-accessibility-in-2024/"
      linkText="Hallam"
      target="blank"
    />
  </div>
);

export default SourceLinks;
