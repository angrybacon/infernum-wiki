import { mdiFormatQuoteOpen } from '@mdi/js';
import Icon from '@mdi/react';
import { alpha, Box } from '@mui/material';
import { type FunctionComponent } from 'react';
import { type Components } from 'react-markdown';

const QuoteIcon: FunctionComponent<{ side: 'left' | 'right' }> = ({ side }) => (
  <Box
    component={Icon}
    path={mdiFormatQuoteOpen}
    rotate={side === 'left' ? 0 : 180}
    size={4}
    sx={[
      ({ palette }) => ({
        color: alpha(palette.secondary.main, 0.2),
        position: 'absolute',
      }),
      side === 'left' ? { left: 0, top: 0 } : { bottom: 0, right: 0 },
    ]}
  />
);

export const Quote: Components['blockquote'] = ({ children }) => (
  <Box
    component="blockquote"
    sx={({ palette, shape }) => ({
      bgcolor: alpha(palette.secondary.main, 0.2),
      borderRadius: shape.borderRadius,
      display: 'grid',
      fontStyle: 'italic',
      gap: 2,
      overflow: 'hidden',
      p: 2,
      position: 'relative',
    })}
  >
    <QuoteIcon side="left" />
    <QuoteIcon side="right" />
    {children}
  </Box>
);
