import { Typography } from '@mui/material';
import { type Components } from 'react-markdown';

const VARIANTS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

export const Heading: Components['h1'] = ({ children, id, node }) => {
  const variant = node?.tagName as (typeof VARIANTS)[number] | undefined;
  if (!variant || !VARIANTS.includes(variant)) {
    console.error('Could not guess heading level', node);
  }
  return (
    <Typography gutterBottom id={id} variant={variant}>
      {children}
    </Typography>
  );
};
