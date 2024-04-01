'use client';

import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import { Roboto } from 'next/font/google';
import { useMemo, type FunctionComponent, type PropsWithChildren } from 'react';

const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export const Theme: FunctionComponent<PropsWithChildren> = ({ children }) => {
  // NOTE Known to cause flickering for SSR applications such as this one
  //      https://mui.com/material-ui/experimental-api/css-theme-variables/migration
  const withLightMode = useMediaQuery('(prefers-color-scheme: light)');
  const theme = useMemo(
    () =>
      createTheme({
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              html: { fontSize: 18 },
              'blockquote, p, pre': { margin: 0 },
            },
          },
        },
        palette: { mode: withLightMode ? 'light' : 'dark' },
        typography: { fontFamily: roboto.style.fontFamily },
      }),
    [withLightMode],
  );
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
