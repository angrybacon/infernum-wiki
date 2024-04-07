import { Link as MuiLink } from '@mui/material';
import NextLink from 'next/link';
import { type FunctionComponent, type PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  href: string;
};

export const Link: FunctionComponent<Props> = ({ children, href }) => {
  const extra = href.startsWith('http')
    ? { rel: 'noopener noreferrer', target: '_blank' }
    : {};
  return (
    <MuiLink component={NextLink} href={href} {...extra}>
      {children}
    </MuiLink>
  );
};
