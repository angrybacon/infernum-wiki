import { makeMenu } from '@korumite/kiwi/server';
import { Box, Container, CssBaseline, Toolbar } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { type Metadata, type Viewport } from 'next';
import { type PropsWithChildren } from 'react';

import { CHAPTERS } from '@/app/routes';
import { DrawerAndHeader } from '@/components/DrawerAndHeader';
import { Footer } from '@/components/Footer';
import { Theme } from '@/components/Theme';

export const dynamicParams = false;

export const metadata: Metadata = {
  description: 'The fan-made Solium Infernum Wiki',
  title: 'Solium Infernum Wiki',
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
};

const MENU = makeMenu(CHAPTERS.tree);

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Theme>
      <CssBaseline />
      <Box
        component="html"
        lang="en"
        sx={{ scrollPaddingTop: { xs: 48 + 16, md: 64 + 16 } }}
      >
        <Box component="body" sx={{ display: 'flex' }}>
          <AppRouterCacheProvider>
            <DrawerAndHeader menu={MENU} />
            <Container
              component="main"
              maxWidth="xl"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                '> *': { mb: { xs: 2, sm: 3 } },
              }}
            >
              <Toolbar role="presentation" />
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateAreas: '"banner banner" "markdown toc"',
                }}
              >
                {children}
              </Box>
              <Footer sx={{ mt: 'auto' }} />
            </Container>
          </AppRouterCacheProvider>
        </Box>
      </Box>
    </Theme>
  );
}
