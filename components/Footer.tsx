import { Box, type SxProps } from '@mui/material';

import { Link } from '@/components/Link';

type Props = {
  sx: SxProps;
};

export const Footer = ({ sx }: Props) => (
  <Box
    component="footer"
    sx={[
      { color: 'text.secondary', textAlign: 'center', typography: 'caption' },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
  >
    &copy; 2025 Solium Infernum Wiki contributors. Read the notice about{' '}
    <Link href="/license">licenses and resources</Link>.
  </Box>
);
