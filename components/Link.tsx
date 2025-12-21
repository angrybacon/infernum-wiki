import { Link as MuiLink, type SxProps } from '@mui/material';
import NextLink from 'next/link';
import { type PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  href: string;
  sx?: SxProps;
};

export const Link = ({ children, href, sx }: Props) => {
  const extra = href.startsWith('http')
    ? { rel: 'noopener noreferrer', target: '_blank' }
    : {};
  return (
    <MuiLink component={NextLink} href={href} sx={sx} {...extra}>
      {children}
    </MuiLink>
  );
};
