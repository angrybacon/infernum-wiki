'use client';

import { mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import {
  alpha,
  AppBar,
  Divider,
  IconButton,
  Toolbar,
  useScrollTrigger,
} from '@mui/material';
import { FunctionComponent, useContext } from 'react';

import { DrawerContext } from '@/contexts/DrawerContext';

export const Header: FunctionComponent = () => {
  const { onOpen } = useContext(DrawerContext);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  return (
    <AppBar
      elevation={trigger ? 4 : 0}
      sx={({ palette }) => ({
        backdropFilter: 'blur(8px)',
        backgroundColor: alpha(palette.background.paper, 0.8),
        backgroundImage: 'none',
        color: palette.text.primary,
      })}
    >
      <Toolbar>
        <IconButton onClick={onOpen} sx={{ display: { md: 'none' } }}>
          <Icon aria-label="Open drawer" path={mdiMenu} size={1} />
        </IconButton>
      </Toolbar>
      <Divider />
    </AppBar>
  );
};
