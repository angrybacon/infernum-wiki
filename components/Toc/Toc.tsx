import { Box, Toolbar, Typography, type TypographyProps } from '@mui/material';
import { type FunctionComponent } from 'react';

import { Link } from '@/components/Link';

type Entry = { items?: Entry[]; title?: string; url?: string };

const Entry: FunctionComponent<
  Entry & { variant: TypographyProps['variant'] }
> = ({ items, title, url, variant }) =>
  title && url ? (
    <Typography component="li" variant={variant}>
      <Link href={url} sx={{ ':not(:hover)': { textDecoration: 'none' } }}>
        {title}
      </Link>
      {items && <Entries entries={items} variant="caption" />}
    </Typography>
  ) : null;

const Entries: FunctionComponent<{
  entries: Entry[];
  variant?: TypographyProps['variant'];
}> = ({ entries, variant = 'subtitle2' }) => (
  <ol>
    {entries.map((entry) => (
      <Entry key={entry.title} variant={variant} {...entry} />
    ))}
  </ol>
);

export const Toc: FunctionComponent<{ entries: Entry[] }> = ({ entries }) => (
  <Box
    aria-label="Table of contents"
    component="nav"
    sx={{
      alignSelf: 'start',
      display: { xs: 'none', md: 'block' },
      gridArea: 'toc',
      pt: 2,
      position: 'sticky',
      top: 0,
      width: 240,
    }}
  >
    <Toolbar role="presentation" />
    <Entries entries={entries} />
  </Box>
);
