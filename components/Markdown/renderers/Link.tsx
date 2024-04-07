import { type Components } from 'react-markdown';

import { Link as Linkk } from '@/components/Link';

export const Link: Components['a'] = ({ children, href, node }) => {
  if (!href) {
    console.error('Missing target for link', node);
    return <>{children}</>;
  }
  return <Linkk href={href}>{children}</Linkk>;
};
