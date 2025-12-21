import { Box, Toolbar, Typography, type TypographyProps } from '@mui/material';

import { Link } from '@/components/Link';

type Entry = {
  items?: Entry[];
  title?: string;
  url?: string;
};

const Entry = ({
  items,
  title,
  url,
  variant,
}: Entry & { variant: TypographyProps['variant'] }) =>
  title && url ? (
    <Typography component="li" variant={variant}>
      <Link href={url} sx={{ ':not(:hover)': { textDecoration: 'none' } }}>
        {title}
      </Link>
      {items && <Entries entries={items} variant="caption" />}
    </Typography>
  ) : null;

const Entries = ({
  entries,
  root = false,
  variant = 'subtitle2',
}: {
  entries: Entry[];
  root?: boolean;
  variant?: TypographyProps['variant'];
}) => (
  <Box
    component="ol"
    sx={[
      { display: 'grid', listStyleType: 'none', pl: 2 },
      root && { gap: 1, pl: 0 },
    ]}
  >
    {entries.map((entry) => (
      <Entry key={entry.title} variant={variant} {...entry} />
    ))}
  </Box>
);

type Props = {
  entries: Entry[];
};

export const Toc = ({ entries }: Props) => (
  <Box
    aria-label="Table of contents"
    component="nav"
    sx={{
      alignSelf: 'start',
      display: { xs: 'none', md: 'block' },
      gridArea: 'toc',
      pl: 3,
      pt: 2,
      position: 'sticky',
      top: 0,
      width: 240,
    }}
  >
    <Toolbar role="presentation" />
    <Entries entries={entries} root />
  </Box>
);
