import { alpha, Box } from '@mui/material';
import {
  type Component,
  type FunctionComponent,
  type PropsWithChildren,
} from 'react';
import { type Components } from 'react-markdown';
import { Prism, type SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock: FunctionComponent<PropsWithChildren<{ language: string }>> = ({
  children,
  language,
}) => (
  <Box
    // NOTE They don't support React 18 yet
    component={Prism as typeof Component<SyntaxHighlighterProps>}
    customStyle={{
      borderRadius: undefined,
      margin: undefined,
      padding: undefined,
    }}
    language={language || 'text'}
    style={oneDark}
    sx={({ shape }) => ({
      borderRadius: shape.borderRadius,
      display: 'block',
      fontSize: 'body2.fontSize',
      p: 2,
    })}
  >
    {typeof children === 'string' ? children.trim() : children}
  </Box>
);

const CodeInline: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <Box
    component="code"
    sx={({ palette }) => ({
      bgcolor: alpha(palette.primary.main, 0.2),
      borderRadius: 1,
      color: 'text.secondary',
      fontFamily: 'monospace',
      fontSize: 'body2.fontSize',
      px: 0.5,
      py: 0.25,
    })}
  >
    {children}
  </Box>
);

export const Code: Components['code'] = ({
  children,
  className = '',
  node,
}) => {
  if (!node?.position || !children) {
    console.error('Could not parse code node', node);
    return <>{children}</>;
  }
  if (node.position.start.line === node.position.end.line) {
    return <CodeInline>{children}</CodeInline>;
  }
  // NOTE Languages are passed down through the class name from `react-markdown`
  const [, language] = className.split('-');
  return <CodeBlock language={language || 'text'}>{children}</CodeBlock>;
};
