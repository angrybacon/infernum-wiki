import { Box, type SxProps } from '@mui/material';
import { type FunctionComponent } from 'react';

import { Link } from '@/components/Link';

export const Footer: FunctionComponent<{ sx: SxProps }> = ({ sx }) => (
  <Box
    component="footer"
    sx={[
      { color: 'text.secondary', textAlign: 'center', typography: 'caption' },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
  >
    &copy; 2024 Solium Infernum Wiki contributors. Read the notice about{' '}
    <Link href="/license">licenses and resources</Link>.
  </Box>
);
