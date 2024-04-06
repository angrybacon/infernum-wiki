'use client';

import { Box, Divider } from '@mui/material';
import { type FunctionComponent } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';

import {
  Code,
  Heading,
  Image,
  Quote,
} from '@/components/Markdown/renderers';

const COMPONENTS = {
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
} as const satisfies Components;

type Props = { markdown: string };

export const Markdown: FunctionComponent<Props> = ({ markdown }) => (
  <Box
    component={ReactMarkdown}
    components={COMPONENTS}
    skipHtml
    sx={{ display: 'grid', gap: 4 }}
  >
    {markdown}
  </Box>
);
