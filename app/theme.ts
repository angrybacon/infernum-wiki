'use client';

import { createTheme } from '@mui/material';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export const theme = createTheme({
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
          // NOTE Assume the wrapping parent already handles spacing
          //      between each child.
          marginBottom: theme.spacing(1),
          marginTop: theme.spacing(2),
        }),
      },
    },
  },
  palette: { mode: 'dark' },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: { fontSize: '4.0rem' },
    h2: { fontSize: '3.0rem' },
    h3: { fontSize: '2.4rem' },
    h4: { fontSize: '1.8rem' },
    h5: { fontSize: '1.4rem' },
    h6: { fontSize: '1.2rem' },
  },
});
