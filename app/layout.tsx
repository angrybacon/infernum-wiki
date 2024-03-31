import { Box, Container, CssBaseline, Toolbar } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { type Metadata, type Viewport } from 'next';
import { type PropsWithChildren } from 'react';

import { DrawerAndHeader } from '@/components/DrawerAndHeader';
import { Theme } from '@/components/Theme';

export const metadata: Metadata = {
  description: 'The fan-made Solium Infernum Wiki',
  title: 'Solium Infernum Wiki',
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Theme>
      <CssBaseline />
      <html lang="en">
        <Box component="body" sx={{ display: 'flex' }}>
          <AppRouterCacheProvider>
            <DrawerAndHeader />
            <Box component="main" sx={{ mx: 'auto' }}>
              <Toolbar role="presentation" />
              <Container maxWidth="md">{children}</Container>
            </Box>
          </AppRouterCacheProvider>
        </Box>
      </html>
    </Theme>
  );
}
