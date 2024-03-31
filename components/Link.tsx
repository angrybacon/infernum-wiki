import { Link as MuiLink } from '@mui/material';
import NextLink from 'next/link';
import { type FunctionComponent, type PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  href: string;
};

export const Link: FunctionComponent<Props> = ({ children, href }) => (
  <MuiLink component={NextLink} href={href}>
    {children}
  </MuiLink>
);
