import { Box } from '@mui/material';
import {
  useState,
  type FunctionComponent,
  type PropsWithChildren,
} from 'react';
import { type ExtraProps } from 'react-markdown';

export const Spoiler: FunctionComponent<PropsWithChildren<ExtraProps>> = ({
  children,
  node,
}) => {
  const [isHidden, setIsHidden] = useState(true);

  if (!node?.position) {
    console.error('Could not parse spoiler node', node);
    return <>{children}</>;
  }

  const onSpoil = () => setIsHidden(false);

  const isInline = node.position.start.line === node.position.end.line;

  return (
    <Box
      component={isInline ? 'span' : 'div'}
      onClick={onSpoil}
      role="button"
      sx={[
        { backgroundColor: 'action.selected' },
        isHidden &&
          (({ palette }) => ({
            backgroundColor: palette.mode === 'dark' ? 'grey.900' : 'grey.400',
            color: 'transparent',
            cursor: 'pointer',
          })),
        isInline
          ? { borderRadius: 1, px: '2px', py: '.1em' }
          : ({ shape }) => ({ borderRadius: shape.borderRadius, p: 1 }),
      ]}
      title="Click to reveal"
    >
      {children}
    </Box>
  );
};
