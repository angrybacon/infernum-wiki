import { Box, Container, CssBaseline, Toolbar } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { type Metadata, type Viewport } from 'next';
import { type PropsWithChildren } from 'react';

import { DrawerAndHeader } from '@/components/DrawerAndHeader';
import { Footer } from '@/components/Footer';
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
            <Container
              component="main"
              maxWidth="md"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: 2, sm: 4 },
                height: '100vh',
                mx: 'auto',
              }}
            >
              <Toolbar role="presentation" />
              {children}
              <Footer sx={{ mt: 'auto', pb: 2 }} />
            </Container>
          </AppRouterCacheProvider>
        </Box>
      </html>
    </Theme>
  );
}
