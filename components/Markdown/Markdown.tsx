'use client';

import { Box, Divider } from '@mui/material';
import { type FunctionComponent } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';

import { Code } from '@/components/Markdown/Code';
import { Image } from '@/components/Markdown/Image';

const COMPONENTS = {
  code: Code,
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
