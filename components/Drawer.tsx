'use client';

import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer as MuiDrawer,
  Toolbar,
} from '@mui/material';
import { FunctionComponent, useContext } from 'react';

import { DrawerContext } from '@/contexts/DrawerContext';

const WIDTH = 240;

const MENU: string[] = [
  'Core',
  'Ancillary Mechanics',
  'Assets Explanation',
  'Asset Database',
  'Appendices',
  'Articles',
];

export const Drawer: FunctionComponent = () => {
  const { isOpen, onClose } = useContext(DrawerContext);

  const drawer = (
    <>
      <Toolbar role="presentation" />
      <Divider />
      <List>
        {MENU.map((entry) => (
          <ListItem disablePadding key={entry}>
            <ListItemButton>
              <ListItemText primary={entry} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, width: { md: WIDTH } }}>
      <MuiDrawer
        ModalProps={{ keepMounted: true }}
        onClose={onClose}
        open={isOpen}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: WIDTH },
        }}
        variant="temporary"
      >
        {drawer}
      </MuiDrawer>
      <MuiDrawer
        open
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: WIDTH },
        }}
        variant="permanent"
      >
        {drawer}
      </MuiDrawer>
    </Box>
  );
};
