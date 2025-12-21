'use client';

import { createTheme, responsiveFontSizes } from '@mui/material';

export const theme = responsiveFontSizes(
  createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          'blockquote, ol, p, pre, ul': { margin: 0, padding: 0 },
          html: { fontSize: 18, scrollBehavior: 'smooth' },
          'ol, ul': { paddingLeft: '1em' },
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
    cssVariables: true,
    palette: { mode: 'dark' },
    typography: {
      fontFamily: 'var(--font-roboto)',
      h1: { fontSize: '3.2rem' },
      h2: { fontSize: '2.6rem' },
      h3: { fontSize: '2.4rem' },
      h4: { fontSize: '2.0rem' },
      h5: { fontSize: '1.4rem' },
      h6: { fontSize: '1.2rem' },
    },
  }),
);
