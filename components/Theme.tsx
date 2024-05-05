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
              'blockquote, ol, p, pre, ul': { margin: 0 },
            },
          },
          MuiTypography: {
            styleOverrides: {
              gutterBottom: ({ theme }) => ({
                // NOTE Assume the wrapping parent already handle spacing
                //      between each child.
                marginBottom: theme.spacing(1),
                marginTop: theme.spacing(2),
              }),
            },
          },
        },
        palette: { mode: withLightMode ? 'light' : 'dark' },
        typography: {
          fontFamily: roboto.style.fontFamily,
          h1: { fontSize: '4.0rem' },
          h2: { fontSize: '3.0rem' },
          h3: { fontSize: '2.4rem' },
          h4: { fontSize: '1.8rem' },
          h5: { fontSize: '1.4rem' },
          h6: { fontSize: '1.2rem' },
        },
      }),
    [withLightMode],
  );
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
