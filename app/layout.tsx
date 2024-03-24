import { Box, CssBaseline, Toolbar } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { type Metadata, type Viewport } from 'next';
import { PropsWithChildren } from 'react';

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
        <body>
          <AppRouterCacheProvider>
            <Box sx={{ display: 'flex' }}>
              <DrawerAndHeader />
              <Box component="main" sx={{ p: { xs: 2, sm: 3 } }}>
                <Toolbar role="presentation" />
                {children}
              </Box>
            </Box>
          </AppRouterCacheProvider>
        </body>
      </html>
    </Theme>
  );
}
