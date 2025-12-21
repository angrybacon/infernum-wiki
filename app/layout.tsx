import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  Toolbar,
} from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { type Metadata, type Viewport } from 'next';
import { Roboto } from 'next/font/google';
import { type PropsWithChildren } from 'react';

import { CHAPTERS } from '@/app/constants';
import { theme } from '@/app/theme';
import { DrawerAndHeader } from '@/components/DrawerAndHeader';
import { Footer } from '@/components/Footer';

export const dynamicParams = false;

export const metadata: Metadata = {
  description: 'The fan-made Solium Infernum Wiki',
  title: 'Solium Infernum Wiki',
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
};

const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700'],
});

export default ({ children }: PropsWithChildren) => (
  <Box
    className={roboto.variable}
    component="html"
    lang="en"
    sx={{ scrollPaddingTop: { xs: 48 + 16, md: 64 + 16 } }}
  >
    <Box component="body" sx={{ display: 'flex' }}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <DrawerAndHeader menu={CHAPTERS.menu} />
          <Container
            component="main"
            maxWidth="xl"
            sx={{
              display: 'grid',
              gridTemplateAreas:
                '"offset offset" "banner banner" "markdown toc" "footer footer"',
              gridTemplateRows: 'auto auto 1fr auto',
              minHeight: '100vh',
              '> *': { mb: { xs: 2, sm: 3 } },
            }}
          >
            <Toolbar role="presentation" sx={{ gridArea: 'offset' }} />
            {children}
            <Footer sx={{ gridArea: 'footer', mt: 'auto', pt: 4 }} />
          </Container>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </Box>
  </Box>
);
