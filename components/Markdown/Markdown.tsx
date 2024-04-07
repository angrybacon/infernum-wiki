'use client';

import { Box, Divider, Typography } from '@mui/material';
import { type FunctionComponent } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';

import { remarkName } from '@/components/Markdown/plugins';
import {
  Code,
  Heading,
  Image,
  Link,
  Quote,
  Spoiler,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@/components/Markdown/renderers';

const COMPONENTS = {
  a: Link,
  blockquote: Quote,
  code: Code,
  h1: Heading,
  h2: Heading,
  h3: Heading,
  h4: Heading,
  h5: Heading,
  h6: Heading,
  hr: () => <Divider />,
  img: Image,
  pre: ({ children }) => <>{children}</>,
  table: Table,
  tbody: TableBody,
  td: TableCell,
  th: TableCell,
  thead: TableHead,
  tr: TableRow,
} as const satisfies Components;

const COMPONENTS_EXTRA = {
  spoiler: Spoiler,
} as const;

type Props = { markdown: string; title?: string };

export const Markdown: FunctionComponent<Props> = ({ markdown, title }) => (
  <>
    {title && <Typography variant="h1">{title}</Typography>}
    <Box
      component={ReactMarkdown}
      components={{ ...COMPONENTS, ...COMPONENTS_EXTRA }}
      remarkPlugins={[remarkDirective, remarkGfm, remarkName]}
      skipHtml
      sx={{ display: 'grid', gap: 4 }}
    >
      {markdown}
    </Box>
  </>
);
